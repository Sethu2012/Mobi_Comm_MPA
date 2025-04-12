package com.demo.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.dto.CreatePlanRequest;
import com.demo.spring.dto.PlanUpdateDto;
import com.demo.spring.dto.PlanUpdateDto.OttServiceDTO;
import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.*;
import com.demo.spring.repository.*;
import com.demo.spring.service.PlanService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PlanServiceImpl implements PlanService {
    
    @Autowired
    private PlanRepository planRepository;
    
    @Autowired
    private OttServiceRepository ottServiceRepository;
    
    @Autowired
    private PlanOttServiceRepository planOttServiceRepository;
    
    @Autowired
    private final PlanCategoryRepository planCategoryRepository;
    
    @Autowired
    private final NetworkTypeRepository networkTypeRepository;
    
    @Autowired
    private final RedemptionTypeRepository redemptionTypeRepository;


    @Autowired
    public PlanServiceImpl(PlanRepository planRepository,
                     PlanCategoryRepository planCategoryRepository,
                     NetworkTypeRepository networkTypeRepository,
                     RedemptionTypeRepository redemptionTypeRepository,
                     OttServiceRepository ottServiceRepository) {
        this.planRepository = planRepository;
        this.planCategoryRepository = planCategoryRepository;
        this.networkTypeRepository = networkTypeRepository;
        this.redemptionTypeRepository = redemptionTypeRepository;
        this.ottServiceRepository = ottServiceRepository;
    }

    
    @Override
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }
    
    @Override
    public Plan getPlanById(Integer id) {
        return planRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Plan not found with id: " + id));
    }
    @Override
    public Plan getPlanForQuickRechargeById(Integer id) {
    	return planRepository.findById(id)
    			.orElseThrow(() -> new ResourceNotFoundException("Plan not found with id: " + id));
    }
    @Override
    public List<Plan> getActivePlans() {
        return planRepository.findByPlanStatus(Plan.PlanStatus.ACTIVE);
    }
    
    @Override
    public List<Plan> getPlansByCategory(Integer categoryId) {
        PlanCategory category = planCategoryRepository.findById(categoryId)
            .orElseThrow(() -> new ResourceNotFoundException("Plan category not found with id: " + categoryId));
        return planRepository.findByCategory(category);
    }

    
    @Override
    public List<Plan> getPlansByNetworkType(Integer networkTypeId) {
        return planRepository.findByNetworkTypeNetworkTypeId(networkTypeId);
    }
    
    @Override
    public List<Plan> getPlansWithOtt() {
        return planRepository.findByHasOttTrue();
    }
    
    @Override
    public List<Plan> getPlansWithin5GNetwork() {
        return planRepository.findByIs5gTrue();
    }
    
    @Override
    public List<Plan> getPlansInPriceRange(Double minPrice, Double maxPrice) {
        BigDecimal min = BigDecimal.valueOf(minPrice);
        BigDecimal max = BigDecimal.valueOf(maxPrice);
        return planRepository.findByPriceBetween(min, max);
    }
    
    @Override
    public List<Plan> getPlansWithValidityGreaterThan(Integer days) {
        return planRepository.findByValidityGreaterThanEqual(days);
    }
    
    @Transactional
    public Plan createPlan(CreatePlanRequest request) {
        // Step 1: Get references to related entities
        PlanCategory category = planCategoryRepository.findById(request.getCategoryId())
            .orElseThrow(() -> new ResourceNotFoundException("Plan category not found with id: " + request.getCategoryId()));
        
        NetworkType networkType = networkTypeRepository.findById(request.getNetworkTypeId())
            .orElseThrow(() -> new ResourceNotFoundException("Network type not found with id: " + request.getNetworkTypeId()));
        
        RedemptionType redemptionType = null;
        if (request.getRedemptionTypeId() != null) {
            redemptionType = redemptionTypeRepository.findById(request.getRedemptionTypeId())
                .orElseThrow(() -> new ResourceNotFoundException("Redemption type not found with id: " + request.getRedemptionTypeId()));
        }

        // Step 2: Create and populate the Plan entity
        Plan plan = new Plan();
        plan.setPlanName(request.getPlanName());
        plan.setCategory(category);
        plan.setPrice(request.getPrice());
        plan.setValidity(request.getValidity());
        plan.setNetworkType(networkType);
        plan.setIs5g(request.getIs5g() != null ? request.getIs5g() : false);
        plan.setHasOtt(request.getHasOtt() != null ? request.getHasOtt() : false);
        plan.setRedemptionType(redemptionType);
        plan.setRedemptionData(request.getRedemptionData());
        plan.setPlanStatus(Plan.PlanStatus.valueOf(request.getPlanStatus()));
        plan.setDiscount(request.getDiscount());
        plan.setDescription(request.getDescription());
        plan.setMaxRedemptionLimit(request.getMaxRedemptionLimit());
        
        // Set the new fields
        plan.setDataPerDay(request.getDataPerDay());
        plan.setSms(request.getSms());
        plan.setVoice(request.getVoice());

        // Save the plan first
        Plan savedPlan = planRepository.save(plan);

        // Rest of the method remains unchanged
        if (request.getOttServices() != null && !request.getOttServices().isEmpty()) {
            Set<PlanOttService> planOttServices = new HashSet<>();

            for (CreatePlanRequest.PlanOttServiceRequest ottRequest : request.getOttServices()) {
                OttService ottService = ottServiceRepository.findById(ottRequest.getOttServiceId())
                    .orElseThrow(() -> new ResourceNotFoundException("OTT service not found with id: " + ottRequest.getOttServiceId()));

                PlanOttService planOttService = new PlanOttService();
                planOttService.setPlan(savedPlan);
                planOttService.setOttService(ottService);
                planOttService.setDuration(ottRequest.getDuration());

                planOttServices.add(planOttService);
            }

            // Save all PlanOttService records at once
            planOttServiceRepository.saveAll(planOttServices);

            // Set in Plan entity and update hasOtt flag
            savedPlan.setPlanOttServices(planOttServices);
            savedPlan.setHasOtt(true);

            return planRepository.save(savedPlan);
        }

        return savedPlan;
    }

    @Transactional
    public Plan updatePlan(Integer planId, PlanUpdateDto dto) {
        // Get existing plan
        Plan plan = planRepository.findById(planId)
            .orElseThrow();
        
        // Update simple fields
        updatePlanFields(plan, dto);
        
        // Handle OTT services
        updatePlanOttServices(plan, dto.getOttServices());
        
        // Save and return
        return planRepository.save(plan);
    }

    private void updatePlanFields(Plan plan, PlanUpdateDto dto) {
        // Update basic fields
        if (dto.getPlanName() != null) {
            plan.setPlanName(dto.getPlanName());
        }
        
        if (dto.getPrice() != null) {
            plan.setPrice(dto.getPrice());
        }
        
        if (dto.getValidity() != null) {
            plan.setValidity(dto.getValidity());
        }
        
        if (dto.getIs5g()!= null) {
            plan.setIs5g(dto.getIs5g());
        }
        
        if (dto.getHasOtt() != null) {
            plan.setHasOtt(dto.getHasOtt());
        }
        
        // Update new fields for data, SMS, and voice
        if (dto.getDataPerDay() != null) {
            plan.setDataPerDay(dto.getDataPerDay());
        }
        
        if (dto.getSms() != null) {
            plan.setSms(dto.getSms());
        }
        
        if (dto.getVoice() != null) {
            plan.setVoice(dto.getVoice());
        }
        
        if (dto.getRedemptionTypeId() != null) {
            plan.setRedemptionData(dto.getRedemptionData());
        }
        
        if (dto.getPlanStatus() != null) {
            plan.setPlanStatus(Plan.PlanStatus.valueOf(dto.getPlanStatus()));
        }
        
        if (dto.getDiscount() != null) {
            plan.setDiscount(dto.getDiscount());
        }
        
        if (dto.getDescription() != null) {
            plan.setDescription(dto.getDescription());
        }
        
        if (dto.getMaxRedemptionLimit() != null) {
            plan.setMaxRedemptionLimit(dto.getMaxRedemptionLimit());
        }
        
        // Update reference entities
        if (dto.getCategoryId() != null) {
            PlanCategory category = planCategoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + dto.getCategoryId()));
            plan.setCategory(category);
        }
        
        if (dto.getNetworkTypeId() != null) {
            NetworkType networkType = networkTypeRepository.findById(dto.getNetworkTypeId())
                .orElseThrow();
            plan.setNetworkType(networkType);
        }
        
        if (dto.getRedemptionTypeId() != null) {
            RedemptionType redemptionType = redemptionTypeRepository.findById(dto.getRedemptionTypeId())
                .orElseThrow();
            plan.setRedemptionType(redemptionType);
        }
    }
    
    private void updatePlanOttServices(Plan plan, List<OttServiceDTO> ottServiceDTOs) {
        if (ottServiceDTOs == null) {
            return; // No changes to OTT services
        }
        
        // Create a map of existing OTT services for easy lookup
        Map<Integer, PlanOttService> existingOttServices = plan.getPlanOttServices().stream()
            .collect(Collectors.toMap(
                pos -> pos.getOttService().getOttServiceId(), 
                pos -> pos
            ));
        
        // Create a set to track which services should remain
        Set<Integer> updatedOttServiceIds = new HashSet<>();
        
        // Process each OTT service in the DTO
        for (OttServiceDTO ottServiceDTO : ottServiceDTOs) {
            Integer ottServiceId = ottServiceDTO.getOttServiceId();
            updatedOttServiceIds.add(ottServiceId);
            
            // Check if this OTT service already exists
            if (existingOttServices.containsKey(ottServiceId)) {
                // Update existing association
                PlanOttService existingPlanOttService = existingOttServices.get(ottServiceId);
                existingPlanOttService.setDuration(ottServiceDTO.getDuration());
            } else {
                // Add new association
                OttService ottService = ottServiceRepository.findById(ottServiceId)
                    .orElseThrow(() -> new EntityNotFoundException("OTT Service not found with id: " + ottServiceId));
                
                PlanOttService newPlanOttService = new PlanOttService();
                newPlanOttService.setPlan(plan);
                newPlanOttService.setOttService(ottService);
                newPlanOttService.setDuration(ottServiceDTO.getDuration());
                
                plan.getPlanOttServices().add(newPlanOttService);
            }
        }
        
        // Remove OTT services that were not included in the update
        plan.getPlanOttServices().removeIf(planOttService -> 
            !updatedOttServiceIds.contains(planOttService.getOttService().getOttServiceId())
        );
    }

    
    @Transactional
    public void deletePlan(Integer id) {
        Plan plan = planRepository.findById(id)
                      .orElseThrow(() -> new EntityNotFoundException("Plan not found with ID: " + id));
        
        planRepository.delete(plan);
    }


    
    @Override
    @Transactional
    public Plan activatePlan(Integer planId) {
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found with id: " + planId));
        plan.setPlanStatus(Plan.PlanStatus.ACTIVE);
        return planRepository.save(plan);
    }
    
    @Override
    @Transactional
    public Plan deactivatePlan(Integer planId) {
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found with id: " + planId));
        plan.setPlanStatus(Plan.PlanStatus.INACTIVE);
        return planRepository.save(plan);
    }
    
    @Override
    @Transactional
    public PlanOttService addOttServiceToPlan(Integer planId, Integer ottServiceId, Integer duration) {
        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found with id: " + planId));
        
        OttService ottService = ottServiceRepository.findById(ottServiceId)
                .orElseThrow(() -> new RuntimeException("OTT Service not found with id: " + ottServiceId));
        
        // Check if association already exists
        Optional<PlanOttService> existingAssociation = planOttServiceRepository
                .findByPlanPlanIdAndOttServiceOttServiceId(planId, ottServiceId);
        
        if (existingAssociation.isPresent()) {
            PlanOttService association = existingAssociation.get();
            association.setDuration(duration);
            return planOttServiceRepository.save(association);
        }
        
        // Create new association
        PlanOttService planOttService = new PlanOttService();
        planOttService.setPlan(plan);
        planOttService.setOttService(ottService);
        planOttService.setDuration(duration);
        
        // Update the hasOtt flag on the plan
        if (!plan.getHasOtt()) {
            plan.setHasOtt(true);
            planRepository.save(plan);
        }
        
        return planOttServiceRepository.save(planOttService);
    }
    
    @Override
    @Transactional
    public void removeOttServiceFromPlan(Integer planId, Integer ottServiceId) {
        // Find the association
        PlanOttService association = planOttServiceRepository
                .findByPlanPlanIdAndOttServiceOttServiceId(planId, ottServiceId)
                .orElseThrow(() -> new RuntimeException(
                        "Association between plan and OTT service not found"));
        
        // Delete the association
        planOttServiceRepository.delete(association);
        
        // Check if there are any remaining OTT services for this plan
        List<PlanOttService> remainingAssociations = planOttServiceRepository.findByPlanPlanId(planId);
        
        // If no OTT services remain, update the hasOtt flag
        if (remainingAssociations.isEmpty()) {
            Plan plan = planRepository.findById(planId)
                    .orElseThrow(() -> new RuntimeException("Plan not found with id: " + planId));
            plan.setHasOtt(false);
            planRepository.save(plan);
        }
    }
    
    @Override
    public List<OttService> getOttServicesForPlan(Integer planId) {
        List<PlanOttService> associations = planOttServiceRepository.findByPlanPlanId(planId);
        return associations.stream()
                .map(PlanOttService::getOttService)
                .collect(Collectors.toList());
    }
    
    // Validation methods
    private void validatePlan(Plan plan) {
        if (plan.getPrice().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Price should be greater than zero");
        }
        
        if (plan.getValidity() < 1) {
            throw new IllegalArgumentException("Validity should be greater than or equal to one day");
        }
        
        if (Boolean.TRUE.equals(plan.getHasOtt())) {
            // Check if the plan has at least one OTT service associated
            // This check is only relevant for existing plans
            if (plan.getPlanId() != null) {
                List<PlanOttService> ottAssociations = planOttServiceRepository.findByPlanPlanId(plan.getPlanId());
                if (ottAssociations.isEmpty()) {
                    throw new IllegalArgumentException("Plans with hasOtt=TRUE must have at least one OTT service associated");
                }
            }
        }
    }
    
    public List<Plan> getPlansByMaxAmount(BigDecimal maxAmount) {
        return planRepository.findByPriceLessThanEqual(maxAmount);
    }
    
    public List<Plan> searchPlansByName(String name) {
        return planRepository.findByPlanNameContainingIgnoreCase(name);
    }
    
    public Plan getPlanById(Long planId) {
        return planRepository.findByIdWithOttServices(planId)
            .orElseThrow(() -> new ResourceNotFoundException("Plan not found with id: " + planId));
    }



	
}