package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.model.SupportCategory;
import com.demo.spring.repository.SupportCategoryRepository;

import java.util.List;

@Service
public class SupportCategoryService {
    
    private final SupportCategoryRepository categoryRepository;
    
    @Autowired
    public SupportCategoryService(SupportCategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    
    public List<SupportCategory> getAllCategories() {
        return categoryRepository.findAll();
    }
    
    public SupportCategory getCategoryById(Integer id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
    }
    
    public SupportCategory getCategoryByName(SupportCategory.CategoryName name) {
        return categoryRepository.findByCategoryName(name)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with name: " + name));
    }
    
    public SupportCategory createCategory(SupportCategory category) {
        return categoryRepository.save(category);
    }
    
    public SupportCategory updateCategory(Integer id, SupportCategory categoryDetails) {
        SupportCategory category = getCategoryById(id);
        category.setCategoryName(categoryDetails.getCategoryName());
        return categoryRepository.save(category);
    }
}