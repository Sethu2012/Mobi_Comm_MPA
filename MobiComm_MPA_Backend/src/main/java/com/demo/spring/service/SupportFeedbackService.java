package com.demo.spring.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.model.SupportFeedback;
import com.demo.spring.model.TicketStatus;
import com.demo.spring.model.User;
import com.demo.spring.repository.SupportFeedbackRepository;
import com.demo.spring.repository.TicketStatusRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SupportFeedbackService {
    
    private final SupportFeedbackRepository feedbackRepository;
    private final TicketStatusRepository statusRepository;
    
    @Autowired
    public SupportFeedbackService(SupportFeedbackRepository feedbackRepository, 
                                  TicketStatusRepository statusRepository) {
        this.feedbackRepository = feedbackRepository;
        this.statusRepository = statusRepository;
    }
    
    public List<SupportFeedback> getAllTickets() {
        return feedbackRepository.findAll();
    }
    
    public SupportFeedback getTicketById(Integer id) {
        return feedbackRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Support ticket not found with id: " + id));
    }
    
    public List<SupportFeedback> getTicketsBySubscriber(User subscriber) {
        return feedbackRepository.findBySubscriber(subscriber);
    }
    
    public List<SupportFeedback> getTicketsByStatus(TicketStatus status) {
        return feedbackRepository.findByStatus(status);
    }
    
    public List<SupportFeedback> getTicketsByDateRange(LocalDateTime start, LocalDateTime end) {
        return feedbackRepository.findByCreatedAtBetween(start, end);
    }
    
    public SupportFeedback createTicket(SupportFeedback ticket) {
        // Set default status to "Open" for new tickets
        if (ticket.getStatus() == null) {
            ticket.setStatus(statusRepository.findByTicketStatus(TicketStatus.Status.OPEN)
                    .orElseThrow(() -> new RuntimeException("Default ticket status 'Open' not found")));
        }
        return feedbackRepository.save(ticket);
    }
    
    public SupportFeedback updateTicket(Integer id, SupportFeedback ticketDetails) {
        SupportFeedback ticket = getTicketById(id);
        ticket.setCategory(ticketDetails.getCategory());
        ticket.setMessage(ticketDetails.getMessage());
        ticket.setStatus(ticketDetails.getStatus());
        return feedbackRepository.save(ticket);
    }
    
    public SupportFeedback updateTicketStatus(Integer id, TicketStatus status) {
        SupportFeedback ticket = getTicketById(id);
        ticket.setStatus(status);
        return feedbackRepository.save(ticket);
    }
    
    public void deleteTicket(Integer id) {
        if (!feedbackRepository.existsById(id)) {
            throw new EntityNotFoundException("Support ticket not found with id: " + id);
        }
        feedbackRepository.deleteById(id);
    }
    
    public List<SupportFeedback> getTicketsBySubscriberAndStatus(User subscriber, TicketStatus status) {
        return feedbackRepository.findBySubscriberAndStatus(subscriber, status);
    }
    
    // Business logic: Reopen a closed ticket
    public SupportFeedback reopenTicket(Integer id) {
        SupportFeedback ticket = getTicketById(id);
        TicketStatus openStatus = statusRepository.findByTicketStatus(TicketStatus.Status.OPEN)
                .orElseThrow(() -> new RuntimeException("Ticket status 'Open' not found"));
        ticket.setStatus(openStatus);
        return feedbackRepository.save(ticket);
    }
    
    // Business logic: Escalate a ticket
    public SupportFeedback escalateTicket(Integer id) {
        SupportFeedback ticket = getTicketById(id);
        TicketStatus inProgressStatus = statusRepository.findByTicketStatus(TicketStatus.Status.IN_PROGRESS)
                .orElseThrow(() -> new RuntimeException("Ticket status 'In Progress' not found"));
        ticket.setStatus(inProgressStatus);
        return feedbackRepository.save(ticket);
    }
}