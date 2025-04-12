package com.demo.spring.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payment_methods")  // ✅ Follows database naming convention
public class PaymentMethod {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_method_id")
    private Integer paymentMethodId;
    
    @NotNull(message = "Payment method is required")
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false)
    private PaymentMethodType paymentMethod;

    public Integer getPaymentMethodId() {
        return paymentMethodId;
    }

    public void setPaymentMethodId(Integer paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
    }

    public PaymentMethodType getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethodType paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public enum PaymentMethodType {
        CREDIT_CARD,
        DEBIT_CARD,
        UPI,
        NETBANKING,
        WALLET;

        @JsonValue  // ✅ Ensures JSON returns only the string value
        public String getValue() {
            return name();
        }

        @JsonCreator  // ✅ Allows JSON input like { "payment_method": "UPI" }
        public static PaymentMethodType fromValue(String value) {
            return PaymentMethodType.valueOf(value.toUpperCase());
        }
    }
}
