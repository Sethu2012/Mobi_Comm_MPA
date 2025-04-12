package com.demo.spring.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.demo.spring.model.PaymentMethod;
import com.demo.spring.repository.PaymentMethodRepository;
import com.demo.spring.service.PaymentMethodService;

import java.util.List;

@RestController
@EnableMethodSecurity
@RequestMapping("/api/payment-methods")
@RequiredArgsConstructor
public class PaymentMethodController {
    
    private final PaymentMethodService paymentMethodService;
    
    @Autowired
    public PaymentMethodController(PaymentMethodService paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    
    @GetMapping
    public ResponseEntity<List<PaymentMethod>> getAllPaymentMethods() {
        return ResponseEntity.ok(paymentMethodService.getAllPaymentMethods());
    }
    
    @GetMapping("/quick-recharge")
    public ResponseEntity<List<PaymentMethod>> getAllPaymentMethodsForQuickRecharge() {
        return ResponseEntity.ok(paymentMethodService.getAllPaymentMethodsForQuickRecharge());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PaymentMethod> getPaymentMethodById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(paymentMethodService.getPaymentMethodById(id));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
    
    @GetMapping("/type/{type}")
    public ResponseEntity<PaymentMethod> getPaymentMethodByType(
            @PathVariable PaymentMethod.PaymentMethodType type) {
        try {
            return ResponseEntity.ok(paymentMethodService.getPaymentMethodByType(type));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
    
    @PostMapping
    public ResponseEntity<PaymentMethod> createPaymentMethod(@Valid @RequestBody PaymentMethod paymentMethod) {
        try {
            return new ResponseEntity<>(paymentMethodService.createPaymentMethod(paymentMethod), 
                    HttpStatus.CREATED);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<PaymentMethod> updatePaymentMethod(
            @PathVariable Integer id, @Valid @RequestBody PaymentMethod paymentMethod) {
        try {
            return ResponseEntity.ok(paymentMethodService.updatePaymentMethod(id, paymentMethod));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaymentMethod(@PathVariable Integer id) {
        try {
            paymentMethodService.deletePaymentMethod(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}