package com.demo.spring.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;
import java.util.Set;

@Data
public class UpdatePlanRequest {
    @Size(max = 100, message = "Plan name can't exceed 100 characters")
    private String planName;
    
    private Integer categoryId;
    
    @DecimalMin(value = "0.01", message = "Price must be greater than zero")
    @Digits(integer = 8, fraction = 2, message = "Price must have at most 8 integer digits and 2 fraction digits")
    private BigDecimal price;
    
    @Min(value = 1, message = "Validity must be at least 1 day")
    private Integer validity;
    
    private Integer networkTypeId;
    
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

	public Set<CreatePlanRequest.PlanOttServiceRequest> getOttServices() {
		return ottServices;
	}

	public void setOttServices(Set<CreatePlanRequest.PlanOttServiceRequest> ottServices) {
		this.ottServices = ottServices;
	}

	private Boolean is5g;
    
    private Boolean hasOtt;
    
    private Integer redemptionTypeId;
    
    private String redemptionData;
    
    private String planStatus;
    
    @DecimalMin(value = "0", message = "Discount can't be negative")
    @DecimalMax(value = "100", message = "Discount can't exceed 100%")
    private BigDecimal discount;
    
    private String description;
    
    private Integer maxRedemptionLimit;
    
    private Set<CreatePlanRequest.PlanOttServiceRequest> ottServices;
}