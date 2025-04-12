package com.demo.spring.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.Plan;
import com.demo.spring.model.PlanCategory;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {
    // Find plans by status
    List<Plan> findByPlanStatus(Plan.PlanStatus planStatus);
    
    // Find plans by status with pagination
    Page<Plan> findByPlanStatus(Plan.PlanStatus planStatus, Pageable pageable);
    
    // Find plans by category
    List<Plan> findByCategory(PlanCategory category);
    
    // Find plans by category ID
    List<Plan> findByCategoryCategoryId(Integer categoryId);
    
    // Find plans by network type ID
    List<Plan> findByNetworkTypeNetworkTypeId(Integer networkTypeId);
    
    // Find plans within a price range
    List<Plan> findByPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);
    
    // Find plans with validity greater than or equal to specified days
    List<Plan> findByValidityGreaterThanEqual(Integer days);
    
    // Find plans that have OTT services
    List<Plan> findByHasOttTrue();
    
    // Find plans that support 5G
    List<Plan> findByIs5gTrue();
    
    // Find plans that support 5G with a specific status
    List<Plan> findByIs5gAndPlanStatus(Boolean is5g, Plan.PlanStatus planStatus);
    
    // Custom query to find active plans within a price range
    @Query("SELECT p FROM Plan p WHERE p.planStatus = com.demo.spring.model.Plan$PlanStatus.ACTIVE AND p.price BETWEEN :minPrice AND :maxPrice")
    List<Plan> findActivePlansInPriceRange(@Param("minPrice") BigDecimal minPrice, @Param("maxPrice") BigDecimal maxPrice);
    
    // Custom query to find active plans with OTT services
    @Query("SELECT p FROM Plan p WHERE p.hasOtt = true AND p.planStatus = com.demo.spring.model.Plan$PlanStatus.ACTIVE")
    List<Plan> findActivePlansWithOtt();
    
    // Custom query to find active plans by OTT service ID
    @Query("SELECT p FROM Plan p JOIN p.planOttServices pos WHERE pos.ottService.ottServiceId = :ottServiceId AND p.planStatus = com.demo.spring.model.Plan$PlanStatus.ACTIVE")
    List<Plan> findActivePlansByOttServiceId(@Param("ottServiceId") Integer ottServiceId);
    
    // Custom query to search plans by keyword in name or description
    @Query("SELECT p FROM Plan p WHERE p.planName LIKE %:keyword% OR p.description LIKE %:keyword%")
    List<Plan> searchByKeyword(@Param("keyword") String keyword);
    
    List<Plan> findByPriceLessThanEqual(BigDecimal maxAmount);
    List<Plan> findByPlanNameContainingIgnoreCase(String name);
    
    @Query("SELECT p FROM Plan p LEFT JOIN FETCH p.planOttServices WHERE p.planId = :planId")
    Optional<Plan> findByIdWithOttServices(@Param("planId") Long planId);
    
    
}