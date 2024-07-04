package ru.danilspirin.mteapibase.application.service.checkCoordinate;

import ru.danilspirin.mteapibase.application.dto.CoordinateDto;

public interface CheckCoordinateService {
    boolean isCoordinateCorrect(CoordinateDto coordinate, String trajectoryId);
}
