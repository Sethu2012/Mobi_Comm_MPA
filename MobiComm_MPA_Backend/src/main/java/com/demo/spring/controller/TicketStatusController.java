package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.TicketStatus;
import com.demo.spring.service.TicketStatusService;

import java.util.List;

@RestController
@RequestMapping("/api/ticket-statuses")
public class TicketStatusController {
    
    private final TicketStatusService statusService;
    
    @Autowired
    public TicketStatusController(TicketStatusService statusService) {
        this.statusService = statusService;
    }
    
    @GetMapping
    public ResponseEntity<List<TicketStatus>> getAllStatuses() {
        return ResponseEntity.ok(statusService.getAllStatuses());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<TicketStatus> getStatusById(@PathVariable Integer id) {
        return ResponseEntity.ok(statusService.getStatusById(id));
    }
    
    @GetMapping("/name/{status}")
    public ResponseEntity<TicketStatus> getStatusByName(@PathVariable TicketStatus.Status status) {
        return ResponseEntity.ok(statusService.getStatusByName(status));
    }
}