package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.Transaction;
import com.demo.spring.model.User;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findBySubscriber(User subscriber);
    List<Transaction> findByTransactionStatus(Transaction.TransactionStatus status);
    List<Transaction> findByTransactionDateBetween(LocalDateTime start, LocalDateTime end);
    
    @Query("SELECT t FROM Transaction t WHERE t.subscriber.userId = :subscriberId AND t.transactionStatus = 'Success'")
    List<Transaction> findSuccessfulTransactionsBySubscriberId(Integer subscriberId);
    
    List<Transaction> findByTransactionRef(String transactionRef);
}