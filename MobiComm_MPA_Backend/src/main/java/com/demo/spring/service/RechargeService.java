package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.model.*;
import com.demo.spring.repository.PlanRepository;
import com.demo.spring.repository.RechargeRepository;
import com.demo.spring.repository.TransactionRepository;
import com.demo.spring.repository.UserRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class RechargeService {
    
    private final RechargeRepository rechargeRepository;
    private final UserRepository userRepository;
    private final PlanRepository planRepository;
    private final TransactionRepository transactionRepository;
    private final SubscriberInfoService subscriberInfoService;
    
    @Autowired
    public RechargeService(
            RechargeRepository rechargeRepository,
            UserRepository userRepository,
            PlanRepository planRepository,
            TransactionRepository transactionRepository,
            SubscriberInfoService subscriberInfoService) {
        this.rechargeRepository = rechargeRepository;
        this.userRepository = userRepository;
        this.planRepository = planRepository;
        this.transactionRepository = transactionRepository;
        this.subscriberInfoService = subscriberInfoService;
    }
    
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }
    
    public Recharge getRechargeById(Integer id) {
        return rechargeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Recharge not found with id: " + id));
    }
    
    public List<Recharge> getRechargesBySubscriber(Integer subscriberId) {
        User subscriber = userRepository.findById(subscriberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + subscriberId));
        return rechargeRepository.findBySubscriber(subscriber);
    }
    
    public List<Recharge> getRechargesByPlan(Integer planId) {
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new EntityNotFoundException("Plan not found with id: " + planId));
        return rechargeRepository.findByPlan(plan);
    }
    
    public List<Recharge> getRechargesByDateRange(LocalDateTime start, LocalDateTime end) {
        return rechargeRepository.findByRechargeDateBetween(start, end);
    }
    
    public List<Recharge> getLatestRechargesBySubscriberId(Integer subscriberId) {
        return rechargeRepository.findLatestRechargesBySubscriberId(subscriberId);
    }
    
    @Transactional
    public Recharge createRecharge(Recharge recharge) {
        // Check if transaction exists and is successful
        Transaction transaction = recharge.getTransaction();
        if (transaction.getTransactionStatus() != Transaction.TransactionStatus.SUCCESS) {
            throw new IllegalArgumentException("Cannot create recharge for non-successful transaction");
        }
        
        // Check if recharge already exists for this transaction
        if (rechargeRepository.findByTransaction(transaction).isPresent()) {
            throw new IllegalArgumentException("Recharge already exists for transaction id: " + transaction.getTransactionId());
        }
        
        // Save the recharge
        Recharge savedRecharge = rechargeRepository.save(recharge);
        
        // Update subscriber info
        User subscriber = recharge.getSubscriber();
        Plan plan = recharge.getPlan();
        LocalDate expiryDate = LocalDate.now().plusDays(plan.getValidity());
        
        subscriberInfoService.updatePlan(subscriber.getUserId(), plan.getPlanId(), expiryDate);
        
        return savedRecharge;
    }
    
    @Transactional
    public Recharge processRecharge(Integer subscriberId, Integer planId, Integer transactionId) {
        User subscriber = userRepository.findById(subscriberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + subscriberId));
        
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new EntityNotFoundException("Plan not found with id: " + planId));
        
        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + transactionId));
        
        // Validate transaction status
        if (transaction.getTransactionStatus() != Transaction.TransactionStatus.SUCCESS) {
            throw new IllegalArgumentException("Cannot create recharge for non-successful transaction");
        }
        
        // Create recharge
        Recharge recharge = new Recharge();
        recharge.setSubscriber(subscriber);
        recharge.setPlan(plan);
        recharge.setTransaction(transaction);
        recharge.setRechargeDate(LocalDateTime.now());
        
        // Save the recharge
        Recharge savedRecharge = rechargeRepository.save(recharge);
        
        // Update subscriber info
        LocalDate expiryDate = LocalDate.now().plusDays(plan.getValidity());
        subscriberInfoService.updatePlan(subscriberId, planId, expiryDate);
        
        return savedRecharge;
    }
  //In RechargeService.java
    public void deleteRecharge(Integer id) {
        rechargeRepository.deleteById(id);
    }

    @Transactional
	public Recharge processRechargeForQuickRecharge(Integer subscriberId, Integer planId, Integer transactionId) {
		User subscriber = userRepository.findById(subscriberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + subscriberId));
        
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new EntityNotFoundException("Plan not found with id: " + planId));
        
        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + transactionId));
        
        // Validate transaction status
        if (transaction.getTransactionStatus() != Transaction.TransactionStatus.SUCCESS) {
            throw new IllegalArgumentException("Cannot create recharge for non-successful transaction");
        }
        
        // Create recharge
        Recharge recharge = new Recharge();
        recharge.setSubscriber(subscriber);
        recharge.setPlan(plan);
        recharge.setTransaction(transaction);
        recharge.setRechargeDate(LocalDateTime.now());
        
        // Save the recharge
        Recharge savedRecharge = rechargeRepository.save(recharge);
        
        // Update subscriber info
        LocalDate expiryDate = LocalDate.now().plusDays(plan.getValidity());
        subscriberInfoService.updatePlan(subscriberId, planId, expiryDate);
        
        return savedRecharge;
	}


}
