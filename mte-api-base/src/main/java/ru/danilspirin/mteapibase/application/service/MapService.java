package ru.danilspirin.mteapibase.application.service;

import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;

import java.util.List;

public interface MapService {

    List<TrajectoryDto> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo);
}
