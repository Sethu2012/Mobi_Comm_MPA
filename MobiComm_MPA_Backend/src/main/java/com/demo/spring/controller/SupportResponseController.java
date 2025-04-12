package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.SupportResponse;
import com.demo.spring.service.SupportResponseService;

import java.util.List;

@RestController
@RequestMapping("/api/support-responses")
public class SupportResponseController {

    private final SupportResponseService supportResponseService;

    @Autowired
    public SupportResponseController(SupportResponseService supportResponseService) {
        this.supportResponseService = supportResponseService;
    }

    @GetMapping
    public ResponseEntity<List<SupportResponse>> getAllSupportResponses() {
        List<SupportResponse> supportResponses = supportResponseService.getAllResponses();
        return new ResponseEntity<>(supportResponses, HttpStatus.OK);
    }

    @GetMapping("/{responseId}")
    public ResponseEntity<SupportResponse> getSupportResponseById(@PathVariable("responseId") Integer responseId) {
        try {
            SupportResponse supportResponse = supportResponseService.getResponseById(responseId);
            return new ResponseEntity<>(supportResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<SupportResponse> createSupportResponse(@RequestBody SupportResponse supportResponse) {
        SupportResponse createdSupportResponse = supportResponseService.createResponse(supportResponse);
        return new ResponseEntity<>(createdSupportResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{responseId}")
    public ResponseEntity<SupportResponse> updateSupportResponse(
            @PathVariable("responseId") Integer responseId,
            @RequestBody SupportResponse supportResponse) {
        try {
            SupportResponse updatedSupportResponse = supportResponseService.updateResponse(responseId, supportResponse);
            return new ResponseEntity<>(updatedSupportResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{responseId}")
    public ResponseEntity<HttpStatus> deleteSupportResponse(@PathVariable("responseId") Integer responseId) {
        try {
            supportResponseService.deleteResponse(responseId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
