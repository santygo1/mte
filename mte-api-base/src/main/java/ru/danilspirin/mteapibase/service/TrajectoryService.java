package ru.danilspirin.mteapibase.service;

import ru.danilspirin.mteapibase.model.Trajectory;

import java.util.List;
import java.util.Optional;


public interface TrajectoryService {
    Optional<Trajectory> getTrajectoryById(String id);

    List<Trajectory> getAllTrajectories();

    Trajectory addTrajectory(Trajectory trajectory);

}
