package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers;

import ru.danilspirin.mteapibase.application.model.AnalyzedCoordinate;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.TrajectoryModel;

import java.util.List;

public class TrafficAnalyzer implements Analyzer {
    @Override
    public List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels) {
        List<AnalyzedTrajectory> analyzedTrajectories = trajectoryModels.stream()
                .map(AnalyzedTrajectory::fromTrajectory)
                .toList();

        analyzedTrajectories.forEach(t -> t.getCoordinates().forEach(c -> c.setIntensity(AnalyzedCoordinate.AnalyzedCoordinateIntensity.MEDIUM)));
        return analyzedTrajectories;
    }
}
