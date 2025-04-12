package com.demo.spring.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.SubscriberInfo;
import com.demo.spring.repository.SubscriberInfoRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class SubscriberInfoService {

    private final SubscriberInfoRepository subscriberInfoRepository;

    @Autowired
    public SubscriberInfoService(SubscriberInfoRepository subscriberInfoRepository) {
        this.subscriberInfoRepository = subscriberInfoRepository;
    }

    // Create new subscriber info
    @Transactional
    public SubscriberInfo createSubscriberInfo(SubscriberInfo subscriberInfo) {
        // Set default values if not provided
        if (subscriberInfo.getSubscriberStatus() == null) {
            subscriberInfo.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Inactive);
        }
        
        if (subscriberInfo.getIsAutopayEnabled() == null) {
            subscriberInfo.setIsAutopayEnabled(false);
        }
        
        if (subscriberInfo.getAutopayReminderDays() == null) {
            subscriberInfo.setAutopayReminderDays(1);
        }

        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Get subscriber info by ID
    public SubscriberInfo getSubscriberInfoById(Long id) {
        return subscriberInfoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("SubscriberInfo not found with id: " + id));
    }

    // Get subscriber info by subscriber ID
    public SubscriberInfo getSubscriberInfoBySubscriberId(Long subscriberId) {
        return subscriberInfoRepository.findBySubscriberId(subscriberId)
                .orElseThrow(() -> new ResourceNotFoundException("SubscriberInfo not found for subscriber id: " + subscriberId));
    }

    // Update subscriber info
    @Transactional
    public SubscriberInfo updateSubscriberInfo(Long id, SubscriberInfo subscriberInfoDetails) {
        SubscriberInfo subscriberInfo = getSubscriberInfoById(id);
        
        // Update fields
        if (subscriberInfoDetails.getCurrentPlanId() != null) {
            subscriberInfo.setCurrentPlanId(subscriberInfoDetails.getCurrentPlanId());
        }
        
        if (subscriberInfoDetails.getDataBalance() != null) {
            subscriberInfo.setDataBalance(subscriberInfoDetails.getDataBalance());
        }
        
        if (subscriberInfoDetails.getVoiceBalance() != null) {
            subscriberInfo.setVoiceBalance(subscriberInfoDetails.getVoiceBalance());
        }
        
        if (subscriberInfoDetails.getSmsBalance() != null) {
            subscriberInfo.setSmsBalance(subscriberInfoDetails.getSmsBalance());
        }
        
        if (subscriberInfoDetails.getPlanActivationDate() != null) {
            subscriberInfo.setPlanActivationDate(subscriberInfoDetails.getPlanActivationDate());
        }
        
        if (subscriberInfoDetails.getPlanExpiryDate() != null) {
            subscriberInfo.setPlanExpiryDate(subscriberInfoDetails.getPlanExpiryDate());
        }
        
        if (subscriberInfoDetails.getSubscriberStatus() != null) {
            subscriberInfo.setSubscriberStatus(subscriberInfoDetails.getSubscriberStatus());
        }
        
        if (subscriberInfoDetails.getIsAutopayEnabled() != null) {
            subscriberInfo.setIsAutopayEnabled(subscriberInfoDetails.getIsAutopayEnabled());
        }
        
        if (subscriberInfoDetails.getPreferredPaymentMethodId() != null) {
            subscriberInfo.setPreferredPaymentMethodId(subscriberInfoDetails.getPreferredPaymentMethodId());
        }
        
        if (subscriberInfoDetails.getAutopayReminderDays() != null) {
            subscriberInfo.setAutopayReminderDays(subscriberInfoDetails.getAutopayReminderDays());
        }

        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Delete subscriber info
    @Transactional
    public void deleteSubscriberInfo(Long id) {
        SubscriberInfo subscriberInfo = getSubscriberInfoById(id);
        subscriberInfoRepository.delete(subscriberInfo);
    }

    // Get all subscriber info records
    public List<SubscriberInfo> getAllSubscriberInfos() {
        return subscriberInfoRepository.findAll();
    }

    // Business logic methods
    
    // Activate subscriber
    @Transactional
    public SubscriberInfo activateSubscriber(Long subscriberId) {
        SubscriberInfo subscriberInfo = getSubscriberInfoBySubscriberId(subscriberId);
        subscriberInfo.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Active);
        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Deactivate subscriber
    @Transactional
    public SubscriberInfo deactivateSubscriber(Long subscriberId) {
        SubscriberInfo subscriberInfo = getSubscriberInfoBySubscriberId(subscriberId);
        subscriberInfo.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Inactive);
        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Block subscriber
    @Transactional
    public SubscriberInfo blockSubscriber(Long subscriberId) {
        SubscriberInfo subscriberInfo = getSubscriberInfoBySubscriberId(subscriberId);
        subscriberInfo.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Blocked);
        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Process usage
    @Transactional
    public SubscriberInfo processUsage(Long subscriberId, BigDecimal dataUsed, Integer voiceUsed, Integer smsUsed) {
        SubscriberInfo subscriberInfo = getSubscriberInfoBySubscriberId(subscriberId);
        
        // Check if subscriber is active
        if (subscriberInfo.getSubscriberStatus() != SubscriberInfo.SubscriberStatus.Active) {
            throw new IllegalStateException("Subscriber is not active");
        }
        
        // Check and update data balance
        if (dataUsed != null && subscriberInfo.getDataBalance() != null) {
            BigDecimal newBalance = subscriberInfo.getDataBalance().subtract(dataUsed);
            if (newBalance.compareTo(BigDecimal.ZERO) < 0) {
                throw new IllegalStateException("Insufficient data balance");
            }
            subscriberInfo.setDataBalance(newBalance);
        }
        
        // Check and update voice balance
        if (voiceUsed != null && subscriberInfo.getVoiceBalance() != null) {
            int newBalance = subscriberInfo.getVoiceBalance() - voiceUsed;
            if (newBalance < 0) {
                throw new IllegalStateException("Insufficient voice balance");
            }
            subscriberInfo.setVoiceBalance(newBalance);
        }
        
        // Check and update SMS balance
        if (smsUsed != null && subscriberInfo.getSmsBalance() != null) {
            int newBalance = subscriberInfo.getSmsBalance() - smsUsed;
            if (newBalance < 0) {
                throw new IllegalStateException("Insufficient SMS balance");
            }
            subscriberInfo.setSmsBalance(newBalance);
        }
        
        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Recharge subscriber plan
    @Transactional
    public SubscriberInfo rechargePlan(Long subscriberId, Long planId, BigDecimal dataBalance, 
                                      Integer voiceBalance, Integer smsBalance, LocalDateTime expiryDate) {
        SubscriberInfo subscriberInfo = getSubscriberInfoBySubscriberId(subscriberId);
        
        // Subscriber must not be blocked
        if (subscriberInfo.getSubscriberStatus() == SubscriberInfo.SubscriberStatus.Blocked) {
            throw new IllegalStateException("Cannot recharge a blocked subscriber");
        }
        
        // Update plan details
        subscriberInfo.setCurrentPlanId(planId);
        subscriberInfo.setDataBalance(dataBalance);
        subscriberInfo.setVoiceBalance(voiceBalance);
        subscriberInfo.setSmsBalance(smsBalance);
        subscriberInfo.setPlanActivationDate(LocalDateTime.now());
        subscriberInfo.setPlanExpiryDate(expiryDate);
        subscriberInfo.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Active);
        
        return subscriberInfoRepository.save(subscriberInfo);
    }

    // Process autopay
    @Transactional
    public List<SubscriberInfo> processAutopayForExpiringSubscribers(int daysBeforeExpiry) {
        LocalDateTime startDate = LocalDateTime.now();
        LocalDateTime endDate = startDate.plusDays(daysBeforeExpiry);
        
        List<SubscriberInfo> subscribersForAutopay = subscriberInfoRepository
                .findSubscribersForAutopay(startDate, endDate);
        
        // In a real application, this would include payment processing logic
        // For now, we'll just return the list of eligible subscribers
        return subscribersForAutopay;
    }

    // Check and update expired plans
    @Transactional
    public List<SubscriberInfo> deactivateExpiredPlans() {
        List<SubscriberInfo> expiredSubscribers = subscriberInfoRepository
                .findByPlanExpiryDateBeforeAndSubscriberStatus(LocalDateTime.now(), SubscriberInfo.SubscriberStatus.Active);
        
        for (SubscriberInfo subscriber : expiredSubscribers) {
            subscriber.setSubscriberStatus(SubscriberInfo.SubscriberStatus.Inactive);
            subscriberInfoRepository.save(subscriber);
        }
        
        return expiredSubscribers;
    }

    // Get subscribers by status
    public List<SubscriberInfo> getSubscribersByStatus(SubscriberInfo.SubscriberStatus status) {
        return subscriberInfoRepository.findBySubscriberStatus(status);
    }

	@Transactional
	public void updatePlan(Integer userId, Integer planId, LocalDate expiryDate) {
		SubscriberInfo subscriberInfo = subscriberInfoRepository.findBySubscriberId(userId.longValue())
				.orElseThrow(() -> new ResourceNotFoundException("SubscriberInfo not found for subscriber id: " + userId));
		subscriberInfo.setCurrentPlanId(planId.longValue());
		subscriberInfo.setPlanExpiryDate(expiryDate.atStartOfDay());
		subscriberInfoRepository.save(subscriberInfo);
		
	}
}
