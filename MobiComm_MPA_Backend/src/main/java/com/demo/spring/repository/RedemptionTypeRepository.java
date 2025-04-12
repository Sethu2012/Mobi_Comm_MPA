package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.RedemptionType;

import java.util.Optional;

@Repository
public interface RedemptionTypeRepository extends JpaRepository<RedemptionType, Integer> {
    Optional<RedemptionType> findByRedemptionType(RedemptionType.RedemptionTypeEnum redemptionType);
    
}
