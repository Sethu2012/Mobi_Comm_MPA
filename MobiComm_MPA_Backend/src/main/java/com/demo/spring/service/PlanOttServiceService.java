package com.demo.spring.service;

import java.util.List;
import java.util.Optional;

import com.demo.spring.model.*;


public interface PlanOttServiceService {
    List<PlanOttService> getAllPlanOttServices();
    Optional<PlanOttService> getPlanOttServiceById(Integer planOttId);
    List<PlanOttService> getPlanOttServicesByPlanId(Integer planId);
    List<PlanOttService> getPlanOttServicesByOttServiceId(Integer ottServiceId);
    PlanOttService createPlanOttService(PlanOttService planOttService);
    PlanOttService updatePlanOttService(Integer planOttId, PlanOttService planOttServiceDetails);
    void deletePlanOttService(Integer planOttId);
}