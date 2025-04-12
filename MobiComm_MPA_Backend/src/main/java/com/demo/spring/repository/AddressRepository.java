
package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
    // Basic CRUD operations are provided by JpaRepository
}
