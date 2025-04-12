package com.demo.spring.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.spring.service.OtpService;
import com.demo.spring.exception.InvalidOtpException;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "http://127.0.0.1:5500", allowCredentials = "true")
public class OtpController {

    private static final Logger logger = LoggerFactory.getLogger(OtpController.class);
    
    private final OtpService otpService;

    public OtpController(OtpService otpService) {
        this.otpService = otpService;
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendOtp(@RequestParam String phoneNumber) {
        try {
            logger.info("Received OTP send request for phone number: {}", phoneNumber);
            String response = otpService.generateAndSendOtp(phoneNumber);
            logger.info("OTP send response: {}", response);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error sending OTP: {}", e.getMessage(), e);
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to send OTP: " + e.getMessage());
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyOtp(@RequestParam String phoneNumber, @RequestParam String otp) {
        try {
            logger.info("Received OTP verification request for phone number: {}", phoneNumber);
            boolean isValid = otpService.verifyOtp(phoneNumber, otp);
            
            if (!isValid) {
                logger.warn("Invalid OTP verification attempt for phone number: {}", phoneNumber);
                return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Invalid OTP or OTP Expired!");
            }
            
            logger.info("OTP verification successful for phone number: {}", phoneNumber);
            return ResponseEntity.ok("OTP Verified Successfully!");
        } catch (Exception e) {
            logger.error("Error verifying OTP: {}", e.getMessage(), e);
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to verify OTP: " + e.getMessage());
        }
    }
    
    @ExceptionHandler(InvalidOtpException.class)
    public ResponseEntity<?> handleInvalidOtpException(InvalidOtpException ex) {
        logger.warn("InvalidOtpException: {}", ex.getMessage());
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ex.getMessage());
    }
}