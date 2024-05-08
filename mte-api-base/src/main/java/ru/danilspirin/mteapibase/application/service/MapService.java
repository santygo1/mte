package ru.danilspirin.mteapibase.application.service;

import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.model.Trajectory;

import java.util.List;

public interface MapService {

    List<Trajectory> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo);
}
