package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.PlanCategory;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanCategoryRepository extends JpaRepository<PlanCategory, Integer> {
	  List<PlanCategory> findByCategoryName(String name);
	 

}
