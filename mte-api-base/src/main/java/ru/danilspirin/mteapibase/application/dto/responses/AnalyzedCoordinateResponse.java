package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;

@Data
public class AnalyzedCoordinateResponse {
    double lat;
    double lon;
    String color;
}
