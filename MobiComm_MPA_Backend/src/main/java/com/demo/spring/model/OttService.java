package com.demo.spring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "OTT_Services")
public class OttService {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ott_service_id")
    private Integer ottServiceId;
    
    public Integer getOttServiceId() {
		return ottServiceId;
	}

	public void setOttServiceId(Integer ottServiceId) {
		this.ottServiceId = ottServiceId;
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

	@Column(name = "ott_name", nullable = false, length = 50)
    private String ottName;
    
    @Column(name = "ott_description")
    private String ottDescription;

	public String getOttName() {
		// TODO Auto-generated method stub
		return ottName;
	}
}
