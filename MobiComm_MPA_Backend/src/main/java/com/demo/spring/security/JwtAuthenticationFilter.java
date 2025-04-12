package com.demo.spring.security;

import jakarta.servlet.FilterChain;
import org.springframework.security.core.AuthenticationException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final CustomerUserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtUtil jwtUtil, CustomerUserDetailsService userDetailsService) {
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                   HttpServletResponse response,
                                   FilterChain filterChain)
            throws ServletException, IOException {

        // Allow OPTIONS requests to pass through for CORS preflight
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            filterChain.doFilter(request, response);
            return;
        }

        System.out.println("🔄 Processing request: " + request.getMethod() + " " + request.getRequestURI());

        final String authHeader = request.getHeader("Authorization");
        String jwtToken = null;
        String username = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwtToken = authHeader.substring(7);
            try {
                username = jwtUtil.extractMobile(jwtToken); // assuming mobile/email
                System.out.println("📛 Extracted username from token: " + username);
            } catch (Exception e) {
                logger.error("Failed to extract username from token", e);
                System.out.println("❌ JWT extraction error: " + e.getMessage());
            }
        } else {
            System.out.println("⚠️ No Authorization header found or it doesn't start with 'Bearer '");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = null;
            try {
                if (username.contains("@")) {
                    // Admin login
                    userDetails = userDetailsService.loadUserByUsername(username);
                } else {
                    // Subscriber login via mobile number
                    userDetails = userDetailsService.loadUserByMobile(username);
                }
            } catch (Exception e) {
                System.out.println("❌ Failed to load user: " + e.getMessage());
            }

            if (userDetails != null && jwtUtil.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);

                System.out.println("✅ JWT Authenticated user: " + username);
                System.out.println("✅ Authorities: " + userDetails.getAuthorities());
            } else {
                System.out.println("❌ Token validation failed for: " + username);
            }
        } else {
            System.out.println("⚠️ Username is null or authentication already exists in SecurityContext");
        }

        filterChain.doFilter(request, response);
    }
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized Access");
    }
}
