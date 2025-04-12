package com.demo.spring.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
public class PlanDto {
    private Integer planId;
    private String planName;
    private Integer categoryId;
    private String categoryName;
    private BigDecimal price;
    private Integer validity;
    private Integer networkTypeId;
    private String networkType;
    // New fields for the added columns
    private Float dataPerDay;
    private Integer sms;
    private Integer voice;
    
    public Integer getPlanId() {
		return planId;
	}
	public void setPlanId(Integer planId) {
		this.planId = planId;
	}
	// ... existing code ...
	
	// New getters and setters for the added fields
	public Float getDataPerDay() {
		return dataPerDay;
	}
	public void setDataPerDay(Float dataPerDay) {
		this.dataPerDay = dataPerDay;
	}
	public Integer getSms() {
		return sms;
	}
	public void setSms(Integer sms) {
		this.sms = sms;
	}
	public Integer getVoice() {
		return voice;
	}
	public void setVoice(Integer voice) {
		this.voice = voice;
	}
	
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	// ... existing code ...
	
	private Boolean is5g;
    private Boolean hasOtt;
    public Integer getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public Integer getValidity() {
		return validity;
	}
	public void setValidity(Integer validity) {
		this.validity = validity;
	}
	public Integer getNetworkTypeId() {
		return networkTypeId;
	}
	public void setNetworkTypeId(Integer networkTypeId) {
		this.networkTypeId = networkTypeId;
	}
	public String getNetworkType() {
		return networkType;
	}
	public void setNetworkType(String networkType) {
		this.networkType = networkType;
	}
	public Boolean getIs5g() {
		return is5g;
	}
	public void setIs5g(Boolean is5g) {
		this.is5g = is5g;
	}
	public Boolean getHasOtt() {
		return hasOtt;
	}
	public void setHasOtt(Boolean hasOtt) {
		this.hasOtt = hasOtt;
	}
	public Integer getRedemptionTypeId() {
		return redemptionTypeId;
	}
	public void setRedemptionTypeId(Integer redemptionTypeId) {
		this.redemptionTypeId = redemptionTypeId;
	}
	public String getRedemptionType() {
		return redemptionType;
	}
	public void setRedemptionType(String redemptionType) {
		this.redemptionType = redemptionType;
	}
	public String getRedemptionData() {
		return redemptionData;
	}
	public void setRedemptionData(String redemptionData) {
		this.redemptionData = redemptionData;
	}
	public String getPlanStatus() {
		return planStatus;
	}
	public void setPlanStatus(String planStatus) {
		this.planStatus = planStatus;
	}
	public BigDecimal getDiscount() {
		return discount;
	}
	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getMaxRedemptionLimit() {
		return maxRedemptionLimit;
	}
	public void setMaxRedemptionLimit(Integer maxRedemptionLimit) {
		this.maxRedemptionLimit = maxRedemptionLimit;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public Set<PlanOttServiceDto> getOttServices() {
		return ottServices;
	}
	public void setOttServices(Set<PlanOttServiceDto> ottServices) {
		this.ottServices = ottServices;
	}

	private Integer redemptionTypeId;
    private String redemptionType;
    private String redemptionData;
    private String planStatus;
    private BigDecimal discount;
    private String description;
    private Integer maxRedemptionLimit;
    private LocalDateTime createdAt;
    private Set<PlanOttServiceDto> ottServices = new HashSet<>();
}