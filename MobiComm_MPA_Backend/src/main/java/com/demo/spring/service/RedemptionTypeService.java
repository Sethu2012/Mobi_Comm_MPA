package com.demo.spring.service;

import java.util.List;
import java.util.Optional;

import com.demo.spring.model.RedemptionType;

public interface RedemptionTypeService {
    List<RedemptionType> getAllRedemptionTypes();
    Optional<RedemptionType> getRedemptionTypeById(Integer redemptionTypeId);
    RedemptionType createRedemptionType(RedemptionType redemptionType);
    RedemptionType updateRedemptionType(Integer redemptionTypeId, RedemptionType redemptionTypeDetails);
    void deleteRedemptionType(Integer redemptionTypeId);
}
