package com.demo.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.NetworkType;
import com.demo.spring.repository.NetworkTypeRepository;
import com.demo.spring.service.NetworkTypeService;

import java.util.List;
import java.util.Optional;


@Service
public class NetworkTypeServiceImpl implements NetworkTypeService {
    
    @Autowired
    private NetworkTypeRepository networkTypeRepository;
    
    @Override
    public List<NetworkType> getAllNetworkTypes() {
        return networkTypeRepository.findAll();
    }
    
    @Override
    public Optional<NetworkType> getNetworkTypeById(Integer networkTypeId) {
        return networkTypeRepository.findById(networkTypeId);
    }
    
    @Override
    @Transactional
    public NetworkType createNetworkType(NetworkType networkType) {
        return networkTypeRepository.save(networkType);
    }
    
    @Override
    @Transactional
    public NetworkType updateNetworkType(Integer networkTypeId, NetworkType networkTypeDetails) {
        NetworkType existingNetworkType = networkTypeRepository.findById(networkTypeId)
                .orElseThrow(() -> new ResourceNotFoundException("Network Type not found with id: " + networkTypeId));

        if (networkTypeDetails.getNetworkType() == null) {
            throw new IllegalArgumentException("Network Type cannot be null");
        }

        existingNetworkType.setNetworkType(networkTypeDetails.getNetworkType());

        return networkTypeRepository.save(existingNetworkType);
    }

    
    @Override
    @Transactional
    public void deleteNetworkType(Integer networkTypeId) {
        networkTypeRepository.deleteById(networkTypeId);
    }
}
