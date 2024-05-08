package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;

@Data
public class CoordinateResponse {
    double lat;
    double lon;
    String timestamp;
    double speed;
    double heading;
}
