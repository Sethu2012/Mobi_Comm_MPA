package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.model.PaymentMethod;
import com.demo.spring.repository.PaymentMethodRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentMethodService {
    
    private final PaymentMethodRepository paymentMethodRepository ;
    @Autowired
    public PaymentMethodService(PaymentMethodRepository paymentMethodRepository) {
        this.paymentMethodRepository = paymentMethodRepository;
    }
    
    public List<PaymentMethod> getAllPaymentMethods() {
        return paymentMethodRepository.findAll();
    }
    
    public PaymentMethod getPaymentMethodById(Integer id) {
        return paymentMethodRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Payment method not found with id: " + id));
    }
    
    public PaymentMethod getPaymentMethodByType(PaymentMethod.PaymentMethodType type) {
        return paymentMethodRepository.findByPaymentMethod(type)
                .orElseThrow(() -> new EntityNotFoundException("Payment method not found with type: " + type));
    }
    
    @Transactional
    public PaymentMethod createPaymentMethod(PaymentMethod paymentMethod) {
        // Check if payment method already exists
        if (paymentMethodRepository.findByPaymentMethod(paymentMethod.getPaymentMethod()).isPresent()) {
            throw new IllegalArgumentException("Payment method already exists: " + paymentMethod.getPaymentMethod());
        }
        return paymentMethodRepository.save(paymentMethod);
    }
    
    @Transactional
    public PaymentMethod updatePaymentMethod(Integer id, PaymentMethod paymentMethodDetails) {
        PaymentMethod paymentMethod = getPaymentMethodById(id);
        
        if (paymentMethodDetails.getPaymentMethod() != null) {
            paymentMethod.setPaymentMethod(paymentMethodDetails.getPaymentMethod());
        }
        
        return paymentMethodRepository.save(paymentMethod);
    }
    
    @Transactional
    public void deletePaymentMethod(Integer id) {
        if (!paymentMethodRepository.existsById(id)) {
            throw new EntityNotFoundException("Payment method not found with id: " + id);
        }
        paymentMethodRepository.deleteById(id);
    }

	public List<PaymentMethod> getAllPaymentMethodsForQuickRecharge() {
		return paymentMethodRepository.findAll();
	}
}
