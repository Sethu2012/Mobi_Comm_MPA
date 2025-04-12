package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.SupportCategory;

import java.util.Optional;

@Repository
public interface SupportCategoryRepository extends JpaRepository<SupportCategory, Integer> {
    Optional<SupportCategory> findByCategoryName(SupportCategory.CategoryName categoryName);
}