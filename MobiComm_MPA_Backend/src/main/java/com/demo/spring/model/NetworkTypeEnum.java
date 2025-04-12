package com.demo.spring.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum NetworkTypeEnum {
    THREE_G("3G"),
    FOUR_G("4G"),
    FIVE_G("5G");

    private final String value;

    NetworkTypeEnum(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static NetworkTypeEnum fromValue(String value) {
        if (value == null) {
            return null;
        }
        
        for (NetworkTypeEnum type : NetworkTypeEnum.values()) {
            if (type.value.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Invalid network type: " + value);
    }
}