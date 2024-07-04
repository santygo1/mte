package ru.danilspirin.mteapibase.application.model.trajectory;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.apache.commons.math3.ml.clustering.Clusterable;
import ru.danilspirin.mteapibase.application.utils.TimeUtil;

import java.sql.Timestamp;


@FieldDefaults(level = AccessLevel.PRIVATE)
public class AnalyzedCoordinate implements Clusterable {

    @Getter
    private String trajectoryId;
    @Getter
    private double lat;
    @Getter
    private double lon;

    @Getter
    private Timestamp timestamp;

    //переменные участвующие в расчете интенсивности координаты
    @Getter
    @Setter
    private int intensityCount = 0;
    @Getter
    @Setter
    private int maxCount = 0;


    AnalyzedCoordinate(double lat, double lon, String trajectoryId, Timestamp timestamp) {
        this.lat = lat;
        this.lon = lon;
        this.trajectoryId = trajectoryId;
        this.timestamp = timestamp;
    }


    protected static AnalyzedCoordinate fromCoordinate(String trajectoryId, CoordinateModel model) {
        return new AnalyzedCoordinate(
                model.lat(),
                model.lon(),
                trajectoryId,
                TimeUtil.fromStringToTimestamp(model.timestamp()
                ));
    }


    public double getIntensity() {
        if (maxCount == 0) return 0;
        return (double) intensityCount / maxCount;
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

    public long getTimestampInMillis() {
        return timestamp.getTime();
    }

}
