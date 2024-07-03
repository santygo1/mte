package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import org.locationtech.jts.geom.*;
import org.locationtech.jts.geom.impl.CoordinateArraySequence;
import org.locationtech.jts.operation.buffer.BufferParameters;
import ru.danilspirin.mteapibase.application.model.trajectory.AnalyzedCoordinate;
import ru.danilspirin.mteapibase.application.model.trajectory.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;

import java.util.*;
import java.util.function.Predicate;

public class JTSAnalyzerImpl implements Analyzer {
    private static final GeometryFactory GEOMETRY_FACTORY = new GeometryFactory();
    private static final double EARTH_RADIUS_KM = 6371; // радиус Земли в км
    private  Predicate<AnalyzedCoordinate> coordinatePredicate = (_) -> true;

    private final double bufferRadiusInKm;
    private final int resultInterpolation;

    public JTSAnalyzerImpl(double bufferRadiusInKm, int resultInterpolation) {
        this.bufferRadiusInKm = bufferRadiusInKm;
        this.resultInterpolation = resultInterpolation;
    }

    @Override
    public List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels) {
        List<AnalyzedTrajectory> trajectories = trajectoryModels.stream().map(AnalyzedTrajectory::fromTrajectory).toList();

        if (!(trajectories.size() > 1)) return trajectories;

        if (resultInterpolation != 0) {
            trajectories = trajectories.stream().map(t -> t.interpolate(resultInterpolation)).toList();
        }

        // Создаем буферы для каждой траектории
        List<Polygon> buffers = new ArrayList<>();
        for (AnalyzedTrajectory trajectory : trajectories) {
            // Преобразуем координаты в LineString
            List<Coordinate> coords = trajectory.getCoordinates().stream()
                    .map(c -> new Coordinate(c.getLon(), c.getLat()))
                    .toList();
            LineString lineString = GEOMETRY_FACTORY.createLineString(new CoordinateArraySequence(coords.toArray(new Coordinate[0])));

            // Создаем буфер вокруг траектории
            double bufferRadiusDegrees = bufferRadiusInKm / EARTH_RADIUS_KM * 180 / Math.PI;
            Polygon buffer = (Polygon) lineString.buffer(bufferRadiusDegrees, 8, BufferParameters.CAP_ROUND);
            buffers.add(buffer);
        }


        // Находим пересечения между буферными зонами
        Set<Geometry> intersections = new HashSet<>();
        for (int i = 0; i < buffers.size(); i++) {
            for (int j = i + 1; j < buffers.size(); j++) {
                Geometry intersection = buffers.get(i).intersection(buffers.get(j));
                if (!intersection.isEmpty()) {
                    intersections.add(intersection);
                }
            }
        }

        int maxCount = intersections.size();
        trajectories.stream().flatMap(t -> t.getCoordinates().stream())
                .filter(coordinatePredicate)
                .forEach(c -> {
                    Point point = GEOMETRY_FACTORY.createPoint(new Coordinate(c.getLon(), c.getLat()));
                    c.setMaxCount(maxCount);
                    for (Geometry intersection : intersections) {
                        if (intersection.intersects(point)) {
                            c.setIntensityCount(c.getIntensityCount() + 1);
                        }
                    }
                });

        return trajectories;
    }

    /**
     * @param coordinatePredicate - фильтр анализируемых координат, если исключаются, анализ к координате не применяется
     */
    @Override
    public JTSAnalyzerImpl withCoordinateFilter(Predicate<AnalyzedCoordinate> coordinatePredicate) {
        this.coordinatePredicate = coordinatePredicate;
        return this;
    }

}
