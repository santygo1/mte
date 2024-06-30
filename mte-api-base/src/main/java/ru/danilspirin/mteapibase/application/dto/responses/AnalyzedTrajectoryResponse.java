package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;
import java.util.List;

@Data
public class AnalyzedTrajectoryResponse {
    String trajectoryId;
    List<AnalyzedCoordinateResponse> coordinates;
}
