package ru.danilspirin.mteapibase.application.service.trajectoryAnalyze;

import ru.danilspirin.mteapibase.application.model.AnalyzedCoordinate;
import ru.danilspirin.mteapibase.application.model.AnalyzedTrajectory;
import ru.danilspirin.mteapibase.application.model.TrajectoryModel;

import java.util.List;
import java.util.function.Predicate;

public interface Analyzer {

    List<AnalyzedTrajectory> analyze(List<TrajectoryModel> trajectoryModels);

    Analyzer withCoordinateFilter(Predicate<AnalyzedCoordinate> coordinatePredicate);

}
