package com.demo.spring.service;

import com.demo.spring.model.OtpVerification;
import com.demo.spring.repository.OtpVerificationRepository;
import com.twilio.Twilio;
import com.twilio.exception.ApiException;
import com.twilio.rest.api.v2010.account.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class OtpService {

    private static final Logger logger = LoggerFactory.getLogger(OtpService.class);

    @Value("${twilio.account_sid}")
    private String accountSid;

    @Value("${twilio.auth_token}")
    private String authToken;

    @Value("${twilio.phone_number}")
    private String fromPhoneNumber;

    private final OtpVerificationRepository otpRepository;

    public OtpService(OtpVerificationRepository otpRepository) {
        this.otpRepository = otpRepository;
    }

    public String generateAndSendOtp(String phoneNumber) {
        try {
            // Generate a random 6-digit OTP
            String otp = String.format("%06d", new Random().nextInt(999999));

            // Format phone number correctly with international format
            String formattedPhoneNumber = formatPhoneNumber(phoneNumber);
            
            logger.info("Sending OTP to: {}", formattedPhoneNumber);

            // Save OTP to database first
            OtpVerification otpVerification = new OtpVerification();
            otpVerification.setPhoneNumber(formattedPhoneNumber);
            otpVerification.setOtp(otp);
            otpVerification.setGeneratedTime(LocalDateTime.now());
            otpRepository.save(otpVerification);

            // Initialize Twilio
            logger.info("Initializing Twilio with account SID: {}", accountSid.substring(0, 5) + "...");
            Twilio.init(accountSid, authToken);

            // Send OTP via Twilio
            try {
                Message message = Message.creator(
                        new com.twilio.type.PhoneNumber(formattedPhoneNumber),
                        new com.twilio.type.PhoneNumber(fromPhoneNumber),
                        "Your OTP code is: " + otp
                ).create();
                
                logger.info("Twilio message sent with SID: {}", message.getSid());
                return "OTP sent successfully to " + formattedPhoneNumber;
            } catch (ApiException e) {
                logger.error("Twilio API error: {}", e.getMessage());
                throw new RuntimeException("Failed to send OTP via Twilio: " + e.getMessage());
            }
        } catch (Exception e) {
            logger.error("Error in generateAndSendOtp: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to generate and send OTP: " + e.getMessage());
        }
    }

    public boolean verifyOtp(String phoneNumber, String otp) {
        try {
            // Format phone number correctly
            String formattedPhoneNumber = formatPhoneNumber(phoneNumber);
            
            logger.info("Verifying OTP for phone number: {}", formattedPhoneNumber);

            Optional<OtpVerification> otpRecord = otpRepository.findByPhoneNumber(formattedPhoneNumber);
            
            if (otpRecord.isPresent()) {
                OtpVerification storedOtp = otpRecord.get();
                
                logger.info("Found OTP record. Generated time: {}", storedOtp.getGeneratedTime());
                
                // Check if OTP matches and is valid for 5 minutes
                if (storedOtp.getOtp().equals(otp) &&
                    storedOtp.getGeneratedTime().isAfter(LocalDateTime.now().minusMinutes(5))) {
                    logger.info("OTP verification successful");
                    return true;
                } else {
                    logger.info("OTP verification failed. OTP matched: {}, Within time: {}", 
                        storedOtp.getOtp().equals(otp),
                        storedOtp.getGeneratedTime().isAfter(LocalDateTime.now().minusMinutes(5)));
                }
            } else {
                logger.info("No OTP record found for phone number: {}", formattedPhoneNumber);
            }
            
            return false;
        } catch (Exception e) {
            logger.error("Error in verifyOtp: {}", e.getMessage(), e);
            return false;
        }
    }
    
    private String formatPhoneNumber(String phoneNumber) {
        // Remove any spaces
        String trimmed = phoneNumber.trim();
        
        // For Indian numbers: if it's a 10-digit number without +91 prefix, add it
        if (trimmed.matches("^[6-9]\\d{9}$")) {
            return "+91" + trimmed;
        }
        
        // If it already has a + prefix, return as is
        if (trimmed.startsWith("+")) {
            return trimmed;
        }
        
        // Otherwise, just add a + prefix
        return "+" + trimmed;
    }
}