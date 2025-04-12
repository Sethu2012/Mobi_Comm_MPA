package com.demo.spring.exception;

import java.time.LocalDateTime;
import java.util.Date;

public class ErrorDetails {
    private LocalDateTime timestamp;
    private String message;
    private String details;



    public ErrorDetails(String message, LocalDateTime timestamp, String details) {
    	this.timestamp = timestamp;
        this.message = message;
        this.details = details;
	}

	public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }
}
