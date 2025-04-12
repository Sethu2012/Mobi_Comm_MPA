package com.demo.spring.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.SupportCategory;
import com.demo.spring.service.SupportCategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class SupportCategoryController {
    
    private final SupportCategoryService categoryService;
    
    @Autowired
    public SupportCategoryController(SupportCategoryService categoryService) {
        this.categoryService = categoryService;
    }
    
    @GetMapping
    public ResponseEntity<List<SupportCategory>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<SupportCategory> getCategoryById(@PathVariable Integer id) {
        return ResponseEntity.ok(categoryService.getCategoryById(id));
    }
    
    @GetMapping("/name/{name}")
    public ResponseEntity<SupportCategory> getCategoryByName(@PathVariable SupportCategory.CategoryName name) {
        return ResponseEntity.ok(categoryService.getCategoryByName(name));
    }
    
    @PostMapping
    public ResponseEntity<SupportCategory> createCategory(@Valid @RequestBody SupportCategory category) {
        return new ResponseEntity<>(categoryService.createCategory(category), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<SupportCategory> updateCategory(@PathVariable Integer id, 
                                                        @Valid @RequestBody SupportCategory category) {
        return ResponseEntity.ok(categoryService.updateCategory(id, category));
    }
}