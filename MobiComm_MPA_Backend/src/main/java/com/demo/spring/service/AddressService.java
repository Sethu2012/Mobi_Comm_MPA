package com.demo.spring.service;

import org.springframework.stereotype.Service;

import com.demo.spring.model.Address;

import java.util.List;
import java.util.Optional;

public interface AddressService {
    Address saveAddress(Address address);
    Optional<Address> getAddressById(Integer id);
    List<Address> getAllAddresses();
    Address updateAddress(Integer id, Address addressDetails);
    void deleteAddress(Integer id);
}