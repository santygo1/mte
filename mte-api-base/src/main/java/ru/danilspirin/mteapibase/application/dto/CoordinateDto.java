package ru.danilspirin.mteapibase.application.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CoordinateDto {
    double lat;
    double lon;
    String timestamp;
    double speed;
    double heading;
}