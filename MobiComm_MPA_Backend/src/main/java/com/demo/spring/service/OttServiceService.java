package com.demo.spring.service;

import java.util.List;
import java.util.Optional;

import com.demo.spring.model.*;


public interface OttServiceService {
    List<OttService> getAllOttServices();
    Optional<OttService> getOttServiceById(Integer ottServiceId);
    OttService createOttService(OttService ottService);
    OttService updateOttService(Integer ottServiceId, OttService ottServiceDetails);
    void deleteOttService(Integer ottServiceId);
}