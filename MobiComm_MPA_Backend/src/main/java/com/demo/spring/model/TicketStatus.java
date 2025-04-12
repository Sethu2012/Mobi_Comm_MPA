package com.demo.spring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Ticket_Status")
public class TicketStatus {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_status_id")
    private Integer ticketStatusId;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "ticket_status", nullable = false)
    private Status ticketStatus;
    
    public Integer getTicketStatusId() {
		return ticketStatusId;
	}

	public void setTicketStatusId(Integer ticketStatusId) {
		this.ticketStatusId = ticketStatusId;
	}

	public Status getTicketStatus() {
		return ticketStatus;
	}

	public void setTicketStatus(Status ticketStatus) {
		this.ticketStatus = ticketStatus;
	}

	public enum Status {
	    OPEN,
	    IN_PROGRESS,
	    CLOSED
    }
}