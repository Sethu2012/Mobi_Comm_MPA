package com.demo.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.Address;
import com.demo.spring.repository.AddressRepository;
import com.demo.spring.service.AddressService;

import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public Optional<Address> getAddressById(Integer id) {
        return addressRepository.findById(id);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Address updateAddress(Integer id, Address addressDetails) {
        Address address = addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found with id: " + id));

        address.setDoorNo(addressDetails.getDoorNo());
        address.setStreet(addressDetails.getStreet());
        address.setDistrict(addressDetails.getDistrict());
        address.setState(addressDetails.getState());
        address.setPincode(addressDetails.getPincode());
        address.setCountry(addressDetails.getCountry());

        return addressRepository.save(address);
    }

    @Override
    public void deleteAddress(Integer id) {
        Address address = addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found with id: " + id));
        addressRepository.delete(address);
    }
}
