package com.demo.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.spring.model.User;
import com.demo.spring.model.User.UserRole;
import com.demo.spring.model.User.UserStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    Optional<User> findByEmail(String email);
    
    Optional<User> findByMobileNumber(String mobileNumber);
    
    List<User> findByRole(UserRole role);
    
    List<User> findByUserStatus(UserStatus status);
    
    @Query(value = "SELECT * FROM users WHERE registered_at BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<User> findUsersRegisteredBetween(
            @Param("startDate") LocalDateTime startDate, 
            @Param("endDate") LocalDateTime endDate);

    
    @Query("SELECT u FROM User u WHERE u.isVerified = :verified")
    List<User> findByVerificationStatus(@Param("verified") Boolean verified);
    
    boolean existsByMobileNumber(String mobileNumber);
    
    boolean existsByEmail(String email);
}
