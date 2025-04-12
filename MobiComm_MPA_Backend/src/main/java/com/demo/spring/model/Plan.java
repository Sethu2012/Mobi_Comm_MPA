package com.demo.spring.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
@Table(name = "Plans")
public class Plan {
	
	
	
	
    @Column(name = "data_per_day")
    private Float dataPerDay;
    
    @Column(name = "sms")
    private Integer sms;
    
    @Column(name = "voice")
    private Integer voice;
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

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_id")
    private Integer planId;

    @Column(name = "plan_name", nullable = false, length = 100)
    private String planName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private PlanCategory category;

    public Integer getPlanId() {
		return planId;
	}

	public void setPlanId(Integer planId) {
		this.planId = planId;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public PlanCategory getCategory() {
		return category;
	}

	public void setCategory(PlanCategory category) {
		this.category = category;
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

	public NetworkType getNetworkType() {
		return networkType;
	}

	public void setNetworkType(NetworkType networkType) {
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

	public RedemptionType getRedemptionType() {
		return redemptionType;
	}

	public void setRedemptionType(RedemptionType redemptionType) {
		this.redemptionType = redemptionType;
	}

	public String getRedemptionData() {
		return redemptionData;
	}

	public void setRedemptionData(String redemptionData) {
		this.redemptionData = redemptionData;
	}

	public PlanStatus getPlanStatus() {
		return planStatus;
	}

	public void setPlanStatus(PlanStatus planStatus) {
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

	public Set<PlanOttService> getPlanOttServices() {
		return planOttServices;
	}

	public void setPlanOttServices(Set<PlanOttService> planOttServices) {
		this.planOttServices = planOttServices;
	}

	@DecimalMin(value = "0.01", message = "Price must be greater than zero")
    @Column(name = "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Min(value = 1, message = "Validity must be at least 1 day")
    @Column(name = "validity", nullable = false)
    private Integer validity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "network_type_id", nullable = false)
    private NetworkType networkType;

    @Column(name = "is5g")
    private Boolean is5g = Boolean.FALSE;

    @Column(name = "hasOtt")
    private Boolean hasOtt = Boolean.FALSE;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "redemption_type_id")
    private RedemptionType redemptionType;

    @Column(name = "redemption_data")
    private String redemptionData;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan_status", nullable = false)
    private PlanStatus planStatus;

    @Column(name = "discount", precision = 5, scale = 2)
    private BigDecimal discount;

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "max_redemption_limit")
    private Integer maxRedemptionLimit;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "plan", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<PlanOttService> planOttServices = new HashSet<>();




    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public enum PlanStatus {
        ACTIVE("Active"),
        INACTIVE("Inactive");
        private final String value;

        PlanStatus(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }

    // Helper method for safely adding OTT service
    public void addOttService(OttService ottService, Integer duration) {
        if (ottService == null || duration == null) {
            throw new IllegalArgumentException("OTT Service and duration must not be null.");
        }

        PlanOttService planOttService = new PlanOttService();
        planOttService.setOttService(ottService);
        planOttService.setPlan(this);
        planOttService.setDuration(duration);

        planOttServices.add(planOttService);
    }

    // Helper method for safely removing OTT service
    public void removeOttService(OttService ottService) {
        if (ottService == null) return;

        planOttServices.removeIf(
                planOttService -> ottService.equals(planOttService.getOttService())
        );
    }
}