package ru.danilspirin.mteapibase.application.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AnalyzedTrajectoryDto {
    String trajectoryId;
    List<AnalyzedCoordinateDto> coordinates;
}
