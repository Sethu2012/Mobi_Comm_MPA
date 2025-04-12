package com.demo.spring.service;

import java.util.List;
import java.util.Optional;

import com.demo.spring.model.NetworkType;

public interface NetworkTypeService {
    List<NetworkType> getAllNetworkTypes();
    Optional<NetworkType> getNetworkTypeById(Integer networkTypeId);
    NetworkType createNetworkType(NetworkType networkType);
    NetworkType updateNetworkType(Integer networkTypeId, NetworkType networkTypeDetails);
    void deleteNetworkType(Integer networkTypeId);
}
   