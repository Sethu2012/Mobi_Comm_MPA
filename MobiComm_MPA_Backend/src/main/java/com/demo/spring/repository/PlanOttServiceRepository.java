package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.PlanOttService;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanOttServiceRepository extends JpaRepository<PlanOttService, Integer> {
    
    /**
     * Find all OTT service associations for a specific plan
     * 
     * @param planId The ID of the plan
     * @return List of PlanOttService associations
     */
    List<PlanOttService> findByPlanPlanId(Integer planId);
    
    /**
     * Find a specific association between a plan and an OTT service
     * 
     * @param planId The ID of the plan
     * @param ottServiceId The ID of the OTT service
     * @return Optional containing the association if found
     */
    Optional<PlanOttService> findByPlanPlanIdAndOttServiceOttServiceId(Integer planId, Integer ottServiceId);
    
    /**
     * Find all plan associations for a specific OTT service
     * 
     * @param ottServiceId The ID of the OTT service
     * @return List of PlanOttService associations
     */
    List<PlanOttService> findByOttServiceOttServiceId(Integer ottServiceId);
    
    /**
     * Delete all associations for a specific plan
     * 
     * @param planId The ID of the plan
     */
    void deleteByPlanPlanId(Integer planId);
    
    /**
     * Delete all associations for a specific OTT service
     * 
     * @param ottServiceId The ID of the OTT service
     */
    void deleteByOttServiceOttServiceId(Integer ottServiceId);
    
    /**
     * Delete a specific association between a plan and an OTT service
     * 
     * @param planId The ID of the plan
     * @param ottServiceId The ID of the OTT service
     */
    void deleteByPlanPlanIdAndOttServiceOttServiceId(Integer planId, Integer ottServiceId);
}