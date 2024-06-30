package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import ru.danilspirin.mteapibase.application.model.AnalyzedCoordinate;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.TrajectoryModel;
import ru.danilspirin.mteapibase.application.utils.GeographicCoordinatesDistance;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MainAreaAnalyzer implements Analyzer {

    private static final double CLUSTER_RADIUS_KM = 0.1;
    private static final int CLUSTER_CRITICAL_TRAJECTORIES_COUNT = 3;
    private static final int CLUSTER_WARNING_PERCENT = 75;

    public List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels) {
        List<AnalyzedTrajectory> preAnalyzedTrajectories = trajectoryModels.stream()
                .map(AnalyzedTrajectory::fromTrajectory)
                .toList();

        List<AnalyzedCoordinate> analyzedCoordinates = preAnalyzedTrajectories.stream().flatMap(t -> t.getCoordinates().stream()).toList();

        // Кластеризация координат
        DBSCANClusterer<AnalyzedCoordinate> dbscan = new DBSCANClusterer<>(CLUSTER_RADIUS_KM, 2, GeographicCoordinatesDistance.measure);
        List<Cluster<AnalyzedCoordinate>> clusters = dbscan.cluster(analyzedCoordinates);

        System.out.println("Количество кластеров до фильтрации " + clusters.size());
        //TODO: Вынести hook в отельный метод фильтрацию, и сделать  Analyzer Абстрактным вынести туда этот метод
        // Количество траекторий для того чтобы считать что превышен порог.
        clusters = clusters.stream().filter(cluster -> {
            long countOfUniqClusterTrajectories = cluster.getPoints().stream()
                    .collect(Collectors.groupingBy(AnalyzedCoordinate::getTrajectoryId))
                    .values()
                    .stream()
                    .flatMap(group -> group.stream().limit(1))
                    .count();

            return countOfUniqClusterTrajectories >= CLUSTER_CRITICAL_TRAJECTORIES_COUNT * 100 / CLUSTER_WARNING_PERCENT;
        }).toList();
        System.out.println("Количество кластеров после фильтрации " + clusters.size());

        List<AnalyzedTrajectory> trajectories = new ArrayList<>();

        // Пометка координат цветом
        int i = 1;
        for (Cluster<AnalyzedCoordinate> cluster : clusters) {
            System.out.println(STR."Кластер \{i} : \{cluster.getPoints().size()}");
            i++;

            System.out.println(cluster.getPoints());
            System.out.println("=====");

            int clusterSize = cluster.getPoints().size();
            for (AnalyzedCoordinate point : cluster.getPoints()) {
                if (clusterSize >= CLUSTER_CRITICAL_TRAJECTORIES_COUNT) {
                    point.setIntensity(AnalyzedCoordinate.AnalyzedCoordinateIntensity.HIGH);
                } else {
                    point.setIntensity(AnalyzedCoordinate.AnalyzedCoordinateIntensity.MEDIUM);
                }
            }
        }

        System.out.println("Результат");
        System.out.println(preAnalyzedTrajectories);

        return preAnalyzedTrajectories;
    }
}