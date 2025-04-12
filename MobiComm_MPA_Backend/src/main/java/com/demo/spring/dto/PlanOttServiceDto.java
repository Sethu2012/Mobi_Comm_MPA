package com.demo.spring.dto;

import lombok.Data;

@Data
public class PlanOttServiceDto {
    private Integer planOttId;
    private Integer planId;
    public Integer getPlanOttId() {
		return planOttId;
	}
	public void setPlanOttId(Integer planOttId) {
		this.planOttId = planOttId;
	}
	public Integer getPlanId() {
		return planId;
	}
	public void setPlanId(Integer planId) {
		this.planId = planId;
	}
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
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
	private Integer ottServiceId;
    private String ottName;
    private Integer duration;
}