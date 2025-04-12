package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.Plan;
import com.demo.spring.model.SubscriberInfo;
import com.demo.spring.model.SubscriberInfo.SubscriberStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriberInfoRepository extends JpaRepository<SubscriberInfo, Long> {

    // Find by subscriber ID
    Optional<SubscriberInfo> findBySubscriberId(Long subscriberId);

    // Find all subscribers with a specific status
    List<SubscriberInfo> findBySubscriberStatus(SubscriberStatus status);

    // Find subscribers with plans expiring soon for autopay processing
    @Query("SELECT s FROM SubscriberInfo s WHERE s.planExpiryDate BETWEEN :start AND :end " +
           "AND s.isAutopayEnabled = true AND s.subscriberStatus = 'Active'")
    List<SubscriberInfo> findSubscribersForAutopay(
            @Param("start") LocalDateTime start, 
            @Param("end") LocalDateTime end);

    // Find subscribers with expired plans
    List<SubscriberInfo> findByPlanExpiryDateBeforeAndSubscriberStatus(
            LocalDateTime dateTime, SubscriberStatus status);

    // Count subscribers by plan ID
    long countByCurrentPlanId(Long planId);

    // Find subscribers with low balances (for notification purposes)
    @Query("SELECT s FROM SubscriberInfo s WHERE " +
           "(s.dataBalance < :dataThreshold OR " +
           "s.voiceBalance < :voiceThreshold OR " +
           "s.smsBalance < :smsThreshold) AND " +
           "s.subscriberStatus = 'Active'")
    List<SubscriberInfo> findSubscribersWithLowBalances(
            @Param("dataThreshold") double dataThreshold, 
            @Param("voiceThreshold") int voiceThreshold, 
            @Param("smsThreshold") int smsThreshold);
    
    List<SubscriberInfo> findByCurrentPlanId(Long planId);
    
    
    
}