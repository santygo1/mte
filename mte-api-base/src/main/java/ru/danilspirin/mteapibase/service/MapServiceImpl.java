package ru.danilspirin.mteapibase.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.model.Trajectory;
import ru.danilspirin.mteapibase.repository.TrajectoryRepository;

import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequiredArgsConstructor
public class MapServiceImpl  implements MapService{

    final TrajectoryRepository repository;

    @LogExecutionTime
    @Override
    public List<Trajectory> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo) {
        return repository.getTrajectoriesInCoordinates(lonFrom, lonTo, latFrom, latTo);
    }
}
