package com.demo.spring.security;

import com.demo.spring.model.User;
import com.demo.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Only Admin login handled via email
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        return new CustomUserDetails(user);
    }

    // For subscriber login via mobile number
    public UserDetails loadUserByMobile(String mobile) throws UsernameNotFoundException {
        User user = userRepository.findByMobileNumber(mobile)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with mobile: " + mobile));
        return new CustomUserDetails(user);
    }
}
