package com.demo.spring.security;

import org.springframework.beans.factory.annotation.Autowired;
import com.demo.spring.security.JwtAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Autowired
    private CustomerUserDetailsService userDetailsService;

    @Autowired
    private CustomAccessDeniedHandler customAccessDeniedHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/admin/login").permitAll()
                .requestMatchers("/api/auth/subscriber/login").permitAll()
                .requestMatchers("/api/users/mobile/**").permitAll()
                .requestMatchers("/api/ott-services").permitAll()
                .requestMatchers("/api/plan-categories").permitAll()
                .requestMatchers("/api/users/quick-recharge/**").permitAll()
                .requestMatchers("/api/plans/quick-recharge/**").permitAll()
                .requestMatchers("/api/payment-methods/quick-recharge/**").permitAll()
                .requestMatchers("/api/transactions/quick-recharge/**").permitAll()
                .requestMatchers("/api/recharges/process/quick-recharge/**").permitAll()
                .requestMatchers("/api/otp/**").permitAll()
                .requestMatchers("/api/plans").permitAll()
                .requestMatchers("/api/recharge/process").hasRole("Subscriber")
                .requestMatchers("/api/payment-methods").hasAnyRole("Admin", "Subscriber")
                .requestMatchers("/api/transactions").hasAnyRole("Admin", "Subscriber")
                .requestMatchers("/api/admin/**").hasRole("Admin")
                .requestMatchers("/api/subscriber/**").hasRole("Subscriber")
                .anyRequest().authenticated()
            )
            .userDetailsService(userDetailsService)
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(exception -> exception
                .accessDeniedHandler(customAccessDeniedHandler)
            );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(
            "http://127.0.0.1:5500",
            "http://127.0.0.1:5501", // 🔥 Added this!
            "http://localhost:5500",
            "http://localhost:3000",
            "http://localhost:8080",
            "http://localhost:4200"
        ));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With", "*"));
        configuration.setExposedHeaders(Arrays.asList("Authorization"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
