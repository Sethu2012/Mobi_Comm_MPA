package com.demo.spring.converter;

import com.demo.spring.model.NetworkTypeEnum;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class NetworkTypeConverter implements AttributeConverter<NetworkTypeEnum, String> {
    @Override
    public String convertToDatabaseColumn(NetworkTypeEnum attribute) {
        return attribute == null ? null : attribute.getValue();
    }

    @Override
    public NetworkTypeEnum convertToEntityAttribute(String dbData) {
        return dbData == null ? null : NetworkTypeEnum.fromValue(dbData);
    }
}