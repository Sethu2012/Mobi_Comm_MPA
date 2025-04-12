package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.SupportFeedback;
import com.demo.spring.model.SupportResponse;
import com.demo.spring.model.User;

import java.util.List;

@Repository
public interface SupportResponseRepository extends JpaRepository<SupportResponse, Integer> {
    List<SupportResponse> findByTicket(SupportFeedback ticket);
    List<SupportResponse> findByResponder(User responder);
    List<SupportResponse> findByTicketOrderByResponseDateAsc(SupportFeedback ticket);
}