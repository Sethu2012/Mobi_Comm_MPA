package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.dto.CreatePlanRequest;
import com.demo.spring.dto.PlanUpdateDto;
import com.demo.spring.model.*;
import com.demo.spring.service.*;
import com.demo.spring.service.impl.PlanServiceImpl;

import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@EnableMethodSecurity
@RequestMapping("/api/plans")
public class PlanController {
    
    @Autowired
    private PlanService planService;
    
    @Autowired
    private PlanServiceImpl planServiceimp;
    
    
    // Get all plans
    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans() {
        List<Plan> plans = planService.getAllPlans();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Get a plan by ID
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('Admin', 'Subscriber')")
    public ResponseEntity<Plan> getPlanById(@PathVariable Integer id) {
        return ResponseEntity.ok(planServiceimp.getPlanById(id));
    }

    // Get a plan by ID
    @GetMapping("/quick-recharge/{id}")
    public ResponseEntity<Plan> getPlanForQuickRechargeById(@PathVariable Integer id) {
        return ResponseEntity.ok(planServiceimp.getPlanForQuickRechargeById(id));
    }

    
    // Get active plans
    @GetMapping("/active")
    public ResponseEntity<List<Plan>> getActivePlans() {
        List<Plan> activePlans = planService.getActivePlans();
        return new ResponseEntity<>(activePlans, HttpStatus.OK);
    }
    
    // Get plans by category
//    @GetMapping("/category/{categoryId}")
//    public ResponseEntity<List<Plan>> getPlansByCategory(@PathVariable("categoryId") Integer categoryId) {
//        List<Plan> plans = planServiceimp.getPlansByCategory(categoryId);
//        return new ResponseEntity<>(plans, HttpStatus.OK);
//    }
    
    // Get plans by network type
    @GetMapping("/network-type/{networkTypeId}")
    public ResponseEntity<List<Plan>> getPlansByNetworkType(@PathVariable("networkTypeId") Integer networkTypeId) {
        List<Plan> plans = planService.getPlansByNetworkType(networkTypeId);
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Get plans with OTT services
    @GetMapping("/with-ott")
    public ResponseEntity<List<Plan>> getPlansWithOtt() {
        List<Plan> plans = planService.getPlansWithOtt();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Get plans with 5G support
    @GetMapping("/with-5g")
    public ResponseEntity<List<Plan>> getPlansWithin5GNetwork() {
        List<Plan> plans = planService.getPlansWithin5GNetwork();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Get plans within a price range
    @GetMapping("/price-range")
    public ResponseEntity<List<Plan>> getPlansInPriceRange(
            @RequestParam("min") Double minPrice,
            @RequestParam("max") Double maxPrice) {
        List<Plan> plans = planService.getPlansInPriceRange(minPrice, maxPrice);
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Get plans with validity greater than specified days
    @GetMapping("/validity-greater-than/{days}")
    public ResponseEntity<List<Plan>> getPlansWithValidityGreaterThan(@PathVariable("days") Integer days) {
        List<Plan> plans = planService.getPlansWithValidityGreaterThan(days);
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
    
    // Create a new plan
    @PostMapping
    public ResponseEntity<Plan> createPlan(@Valid @RequestBody CreatePlanRequest request) {
        Plan createdPlan = planServiceimp.createPlan(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlan);
    }

    
    // Update a plan@PutMapping("/{planId}")
    @PutMapping("/{planId}")
    public ResponseEntity<Plan> updatePlan(@PathVariable Integer planId, 
                                          @Valid @RequestBody PlanUpdateDto updateDTO) {
        Plan updatedPlan = planServiceimp.updatePlan(planId, updateDTO);
        return ResponseEntity.ok(updatedPlan);
    }


    
    // Delete a plan
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlan(@PathVariable("id") Integer planId) {
        try {
            planService.deletePlan(planId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Activate a plan
    @PutMapping("/{id}/activate")
    public ResponseEntity<?> activatePlan(@PathVariable("id") Integer planId) {
        try {
            Plan activatedPlan = planService.activatePlan(planId);
            return new ResponseEntity<>(activatedPlan, HttpStatus.OK);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "An error occurred while activating the plan");
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Deactivate a plan
    @PutMapping("/{id}/deactivate")
    public ResponseEntity<?> deactivatePlan(@PathVariable("id") Integer planId) {
        try {
            Plan deactivatedPlan = planService.deactivatePlan(planId);
            return new ResponseEntity<>(deactivatedPlan, HttpStatus.OK);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "An error occurred while deactivating the plan");
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Add OTT service to a plan
    @PostMapping("/{planId}/ott-services/{ottServiceId}")
    public ResponseEntity<?> addOttServiceToPlan(
            @PathVariable("planId") Integer planId,
            @PathVariable("ottServiceId") Integer ottServiceId,
            @RequestParam(value = "duration", required = false) Integer duration) {
        try {
            PlanOttService association = planService.addOttServiceToPlan(planId, ottServiceId, duration);
            return new ResponseEntity<>(association, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "An error occurred while adding OTT service to plan");
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Remove OTT service from a plan
    @DeleteMapping("/{planId}/ott-services/{ottServiceId}")
    public ResponseEntity<HttpStatus> removeOttServiceFromPlan(
            @PathVariable("planId") Integer planId,
            @PathVariable("ottServiceId") Integer ottServiceId) {
        try {
            planService.removeOttServiceFromPlan(planId, ottServiceId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Get OTT services for a plan
    @GetMapping("/{planId}/ott-services")
    public ResponseEntity<List<OttService>> getOttServicesForPlan(@PathVariable("planId") Integer planId) {
        try {
            List<OttService> ottServices = planService.getOttServicesForPlan(planId);
            return new ResponseEntity<>(ottServices, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Plan>> getPlansByCategory(@PathVariable Integer categoryId) {
        return ResponseEntity.ok(planServiceimp.getPlansByCategory(categoryId));
    }

}