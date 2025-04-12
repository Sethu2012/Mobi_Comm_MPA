package com.demo.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.model.SupportFeedback;
import com.demo.spring.model.SupportResponse;
import com.demo.spring.model.TicketStatus;
import com.demo.spring.model.User;
import com.demo.spring.repository.SupportFeedbackRepository;
import com.demo.spring.repository.SupportResponseRepository;
import com.demo.spring.repository.TicketStatusRepository;

import java.util.List;

@Service
public class SupportResponseService {
    
    private final SupportResponseRepository responseRepository;
    private final SupportFeedbackRepository feedbackRepository;
    private final TicketStatusRepository statusRepository;
    
    @Autowired
    public SupportResponseService(SupportResponseRepository responseRepository,
                                 SupportFeedbackRepository feedbackRepository,
                                 TicketStatusRepository statusRepository) {
        this.responseRepository = responseRepository;
        this.feedbackRepository = feedbackRepository;
        this.statusRepository = statusRepository;
    }
    
    public List<SupportResponse> getAllResponses() {
        return responseRepository.findAll();
    }
    
    public SupportResponse getResponseById(Integer id) {
        return responseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Response not found with id: " + id));
    }
    
    public List<SupportResponse> getResponsesByTicket(SupportFeedback ticket) {
        return responseRepository.findByTicketOrderByResponseDateAsc(ticket);
    }
    
    public List<SupportResponse> getResponsesByResponder(User responder) {
        return responseRepository.findByResponder(responder);
    }
    
    public SupportResponse createResponse(SupportResponse response) {
        SupportFeedback ticket = response.getTicket();
        TicketStatus inProgressStatus = statusRepository.findByTicketStatus(TicketStatus.Status.IN_PROGRESS)
                .orElseThrow(() -> new RuntimeException("Ticket status 'In Progress' not found"));
        
        ticket.setStatus(inProgressStatus);
        feedbackRepository.save(ticket);
        
        return responseRepository.save(response);
    }
    
    public SupportResponse updateResponse(Integer id, SupportResponse responseDetails) {
        SupportResponse response = getResponseById(id);
        response.setResponseText(responseDetails.getResponseText());
        return responseRepository.save(response);
    }
    
    public void deleteResponse(Integer id) {
        if (!responseRepository.existsById(id)) {
            throw new RuntimeException("Response not found with id: " + id);
        }
        responseRepository.deleteById(id);
    }
    
    public SupportResponse closeTicketWithResponse(SupportResponse response) {
        SupportFeedback ticket = response.getTicket();
        TicketStatus closedStatus = statusRepository.findByTicketStatus(TicketStatus.Status.CLOSED)
                .orElseThrow(() -> new RuntimeException("Ticket status 'Closed' not found"));
        
        SupportResponse savedResponse = responseRepository.save(response);
        
        ticket.setStatus(closedStatus);
        feedbackRepository.save(ticket);
        
        return savedResponse;
    }
}
