package com.demo.spring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Redemption_Types")
public class RedemptionType {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "redemption_type_id")
    private Integer redemptionTypeId;
    
    public Integer getRedemptionTypeId() {
		return redemptionTypeId;
	}

	public void setRedemptionTypeId(Integer redemptionTypeId) {
		this.redemptionTypeId = redemptionTypeId;
	}

	public RedemptionTypeEnum getRedemptionType() {
		return redemptionType;
	}

	public void setRedemptionType(RedemptionTypeEnum redemptionType) {
		this.redemptionType = redemptionType;
	}

	@Enumerated(EnumType.STRING)
    @Column(name = "redemption_type", nullable = false)
    private RedemptionTypeEnum redemptionType;
    
    public enum RedemptionTypeEnum {
        Weekend, Monthly
    }


}
