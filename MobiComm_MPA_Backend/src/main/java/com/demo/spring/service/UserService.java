package com.demo.spring.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.demo.spring.model.User;
import com.demo.spring.model.User.UserRole;
import com.demo.spring.model.User.UserStatus;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUserById(Integer id);
    Optional<User> getUserForQuickRechargeById(Integer id);
    Optional<User> getUserByEmail(String email);
    Optional<User> getUserByMobileNumber(String mobileNumber);
    List<User> getAllUsers();
    List<User> getUsersByRole(UserRole role);
    List<User> getUsersByStatus(UserStatus status);
    List<User> getUsersRegisteredBetween(LocalDateTime startDate, LocalDateTime endDate);
    List<User> getUsersByVerificationStatus(Boolean verified);
    User updateUser(Integer id, User userDetails);
    User updateUserStatus(Integer id, UserStatus status);
    void deactivateUser(Integer id);
    void deleteUser(Integer id);
    boolean existsByMobileNumber(String mobileNumber);
    boolean existsByEmail(String email);
}
