package com.demo.spring.dto;


import java.time.LocalDateTime;

public class SupportFeedbackDTO {
    private Integer ticketId;
    private Long subscriberId; // Reference to User
    private Integer categoryId; // Reference to SupportCategory
    private String message;
    private String status; // Reference to TicketStatus
    private LocalDateTime createdAt;
    // Other necessary fields...

    // Getters and setters...
}

