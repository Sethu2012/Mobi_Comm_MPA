package com.demo.spring.dto;

import java.math.BigDecimal;

public class SubscriberInfoDTO {
    private Long subscriberInfoId;
    private Long subscriberId;
    private Long currentPlanId;
    private BigDecimal dataBalance;
    private Integer voiceBalance;
    private Integer smsBalance;
    // Other necessary fields...
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

    // Getters and setters...
}