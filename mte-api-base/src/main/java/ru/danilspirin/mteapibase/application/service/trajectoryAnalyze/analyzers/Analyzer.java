package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze.analyzers;

import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.TrajectoryModel;

import java.util.List;

public interface Analyzer {

    List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels);
}
