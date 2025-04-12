package com.demo.spring.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtUtil {

    private String SECRET_KEY = "K9e25z91O+RHZ1c+scd1rIbgq5iXZnTbOaHrjXyJ9Mw="; // Change this to a strong secret

    // Extract mobile (username)
    public String extractMobile(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Extract expiration
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Extract role
    public String extractRole(String token) {
        final Claims claims = extractAllClaims(token);
        return claims.get("role", String.class);
    }

    // Generic method to extract any claim
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Validate token
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractMobile(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Check if expired
    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Generate token with proper roles
    public String generateToken(String username, String role, List<GrantedAuthority> authorities) {
        Map<String, Object> claims = new HashMap<>();
        
        // Store the role
        claims.put("role", role);
        
        // Make sure role has the ROLE_ prefix for Spring Security
        String springSecurityRole = role.startsWith("ROLE_") ? role : "ROLE_" + role;
        
        // Prepare authorities list for token
        List<String> authoritiesList = authorities.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        
        // If no authorities are provided, add the role as an authority
        if (authoritiesList.isEmpty()) {
            authoritiesList = new ArrayList<>();
            authoritiesList.add(springSecurityRole);
        }
        
        claims.put("authorities", authoritiesList);
        
        // Add roles claim specifically for Spring Security
        List<String> roles = new ArrayList<>();
        roles.add(role); // Add the main role
        claims.put("roles", roles);
        
        return createToken(claims, username);
    }

    // Overloaded method for backward compatibility
    public String generateToken(String username, String role) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role.startsWith("ROLE_") ? role : "ROLE_" + role));
        return generateToken(username, role, authorities);
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject) // usually mobileNumber
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 5)) // 5 hours
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // Extract claims using secret
    Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }
}