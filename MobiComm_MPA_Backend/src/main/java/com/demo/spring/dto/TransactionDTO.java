package com.demo.spring.dto;
import java.time.LocalDateTime;
import java.math.BigDecimal;

public class TransactionDTO {
    private Integer transactionId;
    private Long subscriberId; // Reference to User
    private Integer paymentMethodId; // Reference to PaymentMethod
    private BigDecimal amount;
    private String transactionStatus;
    private String transactionRef;
    private LocalDateTime transactionDate;
    // Other necessary fields...

    // Getters and setters...
}
