package com.demo.spring.controller;

import com.demo.spring.model.User;
import com.demo.spring.repository.UserRepository;
import com.demo.spring.security.JwtUtil;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager = null;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtTokenUtil;

    // === 🧑 Admin Login ===
    @PostMapping("/admin/login")
    public ResponseEntity<?> adminLogin(@RequestParam String email,
                                        @RequestParam String password,
                                        HttpSession session) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );

            User user = userRepository.findByEmail(email).orElseThrow();

            if (!user.getRole().name().equals("Admin")) {
                return ResponseEntity.status(403).body("Access denied. Not an Admin.");
            }

            session.setAttribute("user", user);
            return ResponseEntity.ok("Admin login successful. Session started.");
        } catch (Exception ex) {
            return ResponseEntity.status(401).body("Invalid credentials.");
        }
    }

    // === 📱 Subscriber Login ===
    @PostMapping("/subscriber/login")
    public ResponseEntity<?> subscriberLogin(@RequestParam String mobileNumber) {
        try {
            Optional<User> userOpt = userRepository.findByMobileNumber(mobileNumber);
            
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(404).body("Mobile number not found.");
            }
            
            User user = userOpt.get();
            if (!user.getRole().name().equals("Subscriber")) {
                return ResponseEntity.status(403).body("Access denied. Not a Subscriber.");
            }
            
            String jwtToken = jwtTokenUtil.generateToken(
                user.getMobileNumber(),
                user.getRole().name(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
            );
            
            return ResponseEntity.ok().body(
                Map.of("token", jwtToken, "userId", user.getUserId())
            );
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Server error: " + e.getMessage());
        }
    }

    // === 🔓 Admin Logout ===
    @PostMapping("/admin/logout")
    public ResponseEntity<?> adminLogout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Admin logged out successfully.");
    }
}
