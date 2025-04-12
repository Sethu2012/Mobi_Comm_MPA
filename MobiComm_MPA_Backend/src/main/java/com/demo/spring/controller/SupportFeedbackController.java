package com.demo.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.spring.model.SupportFeedback;
import com.demo.spring.model.TicketStatus;
import com.demo.spring.model.User;
import com.demo.spring.service.SupportFeedbackService;
import com.demo.spring.service.TicketStatusService;
import com.demo.spring.service.UserService;

import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tickets")
public class SupportFeedbackController {

    private final SupportFeedbackService supportFeedbackService;
    private final UserService userService;
    private final TicketStatusService ticketStatusService;

    @Autowired
    public SupportFeedbackController(SupportFeedbackService supportFeedbackService,
                                    UserService userService,
                                    TicketStatusService ticketStatusService) {
        this.supportFeedbackService = supportFeedbackService;
        this.userService = userService;
        this.ticketStatusService = ticketStatusService;
    }

    @GetMapping
    public ResponseEntity<List<SupportFeedback>> getAllTickets() {
        List<SupportFeedback> tickets = supportFeedbackService.getAllTickets();
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SupportFeedback> getTicketById(@PathVariable Integer id) {
        SupportFeedback ticket = supportFeedbackService.getTicketById(id);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @GetMapping("/subscriber/{subscriberId}")
    public ResponseEntity<List<SupportFeedback>> getTicketsBySubscriber(@PathVariable Integer subscriberId) {
        Optional<User> subscriberOptional = userService.getUserById(subscriberId);
        
        if (subscriberOptional.isPresent()) {
            User subscriber = subscriberOptional.get();
            List<SupportFeedback> tickets = supportFeedbackService.getTicketsBySubscriber(subscriber);
            return new ResponseEntity<>(tickets, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/status/{statusId}")
    public ResponseEntity<List<SupportFeedback>> getTicketsByStatus(@PathVariable Integer statusId) {
        Optional<TicketStatus> statusOptional = Optional.ofNullable(ticketStatusService.getStatusById(statusId));
        
        if (statusOptional.isPresent()) {
            TicketStatus status = statusOptional.get();
            List<SupportFeedback> tickets = supportFeedbackService.getTicketsByStatus(status);
            return new ResponseEntity<>(tickets, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/date-range")
    public ResponseEntity<List<SupportFeedback>> getTicketsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        List<SupportFeedback> tickets = supportFeedbackService.getTicketsByDateRange(start, end);
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @GetMapping("/subscriber/{subscriberId}/status/{statusId}")
    public ResponseEntity<List<SupportFeedback>> getTicketsBySubscriberAndStatus(
            @PathVariable Integer subscriberId,
            @PathVariable Integer statusId) {
        Optional<User> subscriberOptional = userService.getUserById(subscriberId);
        Optional<TicketStatus> statusOptional = Optional.ofNullable(ticketStatusService.getStatusById(statusId));
        
        if (subscriberOptional.isPresent() && statusOptional.isPresent()) {
            User subscriber = subscriberOptional.get();
            TicketStatus status = statusOptional.get();
            List<SupportFeedback> tickets = supportFeedbackService.getTicketsBySubscriberAndStatus(subscriber, status);
            return new ResponseEntity<>(tickets, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping
    public ResponseEntity<SupportFeedback> createTicket(@Valid @RequestBody SupportFeedback ticket) {
        SupportFeedback createdTicket = supportFeedbackService.createTicket(ticket);
        return new ResponseEntity<>(createdTicket, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SupportFeedback> updateTicket(
            @PathVariable Integer id,
            @Valid @RequestBody SupportFeedback ticketDetails) {
        SupportFeedback updatedTicket = supportFeedbackService.updateTicket(id, ticketDetails);
        return new ResponseEntity<>(updatedTicket, HttpStatus.OK);
    }

    @PatchMapping("/{id}/status/{statusId}")
    public ResponseEntity<SupportFeedback> updateTicketStatus(
            @PathVariable Integer id,
            @PathVariable Integer statusId) {
        TicketStatus status = ticketStatusService.getStatusById(statusId);
        SupportFeedback updatedTicket = supportFeedbackService.updateTicketStatus(id, status);
        return new ResponseEntity<>(updatedTicket, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Integer id) {
        supportFeedbackService.deleteTicket(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{id}/reopen")
    public ResponseEntity<SupportFeedback> reopenTicket(@PathVariable Integer id) {
        SupportFeedback reopenedTicket = supportFeedbackService.reopenTicket(id);
        return new ResponseEntity<>(reopenedTicket, HttpStatus.OK);
    }

    @PatchMapping("/{id}/escalate")
    public ResponseEntity<SupportFeedback> escalateTicket(@PathVariable Integer id) {
        SupportFeedback escalatedTicket = supportFeedbackService.escalateTicket(id);
        return new ResponseEntity<>(escalatedTicket, HttpStatus.OK);
    }
}