package ru.danilspirin.mteapibase.application.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.TrajectoryConverter;
import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;

import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequiredArgsConstructor
public class MapServiceImpl implements MapService {

    final TrajectoryRepository repository;
    final TrajectoryConverter converter;

    @LogExecutionTime
    @Override
    public List<TrajectoryDto> getTrajectoriesInCoordinates(double lonFrom, double lonTo, double latFrom, double latTo) {
        return repository.getTrajectoriesInCoordinates(lonFrom, lonTo, latFrom, latTo).stream()
                .map(converter::toDto)
                .toList();
    }
}
