package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import ru.danilspirin.mteapibase.application.model.TrajectoryModel;

import java.util.List;

public class TrafficAnalyzer implements Analyzer{
    @Override
    public List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels) {
        return List.of();
    }
}
