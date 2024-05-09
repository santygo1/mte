package ru.danilspirin.mteapibase.application.service;

import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;

import java.util.List;
import java.util.Optional;


public interface TrajectoryService {
    Optional<TrajectoryDto> getTrajectoryById(String id);

    List<TrajectoryDto> getAllTrajectories();

    TrajectoryDto addTrajectory(TrajectoryDto trajectoryDto);

    TrajectoryDto updateTrajectory(String trajectoryId, TrajectoryDto trajectoryDto);

    void deleteTrajectory(String id);
}
