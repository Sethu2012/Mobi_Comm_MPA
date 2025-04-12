package com.demo.spring.dto;

import lombok.Data;

@Data
public class RedemptionTypeDto {
    private Integer redemptionTypeId;
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
	private String redemptionType;
}