package ru.danilspirin.mteapibase.application.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.apache.commons.math3.ml.clustering.Clusterable;

import static java.lang.StringTemplate.STR;


@FieldDefaults(level = AccessLevel.PRIVATE)
@Getter
public class AnalyzedCoordinate implements Clusterable {

    @Getter
    public enum AnalyzedCoordinateIntensity {
        HIGH("red"),
        MEDIUM("orange"),
        LOW("green");

        final String color;
        AnalyzedCoordinateIntensity(String color){
            this.color = color;
        }
    }

    private String trajectoryId;

    private double lat;
    private double lon;

    @Setter
    private AnalyzedCoordinateIntensity intensity = AnalyzedCoordinateIntensity.LOW;

    private AnalyzedCoordinate() {
    }

    protected static AnalyzedCoordinate fromCoordinate(String trajectoryId, CoordinateModel model) {
        AnalyzedCoordinate analyzedCoordinate = new AnalyzedCoordinate();
        analyzedCoordinate.lat = model.lat();
        analyzedCoordinate.lon = model.lon();
        analyzedCoordinate.trajectoryId = trajectoryId;
        return analyzedCoordinate;
    }

    @Override
    public String toString() {
        return STR."""
                [\{lat}, \{lon}] - \{trajectoryId}
                """;
    }

    @Override
    public double[] getPoint() {
        return new double[]{lat, lon};
    }
}
