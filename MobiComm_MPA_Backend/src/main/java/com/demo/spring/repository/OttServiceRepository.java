package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.OttService;

import java.util.List;
import java.util.Optional;

@Repository
public interface OttServiceRepository extends JpaRepository<OttService, Integer> {
    Optional<OttService> findByOttName(String ottName);
    List<OttService> findByOttNameContainingIgnoreCase(String ottName);
}