package com.demo.spring.service;

import java.util.List;
import java.util.Optional;

import com.demo.spring.model.*;

public interface PlanService {
    List<Plan> getAllPlans();
    Plan getPlanById(Integer planId);
    List<Plan> getActivePlans();
    List<Plan> getPlansByCategory(Integer categoryId);
    List<Plan> getPlansByNetworkType(Integer networkTypeId);
    List<Plan> getPlansWithOtt();
    List<Plan> getPlansWithin5GNetwork();
    List<Plan> getPlansInPriceRange(Double minPrice, Double maxPrice);
    List<Plan> getPlansWithValidityGreaterThan(Integer days);
 
    void deletePlan(Integer planId);
    Plan activatePlan(Integer planId);
    Plan deactivatePlan(Integer planId);
    PlanOttService addOttServiceToPlan(Integer planId, Integer ottServiceId, Integer duration);
    void removeOttServiceFromPlan(Integer planId, Integer ottServiceId);
    List<OttService> getOttServicesForPlan(Integer planId);
	Plan getPlanForQuickRechargeById(Integer id);
}
