package com.demo.spring.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.model.RedemptionType;
import com.demo.spring.repository.RedemptionTypeRepository;
import com.demo.spring.service.RedemptionTypeService;

@Service
public class RedemptionTypeServiceImpl implements RedemptionTypeService {

    private final RedemptionTypeRepository redemptionTypeRepository;

    @Autowired  // Constructor-based Dependency Injection (Preferred)
    public RedemptionTypeServiceImpl(RedemptionTypeRepository redemptionTypeRepository) {
        this.redemptionTypeRepository = redemptionTypeRepository;
    }

    @Override
    public List<RedemptionType> getAllRedemptionTypes() {
        return redemptionTypeRepository.findAll();
    }

    @Override
    public Optional<RedemptionType> getRedemptionTypeById(Integer redemptionTypeId) {
        return redemptionTypeRepository.findById(redemptionTypeId);
    }

    @Override
    public RedemptionType createRedemptionType(RedemptionType redemptionType) {
        return redemptionTypeRepository.save(redemptionType);
    }

    @Override
    public RedemptionType updateRedemptionType(Integer redemptionTypeId, RedemptionType redemptionTypeDetails) {
        Optional<RedemptionType> existingType = redemptionTypeRepository.findById(redemptionTypeId);
        if (existingType.isPresent()) {
            RedemptionType updatedType = existingType.get();
            updatedType.setRedemptionType(redemptionTypeDetails.getRedemptionType());  // Example field
            return redemptionTypeRepository.save(updatedType);
        }
        return null; // Handle error case properly
    }

    @Override
    public void deleteRedemptionType(Integer redemptionTypeId) {
        redemptionTypeRepository.deleteById(redemptionTypeId);
    }
}
