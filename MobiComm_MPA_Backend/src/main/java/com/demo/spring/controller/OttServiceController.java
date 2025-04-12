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
@RequestMapping("/api/ott-services")
public class OttServiceController {
    
    @Autowired
    private OttServiceService ottServiceService;
    
    // Get all OTT services
    @GetMapping
    public ResponseEntity<List<OttService>> getAllOttServices() {
        List<OttService> ottServices = ottServiceService.getAllOttServices();
        return new ResponseEntity<>(ottServices, HttpStatus.OK);
    }
    
    // Get OTT service by ID
    @GetMapping("/{id}")
    public ResponseEntity<OttService> getOttServiceById(@PathVariable("id") Integer ottServiceId) {
        Optional<OttService> ottServiceData = ottServiceService.getOttServiceById(ottServiceId);
        
        return ottServiceData
                .map(ottService -> new ResponseEntity<>(ottService, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // Create a new OTT service
    @PostMapping
    public ResponseEntity<OttService> createOttService(@RequestBody OttService ottService) {
        try {
            OttService createdOttService = ottServiceService.createOttService(ottService);
            return new ResponseEntity<>(createdOttService, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Update an OTT service
    @PutMapping("/{id}")
    public ResponseEntity<OttService> updateOttService(
            @PathVariable("id") Integer ottServiceId,
            @RequestBody OttService ottService) {
        try {
            OttService updatedOttService = ottServiceService.updateOttService(ottServiceId, ottService);
            return new ResponseEntity<>(updatedOttService, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Delete an OTT service
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteOttService(@PathVariable("id") Integer ottServiceId) {
        try {
            ottServiceService.deleteOttService(ottServiceId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
