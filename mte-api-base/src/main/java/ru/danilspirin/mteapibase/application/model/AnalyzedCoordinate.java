package ru.danilspirin.mteapibase.application.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.apache.commons.math3.ml.clustering.Clusterable;


@FieldDefaults(level = AccessLevel.PRIVATE)
public class AnalyzedCoordinate implements Clusterable {

    @Getter
    private String trajectoryId;
    @Getter
    private double lat;
    @Getter
    private double lon;

    //переменные участвующие в расчете интенсивности координаты
    private double intensitySum = 0;
    private double intensityCount = 0;


    AnalyzedCoordinate(double lat, double lon, String trajectoryId) {
        this.lat = lat;
        this.lon = lon;
        this.trajectoryId = trajectoryId;
    }


    protected static AnalyzedCoordinate fromCoordinate(String trajectoryId, CoordinateModel model) {
        AnalyzedCoordinate analyzedCoordinate = new AnalyzedCoordinate(model.lat(), model.lon(), trajectoryId);
        analyzedCoordinate.lat = model.lat();
        analyzedCoordinate.lon = model.lon();
        analyzedCoordinate.trajectoryId = trajectoryId;

        return analyzedCoordinate;
    }

    public void addIntensityValue(double intensityValue) {
        intensitySum += intensityValue;
        intensityCount++;
    }

    public double getIntensity() {
        if (intensityCount == 0) return 0;
        return intensitySum / intensityCount;
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
