package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.model.TicketStatus;
import com.demo.spring.repository.TicketStatusRepository;

import java.util.List;

@Service
public class TicketStatusService {
    
    private final TicketStatusRepository statusRepository;
    
    @Autowired
    public TicketStatusService(TicketStatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }
    
    public List<TicketStatus> getAllStatuses() {
        return statusRepository.findAll();
    }
    
    public TicketStatus getStatusById(Integer id) {
        return statusRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ticket status not found with id: " + id));
    }
    
    public TicketStatus getStatusByName(TicketStatus.Status status) {
        return statusRepository.findByTicketStatus(status)
                .orElseThrow(() -> new EntityNotFoundException("Ticket status not found with name: " + status));
    }
}