package com.demo.spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Plan_OTT_Services", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"plan_id", "ott_service_id"})
})
public class PlanOttService {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_ott_id")
    private Integer planOttId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id", nullable = false)
    @JsonBackReference
    private Plan plan;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ott_service_id", nullable = false)
    private OttService ottService;
    
    @Column(name = "duration")
    private Integer duration;

	public Integer getPlanOttId() {
		return planOttId;
	}

	public void setPlanOttId(Integer planOttId) {
		this.planOttId = planOttId;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public OttService getOttService() {
		return ottService;
	}

	public void setOttService(OttService ottService) {
		this.ottService = ottService;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}
}