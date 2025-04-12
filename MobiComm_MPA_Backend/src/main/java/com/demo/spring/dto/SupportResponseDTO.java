package com.demo.spring.dto;

import java.time.LocalDateTime;

public class SupportResponseDTO {
    private Integer responseId;
    private Integer ticketId; // Reference to SupportFeedback
    private Long responderId; // Reference to User
    private String responseText;
    private LocalDateTime responseDate;
    // Other necessary fields...

    // Getters and setters...
}

