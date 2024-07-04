package ru.danilspirin.mteapibase.application.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.jts.geom.*;
import org.springframework.stereotype.Service;
import ru.danilspirin.mteapibase.application.aop.logging.LogExecutionTime;
import ru.danilspirin.mteapibase.application.converters.TrajectoryConverter;
import ru.danilspirin.mteapibase.application.dto.CoordinateDto;
import ru.danilspirin.mteapibase.application.dto.TrajectoryDto;
import ru.danilspirin.mteapibase.application.exception.TimeConvertError;
import ru.danilspirin.mteapibase.application.model.MarineZone;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;
import ru.danilspirin.mteapibase.application.repository.MarineZoneRepository;
import ru.danilspirin.mteapibase.application.repository.TrajectoryRepository;
import ru.danilspirin.mteapibase.application.service.checkCoordinate.CheckCoordinateService;
import ru.danilspirin.mteapibase.application.utils.TimeUtil;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class TrajectoryServiceImpl implements TrajectoryService, CheckCoordinateService {

    final TrajectoryRepository repository;
    final TrajectoryConverter converter;
    final MarineZoneRepository marineZoneRepository;
    private final GeometryFactory geometryFactory = new GeometryFactory();

    @Override
    public Optional<TrajectoryDto> getTrajectoryById(String id) {
        Optional<TrajectoryModel> trajectory = repository.findById(id);
        return Optional.ofNullable(converter.toDto(trajectory.orElse(null)));
    }

    @LogExecutionTime
    @Override
    public List<TrajectoryDto> getAllTrajectories() {
        return repository.findAll().stream()
                .map(converter::toDto)
                .toList();
    }

    @Override
    public TrajectoryDto addTrajectory(TrajectoryDto trajectory) {
        // TODO: колхоз стайл, время жмет и очко тоже ;-)
        trajectory.getCoordinates().forEach(p -> {
            String tried = p.getTimestamp();
            try {
                TimeUtil.fromTimestampToString(TimeUtil.fromStringToTimestamp(tried));
            } catch (Exception e) {
                throw new TimeConvertError(tried);
            }
        });

        return converter.toDto(repository.save(converter.toModel(trajectory)));
    }

    @Override
    public TrajectoryDto updateTrajectory(String trajectoryId, TrajectoryDto trajectoryDto) {
        boolean existsBeforeUpdate = repository.existsById(trajectoryId);

        trajectoryDto.setTrajectoryId(trajectoryId);
        TrajectoryDto trajectory = converter.toDto(repository.save(converter.toModel(trajectoryDto)));

        // Если траектории не существовало до изменения, добавляем маркер "Была создана"
        return trajectory.withCreated(!existsBeforeUpdate);
    }

    @Override
    public void deleteTrajectory(String id) {
        repository.deleteById(id);
    }

    @Override
    public boolean isCoordinateCorrect(CoordinateDto coordinate, String trajectoryId) {
        List<MarineZone> marineZones = marineZoneRepository.findAll();
        Point point = geometryFactory.createPoint(new Coordinate(coordinate.getLon(), coordinate.getLat()));

        for (MarineZone mz : marineZones) {
            Polygon polygon = createPolygon(mz.getPolygon());


            // Проверка на нахождение внутри
            if (polygon.contains(point) || point.intersects(polygon)) {
                return true;
            }
//            System.out.println(coordinate);
//            System.out.println(polygon);
        }
        return false;
    }

    private Polygon createPolygon(List<PolygonCoordinate> polygonCoordinates) {
        Coordinate[] coordinates = polygonCoordinates.stream()
                .map(coordinate -> new Coordinate(coordinate.lon(), coordinate.lat()))
                .toArray(Coordinate[]::new);

        return geometryFactory.createPolygon(coordinates);
    }
}
