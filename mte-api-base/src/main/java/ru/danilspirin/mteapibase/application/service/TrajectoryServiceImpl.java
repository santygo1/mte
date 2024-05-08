package ru.danilspirin.mteapibase.application.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.model.Trajectory;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class TrajectoryServiceImpl implements TrajectoryService {

    final TrajectoryRepository repository;

    @Override
    public Optional<Trajectory> getTrajectoryById(String id) {
        Optional<Trajectory> trajectory = repository.findById(id);

        return Optional.empty();
    }

    @LogExecutionTime
    @Override
    public List<Trajectory> getAllTrajectories() {
        return repository.findAll();
    }

    @Override
    public Trajectory addTrajectory(Trajectory trajectory) {
        return repository.save(trajectory);
    }
}
