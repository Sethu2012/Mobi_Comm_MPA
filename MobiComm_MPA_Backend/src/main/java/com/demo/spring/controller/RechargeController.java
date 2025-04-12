package com.demo.spring.controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.Recharge;
import com.demo.spring.service.RechargeService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@EnableMethodSecurity
@RequestMapping("/api/recharges")
public class RechargeController {

    private final RechargeService rechargeService;

    @Autowired
    public RechargeController(RechargeService rechargeService) {
        this.rechargeService = rechargeService;
    }

    @GetMapping
    public ResponseEntity<List<Recharge>> getAllRecharges() {
        return ResponseEntity.ok(rechargeService.getAllRecharges());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recharge> getRechargeById(@PathVariable Integer id) {
        try {
            Recharge recharge = rechargeService.getRechargeById(id);
            return ResponseEntity.ok(recharge);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/subscriber/{subscriberId}")
    public ResponseEntity<List<Recharge>> getRechargesBySubscriber(@PathVariable Integer subscriberId) {
        return ResponseEntity.ok(rechargeService.getRechargesBySubscriber(subscriberId));
    }

    @GetMapping("/plan/{planId}")
    public ResponseEntity<List<Recharge>> getRechargesByPlan(@PathVariable Integer planId) {
        return ResponseEntity.ok(rechargeService.getRechargesByPlan(planId));
    }

    @GetMapping("/latest/subscriber/{subscriberId}")
    @PreAuthorize("hasAnyRole('Admin', 'Subscriber')")
    public ResponseEntity<List<Recharge>> getLatestRecharges(@PathVariable Integer subscriberId) {
        return ResponseEntity.ok(rechargeService.getLatestRechargesBySubscriberId(subscriberId));
    }

    @GetMapping("/date-range")
    public ResponseEntity<List<Recharge>> getRechargesByDateRange(
            @RequestParam LocalDateTime start,
            @RequestParam LocalDateTime end) {
        return ResponseEntity.ok(rechargeService.getRechargesByDateRange(start, end));
    }

    @PostMapping
    public ResponseEntity<Recharge> createRecharge(@RequestBody Recharge recharge) {
        try {
            Recharge savedRecharge = rechargeService.createRecharge(recharge);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedRecharge);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Or create a custom error response
        }
    }

    @PostMapping("/process")
    @PreAuthorize("hasRole('Subscriber')")
    public ResponseEntity<Recharge> processRecharge(
            @RequestParam Integer subscriberId,
            @RequestParam Integer planId,
            @RequestParam Integer transactionId) {
        try {
            Recharge processedRecharge = rechargeService.processRecharge(subscriberId, planId, transactionId);
            return ResponseEntity.status(HttpStatus.CREATED).body(processedRecharge);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Or create a custom error response
        }
    }
    
    @PostMapping("/process/quick-recharge")
    public ResponseEntity<Recharge> processRechargeForQuickRecharge(
    		@RequestParam Integer subscriberId,
    		@RequestParam Integer planId,
    		@RequestParam Integer transactionId) {
    	try {
    		Recharge processedRecharge = rechargeService.processRechargeForQuickRecharge(subscriberId, planId, transactionId);
    		return ResponseEntity.status(HttpStatus.CREATED).body(processedRecharge);
    	} catch (EntityNotFoundException e) {
    		return ResponseEntity.notFound().build();
    	} catch (IllegalArgumentException e) {
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Or create a custom error response
    	}
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecharge(@PathVariable Integer id) {
        try {
            rechargeService.getRechargeById(id); // Check if it exists first
            //Implement the deleteRecharge method in the RechargeService class
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
    
    
}
