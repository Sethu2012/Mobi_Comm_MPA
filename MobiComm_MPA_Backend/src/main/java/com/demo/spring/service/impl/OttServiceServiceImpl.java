package com.demo.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.model.*;
import com.demo.spring.repository.*;
import com.demo.spring.service.OttServiceService;

import java.util.List;
import java.util.Optional;


@Service
public class OttServiceServiceImpl implements OttServiceService {
    
    @Autowired
    private OttServiceRepository ottServiceRepository;
    
    @Override
    public List<OttService> getAllOttServices() {
        return ottServiceRepository.findAll();
    }
    
    @Override
    public Optional<OttService> getOttServiceById(Integer ottServiceId) {
        return ottServiceRepository.findById(ottServiceId);
    }
    
    @Override
    @Transactional
    public OttService createOttService(OttService ottService) {
        return ottServiceRepository.save(ottService);
    }
    
    @Override
    @Transactional
    public OttService updateOttService(Integer ottServiceId, OttService ottServiceDetails) {
        OttService existingOttService = ottServiceRepository.findById(ottServiceId)
                .orElseThrow(() -> new RuntimeException("OTT Service not found with id: " + ottServiceId));
        
        existingOttService.setOttName(ottServiceDetails.getOttName());
        existingOttService.setOttDescription(ottServiceDetails.getOttDescription());
        
        return ottServiceRepository.save(existingOttService);
    }
    
    @Override
    @Transactional
    public void deleteOttService(Integer ottServiceId) {
        ottServiceRepository.deleteById(ottServiceId);
    }
}

