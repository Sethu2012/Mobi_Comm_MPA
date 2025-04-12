package com.demo.spring.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.model.PlanOttService;
import com.demo.spring.repository.PlanOttServiceRepository;
import com.demo.spring.service.PlanOttServiceService;

@Service
public class PlanOttServiceServiceImpl implements PlanOttServiceService {
    
    @Autowired
    private PlanOttServiceRepository planOttServiceRepository;
    
    @Override
    public List<PlanOttService> getAllPlanOttServices() {
        return planOttServiceRepository.findAll();
    }
    
    @Override
    public Optional<PlanOttService> getPlanOttServiceById(Integer planOttId) {
        return planOttServiceRepository.findById(planOttId);
    }
    
    @Override
    public List<PlanOttService> getPlanOttServicesByPlanId(Integer planId) {
        return planOttServiceRepository.findByPlanPlanId(planId);
    }
    
    @Override
    public List<PlanOttService> getPlanOttServicesByOttServiceId(Integer ottServiceId) {
        return planOttServiceRepository.findByOttServiceOttServiceId(ottServiceId);
    }
    
    @Override
    @Transactional
    public PlanOttService createPlanOttService(PlanOttService planOttService) {
        return planOttServiceRepository.save(planOttService);
    }
    
    @Override
    @Transactional
    public PlanOttService updatePlanOttService(Integer planOttId, PlanOttService planOttServiceDetails) {
        PlanOttService existingPlanOttService = planOttServiceRepository.findById(planOttId)
                .orElseThrow(() -> new RuntimeException("Plan OTT Service mapping not found with id: " + planOttId));
        
        existingPlanOttService.setPlan(planOttServiceDetails.getPlan());
        existingPlanOttService.setOttService(planOttServiceDetails.getOttService());
        existingPlanOttService.setDuration(planOttServiceDetails.getDuration());
        
        return planOttServiceRepository.save(existingPlanOttService);
    }
    
    @Override
    @Transactional
    public void deletePlanOttService(Integer planOttId) {
        planOttServiceRepository.deleteById(planOttId);
    }
}
