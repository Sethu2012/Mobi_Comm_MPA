package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.dto.PlanCategoryDto;
import com.demo.spring.exception.ResourceNotFoundException;
import com.demo.spring.model.PlanCategory;
import com.demo.spring.service.PlanCategoryService;
import com.demo.spring.service.impl.PlanCategoryServiceImpl;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/plan-categories")
public class PlanCategoryController {

    @Autowired
    private PlanCategoryService planCategoryService;
    
    @Autowired
    private PlanCategoryServiceImpl planCategoryServiceimpl;
    
    
    

    // Get all plan categories
    @GetMapping
    public ResponseEntity<List<PlanCategoryDto>> getAllPlanCategories() {
        List<PlanCategoryDto> planCategories = planCategoryService.getAllCategories();
        return new ResponseEntity<>(planCategories, HttpStatus.OK);
    }

    // Get plan category by ID
    @GetMapping("/{id}")
    public ResponseEntity<PlanCategoryDto> getPlanCategoryById(@PathVariable("id") Integer categoryId) {
        try {
            PlanCategoryDto categoryDto = planCategoryService.getCategoryById(categoryId);
            return new ResponseEntity<>(categoryDto, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    // Create a new plan category
    @PostMapping
    public ResponseEntity<PlanCategoryDto> createPlanCategory(@RequestBody PlanCategoryDto categoryDto) {
        try {
            PlanCategoryDto createdCategory = planCategoryService.createCategory(categoryDto);
            return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update a plan category (including category_description)
    @PutMapping("/{id}")
    public ResponseEntity<PlanCategoryDto> updatePlanCategory(
            @PathVariable("id") Integer categoryId,
            @RequestBody PlanCategoryDto categoryDto) {
        try {
            PlanCategoryDto updatedCategory = planCategoryService.updateCategory(categoryId, categoryDto);
            return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete a plan category
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlanCategory(@PathVariable("id") Integer categoryId) {
        try {
            planCategoryService.deleteCategory(categoryId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
