package com.demo.spring.dto;

import java.math.BigDecimal;
import java.util.List;

public class PlanUpdateDto {
    private String planName;
    private Integer categoryId;
    private BigDecimal price;
    private Integer validity;
    private Integer networkTypeId;
    private Boolean is5g;
    private Boolean hasOtt;
    private Integer redemptionTypeId;
    private String redemptionData;
    private String planStatus; // Will be converted to enum
    private BigDecimal discount;
    private String description;
    private Integer maxRedemptionLimit;
    private Float dataPerDay;
    private Integer sms;
    private Integer voice;
    
    // This will represent the OTT services and their durations
    private List<OttServiceDTO> ottServices;
    
    // Getters and setters
    
    // Inner class for OTT service data
    public static class OttServiceDTO {
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

    public List<OttServiceDTO> getOttServices() {
        return ottServices;
    }

    public void setOttServices(List<OttServiceDTO> ottServices) {
        this.ottServices = ottServices;
    }
    
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
}