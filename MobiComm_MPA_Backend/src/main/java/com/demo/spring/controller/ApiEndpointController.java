package com.demo.spring.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.beans.factory.annotation.Qualifier;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ApiEndpointController {

    private final RequestMappingHandlerMapping handlerMapping;

    // Use @Qualifier to specify which bean to use
    public ApiEndpointController(@Qualifier("requestMappingHandlerMapping") RequestMappingHandlerMapping handlerMapping) {
        this.handlerMapping = handlerMapping;
    }

    @GetMapping("/endpoints")
    public List<String> getAllEndpoints() {
        return handlerMapping.getHandlerMethods().keySet().stream()
                .map(info -> info.toString())
                .toList();
    }
}

