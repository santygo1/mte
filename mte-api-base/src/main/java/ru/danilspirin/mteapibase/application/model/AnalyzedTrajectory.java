package ru.danilspirin.mteapibase.application.model;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class AnalyzedTrajectory {

    private String trajectoryId;
    private List<AnalyzedCoordinate> coordinates;

    private AnalyzedTrajectory() {

    }

    public AnalyzedTrajectory(String trajectoryId, List<AnalyzedCoordinate> coordinates){
        this.trajectoryId = trajectoryId;
        this.coordinates = coordinates;
    }

    public static AnalyzedTrajectory fromTrajectory(TrajectoryModel model) {
        AnalyzedTrajectory analyzedTrajectory = new AnalyzedTrajectory();
        analyzedTrajectory.trajectoryId = model.getTrajectoryId();
        analyzedTrajectory.coordinates = model.getCoordinates().stream()
                .map((t) -> AnalyzedCoordinate.fromCoordinate(analyzedTrajectory.trajectoryId, t)).
                toList();

        return analyzedTrajectory;
    }
}
