package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import org.locationtech.jts.geom.*;
import org.locationtech.jts.geom.impl.CoordinateArraySequence;
import org.locationtech.jts.operation.buffer.BufferParameters;
import org.locationtech.jts.operation.distance.DistanceOp;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.TrajectoryModel;

import java.util.ArrayList;
import java.util.List;

public class JTSAnalyzerImpl implements Analyzer {
    private static final GeometryFactory GEOMETRY_FACTORY = new GeometryFactory();
    private static final double EARTH_RADIUS_KM = 6371; // радиус Земли в км

    private final double bufferRadiusInKm;
    private final int resultInterpolation;

    public JTSAnalyzerImpl(double bufferRadiusInKm, int resultInterpolation) {
        this.bufferRadiusInKm = bufferRadiusInKm;
        this.resultInterpolation = resultInterpolation;
    }

    @Override
    public List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels) {
        List<AnalyzedTrajectory> trajectories = trajectoryModels.stream().map(AnalyzedTrajectory::fromTrajectory).toList();
        if (resultInterpolation != 0) {
            trajectories = trajectories.stream().map(t -> t.interpolate(500)).toList();
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
        List<Geometry> intersections = new ArrayList<>();
        for (int i = 0; i < buffers.size(); i++) {
            for (int j = i + 1; j < buffers.size(); j++) {
                Geometry intersection = buffers.get(i).intersection(buffers.get(j));
                if (!intersection.isEmpty()) {
                    intersections.add(intersection);
                }
            }
        }

        // Покрасим точки, которые пересекаются с какой-либо другой траекторией
        trajectories.stream().flatMap(t -> t.getCoordinates().stream())
                .forEach(c -> {
                    Point point = GEOMETRY_FACTORY.createPoint(new Coordinate(c.getLon(), c.getLat()));
                    for (Geometry intersection : intersections){
                        if (intersection.intersects(point)) {
                            double distance = DistanceOp.distance(point, intersection.getCentroid());
                            Envelope envelope = intersection.getEnvelopeInternal();
                            double maxDistance = Math.sqrt(Math.pow(envelope.getMaxX() - envelope.getMinX(), 2) +
                                    Math.pow(envelope.getMaxY() - envelope.getMinY(), 2));

                            double normalizedDistance = 1.0 - distance / maxDistance;

                            c.addIntensityValue(normalizedDistance);
                        }
                    }
                });
        return trajectories;
    }


}
