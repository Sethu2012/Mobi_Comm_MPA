package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.model.PaymentMethod;
import com.demo.spring.model.Transaction;
import com.demo.spring.model.User;
import com.demo.spring.repository.PaymentMethodRepository;
import com.demo.spring.repository.TransactionRepository;
import com.demo.spring.repository.UserRepository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TransactionService {
    
    private final TransactionRepository transactionRepository ;
    private final UserRepository userRepository ;
    
    @Autowired
    private PaymentMethodRepository paymentMethodRepository;
    
    @Autowired
    public TransactionService  (TransactionRepository transactionRepository,UserRepository userRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
    
    public Transaction getTransactionById(Integer id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + id));
    }
    
    public List<Transaction> getTransactionsBySubscriber(Integer subscriberId) {
        User subscriber = userRepository.findById(subscriberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + subscriberId));
        return transactionRepository.findBySubscriber(subscriber);
    }
    
    public List<Transaction> getTransactionsByStatus(Transaction.TransactionStatus status) {
        return transactionRepository.findByTransactionStatus(status);
    }
    
    public List<Transaction> getTransactionsByDateRange(LocalDateTime start, LocalDateTime end) {
        return transactionRepository.findByTransactionDateBetween(start, end);
    }
    
    public List<Transaction> getSuccessfulTransactionsBySubscriberId(Integer subscriberId) {
        return transactionRepository.findSuccessfulTransactionsBySubscriberId(subscriberId);
    }
    
    @Transactional
    public Transaction createTransaction(Transaction transaction) {
        if (transaction.getTransactionRef() == null || transaction.getTransactionRef().trim().isEmpty()) {
            transaction.setTransactionRef("TXN" + UUID.randomUUID().toString().replace("-", "").substring(0, 9));
        }
        return transactionRepository.save(transaction);
    }


    
    @Transactional
    public Transaction updateTransactionStatus(Integer id, Transaction.TransactionStatus status) {
        Transaction transaction = getTransactionById(id);
        transaction.setTransactionStatus(status);
        return transactionRepository.save(transaction);
    }
    
    @Transactional
    public Transaction processPayment(Transaction transaction) {
        // Implementation would connect to an actual payment gateway
        // Here we're simulating a successful transaction
        transaction.setTransactionStatus(Transaction.TransactionStatus.SUCCESS);
        return transactionRepository.save(transaction);
    }
    
    @Transactional
	public Transaction createTransactionForQuickRecharge(@Valid Transaction transaction) {
		 if (transaction.getTransactionRef() == null || transaction.getTransactionRef().trim().isEmpty()) {
	            transaction.setTransactionRef("TXN" + UUID.randomUUID().toString().replace("-", "").substring(0, 9));
	        }
	        return transactionRepository.save(transaction);
	}
}
