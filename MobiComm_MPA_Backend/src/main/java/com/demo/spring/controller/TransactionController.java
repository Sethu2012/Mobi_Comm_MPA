package com.demo.spring.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.demo.spring.model.Transaction;
import com.demo.spring.service.PaymentMethodService;
import com.demo.spring.service.TransactionService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {
    
    private final TransactionService transactionService;
    
    @Autowired
    public TransactionController (TransactionService transactionService) {
        this.transactionService = transactionService;
    }
    
    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        return ResponseEntity.ok(transactionService.getAllTransactions());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(transactionService.getTransactionById(id));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
    
    @GetMapping("/subscriber/{subscriberId}")
    public ResponseEntity<List<Transaction>> getTransactionsBySubscriber(@PathVariable Integer subscriberId) {
        try {
            return ResponseEntity.ok(transactionService.getTransactionsBySubscriber(subscriberId));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Transaction>> getTransactionsByStatus(
            @PathVariable Transaction.TransactionStatus status) {
        return ResponseEntity.ok(transactionService.getTransactionsByStatus(status));
    }
    
    @GetMapping("/date-range")
    public ResponseEntity<List<Transaction>> getTransactionsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        return ResponseEntity.ok(transactionService.getTransactionsByDateRange(start, end));
    }
    
    @GetMapping("/successful/subscriber/{subscriberId}")
    public ResponseEntity<List<Transaction>> getSuccessfulTransactionsBySubscriberId(
            @PathVariable Integer subscriberId) {
        return ResponseEntity.ok(transactionService.getSuccessfulTransactionsBySubscriberId(subscriberId));
    }
    
    @PostMapping
    @PreAuthorize("hasRole('Subscriber')")
    public ResponseEntity<?> createTransaction(@Valid @RequestBody Transaction transaction) {
        try {
            Transaction savedTransaction = transactionService.createTransaction(transaction);
            return new ResponseEntity<>(savedTransaction, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log full error details
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    @PostMapping("/quick-recharge")
    public ResponseEntity<?> createTransactionForQuickRecharge(@Valid @RequestBody Transaction transaction) {
        try {
            Transaction savedTransaction = transactionService.createTransactionForQuickRecharge(transaction);
            return new ResponseEntity<>(savedTransaction, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log full error details
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    
    @PatchMapping("/{id}/status")
    public ResponseEntity<Transaction> updateTransactionStatus(
            @PathVariable Integer id, @RequestParam Transaction.TransactionStatus status) {
        try {
            return ResponseEntity.ok(transactionService.updateTransactionStatus(id, status));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
    
    @PostMapping("/{id}/process")
    public ResponseEntity<Transaction> processPayment(@PathVariable Integer id) {
        try {
            Transaction transaction = transactionService.getTransactionById(id);
            return ResponseEntity.ok(transactionService.processPayment(transaction));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}
