package ru.danilspirin.mteapibase.service;

import ru.danilspirin.mteapibase.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.model.Trajectory;

import java.util.List;

public interface MapService {
    @LogExecutionTime
    List<Trajectory> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo);
}
