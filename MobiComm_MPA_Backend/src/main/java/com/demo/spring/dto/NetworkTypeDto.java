package com.demo.spring.dto;

import lombok.Data;

@Data
public class NetworkTypeDto {
    private Integer networkTypeId;
    private String networkType;
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
}