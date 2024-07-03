package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import ru.danilspirin.mteapibase.application.model.trajectory.AnalyzedCoordinate;
import ru.danilspirin.mteapibase.application.model.trajectory.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.trajectory.TrajectoryModel;

import java.util.List;
import java.util.function.Predicate;

public interface Analyzer {

    List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels);

    Analyzer withCoordinateFilter(Predicate<AnalyzedCoordinate> coordinatePredicate);

}
