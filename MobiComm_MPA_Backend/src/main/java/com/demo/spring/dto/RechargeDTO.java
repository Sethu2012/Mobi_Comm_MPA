package com.demo.spring.dto;

import java.time.LocalDateTime;

public class RechargeDTO {
    private Integer rechargeId;
    private Integer subscriberId; // Reference to User
    private Integer planId; // Reference to Plan
    public Integer getRechargeId() {
		return rechargeId;
	}
	public void setRechargeId(Integer rechargeId) {
		this.rechargeId = rechargeId;
	}
	public Integer getSubscriberId() {
		return subscriberId;
	}
	public void setSubscriberId(Integer subscriberId) {
		this.subscriberId = subscriberId;
	}
	public Integer getPlanId() {
		return planId;
	}
	public void setPlanId(Integer planId) {
		this.planId = planId;
	}
	public LocalDateTime getRechargeDate() {
		return rechargeDate;
	}
	public void setRechargeDate(LocalDateTime rechargeDate) {
		this.rechargeDate = rechargeDate;
	}
	public Integer getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(Integer transactionId) {
		this.transactionId = transactionId;
	}
	private LocalDateTime rechargeDate;
    private Integer transactionId; // Reference to Transaction
    // Other necessary fields...

    // Getters and setters...
}
