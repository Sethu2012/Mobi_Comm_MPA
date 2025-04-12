package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.*;
import com.demo.spring.service.*;

import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/api/plan-ott-services")
public class PlanOttServiceController {
    
    @Autowired
    private PlanOttServiceService planOttServiceService;
    
    // Get all plan-OTT service mappings
    @GetMapping
    public ResponseEntity<List<PlanOttService>> getAllPlanOttServices() {
        List<PlanOttService> planOttServices = planOttServiceService.getAllPlanOttServices();
        return new ResponseEntity<>(planOttServices, HttpStatus.OK);
    }
    
    // Get plan-OTT service mapping by ID
    @GetMapping("/{id}")
    public ResponseEntity<PlanOttService> getPlanOttServiceById(@PathVariable("id") Integer planOttId) {
        Optional<PlanOttService> planOttServiceData = planOttServiceService.getPlanOttServiceById(planOttId);
        
        return planOttServiceData
                .map(planOttService -> new ResponseEntity<>(planOttService, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // Get plan-OTT service mappings by plan ID
    @GetMapping("/plan/{planId}")
    public ResponseEntity<List<PlanOttService>> getPlanOttServicesByPlanId(@PathVariable("planId") Integer planId) {
        List<PlanOttService> planOttServices = planOttServiceService.getPlanOttServicesByPlanId(planId);
        return new ResponseEntity<>(planOttServices, HttpStatus.OK);
    }
    
    // Get plan-OTT service mappings by OTT service ID
    @GetMapping("/ott-service/{ottServiceId}")
    public ResponseEntity<List<PlanOttService>> getPlanOttServicesByOttServiceId(
            @PathVariable("ottServiceId") Integer ottServiceId) {
        List<PlanOttService> planOttServices = 
                planOttServiceService.getPlanOttServicesByOttServiceId(ottServiceId);
        return new ResponseEntity<>(planOttServices, HttpStatus.OK);
    }
    
    // Create a new plan-OTT service mapping
    @PostMapping
    public ResponseEntity<PlanOttService> createPlanOttService(@RequestBody PlanOttService planOttService) {
        try {
            PlanOttService createdPlanOttService = planOttServiceService.createPlanOttService(planOttService);
            return new ResponseEntity<>(createdPlanOttService, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Update a plan-OTT service mapping
    @PutMapping("/{id}")
    public ResponseEntity<PlanOttService> updatePlanOttService(
            @PathVariable("id") Integer planOttId,
            @RequestBody PlanOttService planOttService) {
        try {
            PlanOttService updatedPlanOttService = 
                    planOttServiceService.updatePlanOttService(planOttId, planOttService);
            return new ResponseEntity<>(updatedPlanOttService, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Delete a plan-OTT service mapping
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlanOttService(@PathVariable("id") Integer planOttId) {
        try {
            planOttServiceService.deletePlanOttService(planOttId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}