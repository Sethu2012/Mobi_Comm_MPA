package com.demo.spring.model;

import com.demo.spring.converter.NetworkTypeConverter;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Network_Types")
public class NetworkType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "network_type_id")
    private Integer networkTypeId;
    
    public Integer getNetworkTypeId() {
		return networkTypeId;
	}

	public void setNetworkTypeId(Integer networkTypeId) {
		this.networkTypeId = networkTypeId;
	}

	public NetworkTypeEnum getNetworkType() {
		return networkType;
	}

	public void setNetworkType(NetworkTypeEnum networkType) {
		this.networkType = networkType;
	}

	@Convert(converter = NetworkTypeConverter.class)
    @Column(name = "network_type", nullable = false)
    private NetworkTypeEnum networkType;
}