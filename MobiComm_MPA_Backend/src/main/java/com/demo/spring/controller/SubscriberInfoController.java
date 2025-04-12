package com.demo.spring.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.SubscriberInfo;
import com.demo.spring.model.SubscriberInfo.SubscriberStatus;
import com.demo.spring.service.SubscriberInfoService;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@EnableMethodSecurity
@RequestMapping("/api/subscribers")
public class SubscriberInfoController {

    private final SubscriberInfoService subscriberInfoService;

    @Autowired
    public SubscriberInfoController(SubscriberInfoService subscriberInfoService) {
        this.subscriberInfoService = subscriberInfoService;
    }

    // Create a new subscriber
    @PostMapping
    public ResponseEntity<SubscriberInfo> createSubscriberInfo(@Valid @RequestBody SubscriberInfo subscriberInfo) {
        SubscriberInfo newSubscriberInfo = subscriberInfoService.createSubscriberInfo(subscriberInfo);
        return new ResponseEntity<>(newSubscriberInfo, HttpStatus.CREATED);
    }

    // Get subscriber by ID
    @GetMapping("/{id}")
    public ResponseEntity<SubscriberInfo> getSubscriberInfoById(@PathVariable Long id) {
        SubscriberInfo subscriberInfo = subscriberInfoService.getSubscriberInfoById(id);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Get subscriber by subscriber ID
    @GetMapping("/bySubscriberId/{subscriberId}")
    @PreAuthorize("hasAnyRole('Admin', 'Subscriber')")
    public ResponseEntity<SubscriberInfo> getSubscriberInfoBySubscriberId(@PathVariable Long subscriberId) {
        SubscriberInfo subscriberInfo = subscriberInfoService.getSubscriberInfoBySubscriberId(subscriberId);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Get all subscribers
    @GetMapping
    public ResponseEntity<List<SubscriberInfo>> getAllSubscriberInfos() {
        List<SubscriberInfo> subscriberInfos = subscriberInfoService.getAllSubscriberInfos();
        return ResponseEntity.ok(subscriberInfos);
    }

    // Update subscriber
    @PutMapping("/{id}")
    public ResponseEntity<SubscriberInfo> updateSubscriberInfo(
            @PathVariable Long id, @Valid @RequestBody SubscriberInfo subscriberInfoDetails) {
        SubscriberInfo updatedSubscriberInfo = subscriberInfoService.updateSubscriberInfo(id, subscriberInfoDetails);
        return ResponseEntity.ok(updatedSubscriberInfo);
    }

    // Delete subscriber
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSubscriberInfo(@PathVariable Long id) {
        subscriberInfoService.deleteSubscriberInfo(id);
        
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // Get subscribers by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<SubscriberInfo>> getSubscribersByStatus(
            @PathVariable SubscriberStatus status) {
        List<SubscriberInfo> subscribers = subscriberInfoService.getSubscribersByStatus(status);
        return ResponseEntity.ok(subscribers);
    }

    // Activate subscriber
    @PutMapping("/{subscriberId}/activate")
    public ResponseEntity<SubscriberInfo> activateSubscriber(@PathVariable Long subscriberId) {
        SubscriberInfo subscriberInfo = subscriberInfoService.activateSubscriber(subscriberId);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Deactivate subscriber
    @PutMapping("/{subscriberId}/deactivate")
    public ResponseEntity<SubscriberInfo> deactivateSubscriber(@PathVariable Long subscriberId) {
        SubscriberInfo subscriberInfo = subscriberInfoService.deactivateSubscriber(subscriberId);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Block subscriber
    @PutMapping("/{subscriberId}/block")
    public ResponseEntity<SubscriberInfo> blockSubscriber(@PathVariable Long subscriberId) {
        SubscriberInfo subscriberInfo = subscriberInfoService.blockSubscriber(subscriberId);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Process usage
    @PostMapping("/{subscriberId}/usage")
    public ResponseEntity<SubscriberInfo> processUsage(
            @PathVariable Long subscriberId,
            @RequestParam(required = false) BigDecimal dataUsed,
            @RequestParam(required = false) Integer voiceUsed,
            @RequestParam(required = false) Integer smsUsed) {
        
        SubscriberInfo subscriberInfo = subscriberInfoService.processUsage(
                subscriberId, dataUsed, voiceUsed, smsUsed);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Recharge plan
    @PostMapping("/{subscriberId}/recharge")
    public ResponseEntity<SubscriberInfo> rechargePlan(
            @PathVariable Long subscriberId,
            @RequestParam Long planId,
            @RequestParam BigDecimal dataBalance,
            @RequestParam Integer voiceBalance,
            @RequestParam Integer smsBalance,
            @RequestParam LocalDateTime expiryDate) {
        
        SubscriberInfo subscriberInfo = subscriberInfoService.rechargePlan(
                subscriberId, planId, dataBalance, voiceBalance, smsBalance, expiryDate);
        return ResponseEntity.ok(subscriberInfo);
    }

    // Process autopay for subscribers with expiring plans
    @PostMapping("/autopay/process")
    public ResponseEntity<List<SubscriberInfo>> processAutopay(
            @RequestParam(defaultValue = "1") int daysBeforeExpiry) {
        List<SubscriberInfo> processedSubscribers = 
                subscriberInfoService.processAutopayForExpiringSubscribers(daysBeforeExpiry);
        return ResponseEntity.ok(processedSubscribers);
    }

    // Update expired plans
    @PostMapping("/expired/update")
    public ResponseEntity<List<SubscriberInfo>> updateExpiredPlans() {
        List<SubscriberInfo> updatedSubscribers = subscriberInfoService.deactivateExpiredPlans();
        return ResponseEntity.ok(updatedSubscribers);
    }
}