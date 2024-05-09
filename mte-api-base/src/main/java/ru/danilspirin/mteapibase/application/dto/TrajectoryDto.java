package ru.danilspirin.mteapibase.application.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TrajectoryDto {

    String trajectoryId;

    String vesselId;

    String from;

    String to;

    List<CoordinateDto> coordinates;

    boolean isCreated = false;

    public TrajectoryDto withCreated(boolean isCreated) {
        this.isCreated = isCreated;
        return this;
    }
}
