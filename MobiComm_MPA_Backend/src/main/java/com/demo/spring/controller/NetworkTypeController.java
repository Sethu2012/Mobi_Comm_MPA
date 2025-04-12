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
@RequestMapping("/api/network-types")
public class NetworkTypeController {
    
    @Autowired
    private NetworkTypeService networkTypeService;
    
    // Get all network types
    @GetMapping
    public ResponseEntity<List<NetworkType>> getAllNetworkTypes() {
        List<NetworkType> networkTypes = networkTypeService.getAllNetworkTypes();
        return new ResponseEntity<>(networkTypes, HttpStatus.OK);
    }
    
    // Get network type by ID
    @GetMapping("/{id}")
    public ResponseEntity<NetworkType> getNetworkTypeById(@PathVariable("id") Integer networkTypeId) {
        Optional<NetworkType> networkTypeData = networkTypeService.getNetworkTypeById(networkTypeId);
        
        return networkTypeData
                .map(networkType -> new ResponseEntity<>(networkType, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // Create a new network type
    @PostMapping
    public ResponseEntity<NetworkType> createNetworkType(@RequestBody NetworkType networkType) {
        try {
            NetworkType createdNetworkType = networkTypeService.createNetworkType(networkType);
            return new ResponseEntity<>(createdNetworkType, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Update a network type
    @PutMapping("/{id}")
    public ResponseEntity<NetworkType> updateNetworkType(
            @PathVariable("id") Integer networkTypeId,
            @RequestBody NetworkType networkType) {
        try {
            NetworkType updatedNetworkType = networkTypeService.updateNetworkType(networkTypeId, networkType);
            return new ResponseEntity<>(updatedNetworkType, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Delete a network type
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteNetworkType(@PathVariable("id") Integer networkTypeId) {
        try {
            networkTypeService.deleteNetworkType(networkTypeId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
