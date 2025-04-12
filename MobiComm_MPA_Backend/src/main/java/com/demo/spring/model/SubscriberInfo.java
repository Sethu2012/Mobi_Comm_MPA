package com.demo.spring.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "subscriber_info")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SubscriberInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subscriberInfoId;

    @Column(name = "subscriber_id", nullable = false)
    private Long subscriberId;

    @Column(name = "current_plan_id")
    private Long currentPlanId;

    @Column(name = "data_balance", precision = 10, scale = 2)
    private BigDecimal dataBalance;

    @Column(name = "voice_balance")
    private Integer voiceBalance;

    @Column(name = "sms_balance")
    private Integer smsBalance;

    @Column(name = "plan_activation_date")
    private LocalDateTime planActivationDate;

    @Column(name = "plan_expiry_date")
    private LocalDateTime planExpiryDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "subscriber_status", nullable = false)
    private SubscriberStatus subscriberStatus;

    @Column(name = "is_autopay_enabled", nullable = false)
    private Boolean isAutopayEnabled = false;

    @Column(name = "preferred_payment_method_id")
    private Long preferredPaymentMethodId;

    @Column(name = "autopay_reminder_days")
    private Integer autopayReminderDays = 1;

    @Column(name = "last_updated", nullable = false)
    private LocalDateTime lastUpdated = LocalDateTime.now();

    // Enum for subscriber status
    public enum SubscriberStatus {
        Active, Inactive, Blocked
    }

    // Lifecycle method to update lastUpdated timestamp
    @PreUpdate
    @PrePersist
    public void updateLastUpdated() {
        this.lastUpdated = LocalDateTime.now();
    }

	public Long getSubscriberInfoId() {
		return subscriberInfoId;
	}

	public void setSubscriberInfoId(Long subscriberInfoId) {
		this.subscriberInfoId = subscriberInfoId;
	}

	public Long getSubscriberId() {
		return subscriberId;
	}

	public void setSubscriberId(Long subscriberId) {
		this.subscriberId = subscriberId;
	}

	public Long getCurrentPlanId() {
		return currentPlanId;
	}

	public void setCurrentPlanId(Long currentPlanId) {
		this.currentPlanId = currentPlanId;
	}

	public BigDecimal getDataBalance() {
		return dataBalance;
	}

	public void setDataBalance(BigDecimal dataBalance) {
		this.dataBalance = dataBalance;
	}

	public Integer getVoiceBalance() {
		return voiceBalance;
	}

	public void setVoiceBalance(Integer voiceBalance) {
		this.voiceBalance = voiceBalance;
	}

	public Integer getSmsBalance() {
		return smsBalance;
	}

	public void setSmsBalance(Integer smsBalance) {
		this.smsBalance = smsBalance;
	}

	public LocalDateTime getPlanActivationDate() {
		return planActivationDate;
	}

	public void setPlanActivationDate(LocalDateTime planActivationDate) {
		this.planActivationDate = planActivationDate;
	}

	public LocalDateTime getPlanExpiryDate() {
		return planExpiryDate;
	}

	public void setPlanExpiryDate(LocalDateTime planExpiryDate) {
		this.planExpiryDate = planExpiryDate;
	}

	public SubscriberStatus getSubscriberStatus() {
		return subscriberStatus;
	}

	public void setSubscriberStatus(SubscriberStatus subscriberStatus) {
		this.subscriberStatus = subscriberStatus;
	}

	public Boolean getIsAutopayEnabled() {
		return isAutopayEnabled;
	}

	public void setIsAutopayEnabled(Boolean isAutopayEnabled) {
		this.isAutopayEnabled = isAutopayEnabled;
	}

	public Long getPreferredPaymentMethodId() {
		return preferredPaymentMethodId;
	}

	public void setPreferredPaymentMethodId(Long preferredPaymentMethodId) {
		this.preferredPaymentMethodId = preferredPaymentMethodId;
	}

	public Integer getAutopayReminderDays() {
		return autopayReminderDays;
	}

	public void setAutopayReminderDays(Integer autopayReminderDays) {
		this.autopayReminderDays = autopayReminderDays;
	}

	public LocalDateTime getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(LocalDateTime lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
}