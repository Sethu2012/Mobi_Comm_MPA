package com.demo.spring.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;
import java.util.Set;

@Data
public class CreatePlanRequest {
    @NotBlank(message = "Plan name is required")
    @Size(max = 100, message = "Plan name can't exceed 100 characters")
    private String planName;
    
    @NotNull(message = "Category ID is required")
    private Integer categoryId;
    
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.01", message = "Price must be greater than zero")
    @Digits(integer = 8, fraction = 2, message = "Price must have at most 8 integer digits and 2 fraction digits")
    private BigDecimal price;
    
    @NotNull(message = "Validity is required")
    @Min(value = 1, message = "Validity must be at least 1 day")
    private Integer validity;
    
    @NotNull(message = "Network type ID is required")
    private Integer networkTypeId;
    
    private Boolean is5g = false;
    
    private Boolean hasOtt = false;
    
    private Integer redemptionTypeId;
    
    // New fields for the added columns
    @DecimalMin(value = "0", message = "Data per day can't be negative")
    private Float dataPerDay;
    
    @Min(value = 0, message = "SMS count can't be negative")
    private Integer sms;
    
    @Min(value = 0, message = "Voice minutes can't be negative")
    private Integer voice;
    
    private String redemptionData;
    
    @NotNull(message = "Plan status is required")
    private String planStatus;
    
    @DecimalMin(value = "0", message = "Discount can't be negative")
    @DecimalMax(value = "100", message = "Discount can't exceed 100%")
    private BigDecimal discount;
    
    private String description;
    
    private Integer maxRedemptionLimit;
    
    private Set<PlanOttServiceRequest> ottServices;
    
    // Existing getters and setters
    public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
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

	public Set<PlanOttServiceRequest> getOttServices() {
		return ottServices;
	}

	public void setOttServices(Set<PlanOttServiceRequest> ottServices) {
		this.ottServices = ottServices;
	}
	
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
    
    @Data
    public static class PlanOttServiceRequest {
        @NotNull(message = "OTT service ID is required")
        private Integer ottServiceId;
        
        private Integer duration;

		public Integer getOttServiceId() {
			return ottServiceId;
		}

		public void setOttServiceId(Integer ottServiceId) {
			this.ottServiceId = ottServiceId;
		}

		public Integer getDuration() {
			return duration;
		}

		public void setDuration(Integer duration) {
			this.duration = duration;
		}
    }
}