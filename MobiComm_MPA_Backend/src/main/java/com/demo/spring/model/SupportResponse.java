package com.demo.spring.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Support_Responses")
public class SupportResponse {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "response_id")
    private Integer responseId;
    
    public Integer getResponseId() {
		return responseId;
	}

	public void setResponseId(Integer responseId) {
		this.responseId = responseId;
	}

	public SupportFeedback getTicket() {
		return ticket;
	}

	public void setTicket(SupportFeedback ticket) {
		this.ticket = ticket;
	}

	public User getResponder() {
		return responder;
	}

	public void setResponder(User responder) {
		this.responder = responder;
	}

	public String getResponseText() {
		return responseText;
	}

	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}

	public LocalDateTime getResponseDate() {
		return responseDate;
	}

	public void setResponseDate(LocalDateTime responseDate) {
		this.responseDate = responseDate;
	}

	@ManyToOne
	@JoinColumn(name = "ticket_id", nullable = false)
	@JsonIgnore
	private SupportFeedback ticket;
    
	@ManyToOne
	@JoinColumn(name = "responder_id", nullable = false)
	@JsonIgnore
	private User responder;
    
    @NotBlank(message = "Response text is required")
    @Column(name = "response_text", nullable = false, columnDefinition = "TEXT")
    private String responseText;
    
    @Column(name = "response_date", nullable = false)
    private LocalDateTime responseDate = LocalDateTime.now();
}