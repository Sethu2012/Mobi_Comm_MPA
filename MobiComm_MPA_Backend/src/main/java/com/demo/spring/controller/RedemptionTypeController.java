package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.*;
import com.demo.spring.service.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;



@RestController
@RequestMapping("/api/redemption-types")
public class RedemptionTypeController {
    
    @Autowired
    private RedemptionTypeService redemptionTypeService;
    
    // Get all redemption types
    @GetMapping
    public ResponseEntity<List<RedemptionType>> getAllRedemptionTypes() {
        List<RedemptionType> redemptionTypes = redemptionTypeService.getAllRedemptionTypes();
        return new ResponseEntity<>(redemptionTypes, HttpStatus.OK);
    }
    
    // Get redemption type by ID
    @GetMapping("/{id}")
    public ResponseEntity<RedemptionType> getRedemptionTypeById(@PathVariable("id") Integer redemptionTypeId) {
        Optional<RedemptionType> redemptionTypeData = redemptionTypeService.getRedemptionTypeById(redemptionTypeId);
        
        return redemptionTypeData
                .map(redemptionType -> new ResponseEntity<>(redemptionType, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // Create a new redemption type
    @PostMapping
    public ResponseEntity<RedemptionType> createRedemptionType(@RequestBody RedemptionType redemptionType) {
        try {
            RedemptionType createdRedemptionType = redemptionTypeService.createRedemptionType(redemptionType);
            return new ResponseEntity<>(createdRedemptionType, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Update a redemption type
    @PutMapping("/{id}")
    public ResponseEntity<RedemptionType> updateRedemptionType(
            @PathVariable("id") Integer redemptionTypeId,
            @RequestBody RedemptionType redemptionType) {
        try {
            RedemptionType updatedRedemptionType = 
                    redemptionTypeService.updateRedemptionType(redemptionTypeId, redemptionType);
            return new ResponseEntity<>(updatedRedemptionType, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Delete a redemption type
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteRedemptionType(@PathVariable("id") Integer redemptionTypeId) {
        try {
            redemptionTypeService.deleteRedemptionType(redemptionTypeId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
