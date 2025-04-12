package com.demo.spring.service;

import java.util.List;

import com.demo.spring.dto.PlanCategoryDto;

public interface PlanCategoryService {
    List<PlanCategoryDto> getAllCategories();
    PlanCategoryDto getCategoryById(Integer categoryId);
    PlanCategoryDto createCategory(PlanCategoryDto categoryDto);
    PlanCategoryDto updateCategory(Integer categoryId, PlanCategoryDto categoryDto);
    void deleteCategory(Integer categoryId);
}
