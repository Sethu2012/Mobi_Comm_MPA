package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.NetworkType;
import com.demo.spring.model.NetworkTypeEnum;

import java.util.Optional;

@Repository
public interface NetworkTypeRepository extends JpaRepository<NetworkType, Integer> {
    Optional<NetworkType> findByNetworkType(NetworkTypeEnum networkType);
}
