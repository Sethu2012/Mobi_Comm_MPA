package com.demo.spring.exception;



public class InvalidOtpException extends RuntimeException {
    private final String errorCode;

    public InvalidOtpException(String message) {
        super(message);
        this.errorCode = "INVALID_OTP";  // Default error code
    }

    public InvalidOtpException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }
}
