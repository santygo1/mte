package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;

import java.util.List;

@Data
public class TrajectoryResponse {
    String trajectoryId;
    String vesselId;
    String from;
    String to;
    List<CoordinateResponse> coordinates;
}

