package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.Plan;
import com.demo.spring.model.Recharge;
import com.demo.spring.model.Transaction;
import com.demo.spring.model.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Integer> {
    List<Recharge> findBySubscriber(User subscriber);
    List<Recharge> findByPlan(Plan plan);
    List<Recharge> findByRechargeDateBetween(LocalDateTime start, LocalDateTime end);
    Optional<Recharge> findByTransaction(Transaction transaction);
    
    @Query("SELECT r FROM Recharge r WHERE r.subscriber.userId = :subscriberId ORDER BY r.rechargeDate DESC")
    List<Recharge> findLatestRechargesBySubscriberId(@Param("subscriberId") Integer subscriberId);
}