package ru.danilspirin.mteapibase.web.rest.dto.responses;

import lombok.Data;

@Data
public class CoordinateResponse {
    double lat;
    double lon;
    String timestamp;
    double speed;
    double heading;
}
