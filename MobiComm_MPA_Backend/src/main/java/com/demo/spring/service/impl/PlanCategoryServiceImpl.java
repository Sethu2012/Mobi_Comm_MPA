package com.demo.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.spring.dto.PlanCategoryDto;
import com.demo.spring.exception.DuplicateResourceException;
import com.demo.spring.exception.InvalidDataException;
import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.PlanCategory;
import com.demo.spring.repository.PlanCategoryRepository;
import com.demo.spring.repository.PlanRepository;
import com.demo.spring.repository.SubscriberInfoRepository;
import com.demo.spring.service.PlanCategoryService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.stream.Collectors;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
@RequiredArgsConstructor
public class PlanCategoryServiceImpl implements PlanCategoryService {
    
    private final PlanCategoryRepository planCategoryRepository;
    private final PlanRepository planRepository;
	private PlanCategory savedCategory;
    
    @Autowired
    public PlanCategoryServiceImpl(PlanCategoryRepository planCategoryRepository,PlanRepository planRepository) {
        this.planCategoryRepository = planCategoryRepository;
        this.planRepository=planRepository;
    }
    
    @Override
    public List<PlanCategoryDto> getAllCategories() {
        return planCategoryRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    @Override
    public PlanCategoryDto getCategoryById(Integer categoryId) {
        PlanCategory category = planCategoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + categoryId));
        return convertToDto(category);
    }
    
    @Override
    @Transactional
    public PlanCategoryDto createCategory(PlanCategoryDto categoryDto) {
        PlanCategory category = new PlanCategory();
        category.setCategoryName(categoryDto.getCategoryName());
        category.setCategoryDescription(categoryDto.getCategoryDescription());

        PlanCategory savedCategory = planCategoryRepository.save(category);
        return convertToDto(savedCategory);
    }
    
    @Override
    @Transactional
    public PlanCategoryDto updateCategory(Integer categoryId, PlanCategoryDto categoryDto) {
        PlanCategory category = planCategoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + categoryId));
        
        category.setCategoryName(categoryDto.getCategoryName());
        category.setCategoryDescription(categoryDto.getCategoryDescription());
        
        PlanCategory updatedCategory = planCategoryRepository.save(category);
        return convertToDto(updatedCategory);
    }
    
    @Override
    @Transactional
    public void deleteCategory(Integer categoryId) {
        PlanCategory category = planCategoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with ID: " + categoryId));
        
        if (planRepository.findByCategory(category).isEmpty()) {
            planCategoryRepository.delete(category);
        } else {
            throw new DataIntegrityViolationException("Cannot delete category with associated plans");
        }
    }
    
    private PlanCategoryDto convertToDto(PlanCategory category) {
        PlanCategoryDto dto = new PlanCategoryDto();
        dto.setCategoryId(category.getCategoryId());
        dto.setCategoryName(category.getCategoryName());
        dto.setCategoryDescription(category.getCategoryDescription());
        return dto;
    }

    /**
     * Creates a new plan category after performing business rule validations.
     * 
     * @param category The plan category to be created
     * @return The created plan category with generated ID
     * @throws DuplicateResourceException if a category with the same name already exists
     * @throws InvalidDataException if the category data is invalid
     */
//    public PlanCategory createCategory(PlanCategory category) {
//        // Validate that category name is not null or empty
//        if (category.getCategoryName() == null || category.getCategoryName().trim().isEmpty()) {
//            throw new InvalidDataException("Category name cannot be empty");
//        }
//        
//        // Validate that category name doesn't exceed maximum length
//        if (category.getCategoryName().length() > 100) {
//            throw new InvalidDataException("Category name cannot exceed 100 characters");
//        }
//        
//        // Check for duplicate category name (case-insensitive)
//        List<PlanCategory> existingCategories = planCategoryRepository.findByCategoryName(category.getCategoryName());
//
// 
//        
//        // Sanitize description if provided
//        if (category.getCategoryDescription() != null) {
//            // Remove any potentially harmful HTML/script content
//            String sanitizedDescription = category.getCategoryDescription().replaceAll("<script[^>]*>.*?</script>", "");
//            sanitizedDescription = sanitizedDescription.replaceAll("<.*?>", "");
//            category.setCategoryDescription(sanitizedDescription);
//            
//            // Trim and limit description length if needed
//            if (sanitizedDescription.length() > 500) {
//                category.setCategoryDescription(sanitizedDescription.substring(0, 500));
//            }
//        }
        
      
        
        // Return the saved category with its generated ID
       //return savedCategory;
    //}

}




