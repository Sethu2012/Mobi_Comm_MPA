package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.SupportFeedback;
import com.demo.spring.model.TicketStatus;
import com.demo.spring.model.User;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface SupportFeedbackRepository extends JpaRepository<SupportFeedback, Integer> {
    List<SupportFeedback> findBySubscriber(User subscriber);
    List<SupportFeedback> findByStatus(TicketStatus status);
    List<SupportFeedback> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    List<SupportFeedback> findBySubscriberAndStatus(User subscriber, TicketStatus status);
}