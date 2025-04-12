package com.demo.spring.dto;

import lombok.Data;

@Data
public class OttServiceDto {
    private Integer ottServiceId;
    private String ottName;
    private String ottDescription;
	public Integer getOttServiceId() {
		return ottServiceId;
	}
	public void setOttServiceId(Integer ottServiceId) {
		this.ottServiceId = ottServiceId;
	}
	public String getOttName() {
		return ottName;
	}
	public void setOttName(String ottName) {
		this.ottName = ottName;
	}
	public String getOttDescription() {
		return ottDescription;
	}
	public void setOttDescription(String ottDescription) {
		this.ottDescription = ottDescription;
	}
}
