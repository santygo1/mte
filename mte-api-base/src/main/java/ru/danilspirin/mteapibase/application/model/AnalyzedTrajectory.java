package ru.danilspirin.mteapibase.application.model;

import lombok.Getter;
import lombok.ToString;
import org.apache.commons.math3.analysis.interpolation.SplineInterpolator;
import org.apache.commons.math3.analysis.polynomials.PolynomialSplineFunction;
import ru.danilspirin.mteapibase.application.utils.GeographicCoordinatesDistance;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
public class AnalyzedTrajectory {

    private String trajectoryId;
    private List<AnalyzedCoordinate> coordinates;

    private AnalyzedTrajectory() {
    }

    public static AnalyzedTrajectory fromTrajectory(TrajectoryModel model) {
        AnalyzedTrajectory analyzedTrajectory = new AnalyzedTrajectory();
        analyzedTrajectory.trajectoryId = model.getTrajectoryId();
        analyzedTrajectory.coordinates = model.getCoordinates().stream()
                .map((t) -> AnalyzedCoordinate.fromCoordinate(analyzedTrajectory.trajectoryId, t)).
                toList();

        return analyzedTrajectory;
    }

    public AnalyzedTrajectory interpolate(int interpolationPoints) {
        List<AnalyzedCoordinate> coordinates = this.getCoordinates();

        if (coordinates.size() <= 1) {
            return this;
        }

        // Вычисляем длину дуги для каждого сегмента
        double[] arcLengths = new double[coordinates.size()];
        arcLengths[0] = 0;
        for (int i = 1; i < coordinates.size(); i++) {
            AnalyzedCoordinate coord1 = coordinates.get(i-1);
            AnalyzedCoordinate coord2 = coordinates.get(i);
            arcLengths[i] = arcLengths[i - 1] +
                    GeographicCoordinatesDistance.getDistanceInKilometers(coord1.getLat(), coord1.getLon(), coord2.getLat(), coord2.getLon());
        }

        // Преобразуем координаты в массивы для Apache Math
        double[] xValues = arcLengths; //  Теперь X - это суммарная длина дуги
        double[] latitudes = coordinates.stream().mapToDouble(AnalyzedCoordinate::getLat).toArray();
        double[] longitudes = coordinates.stream().mapToDouble(AnalyzedCoordinate::getLon).toArray();

        // Создаем интерполятор сплайнов
        SplineInterpolator interpolator = new SplineInterpolator();

        // Выполняем интерполяцию для широт и долгот
        PolynomialSplineFunction latitudeSpline = interpolator.interpolate(xValues, latitudes);
        PolynomialSplineFunction longitudeSpline = interpolator.interpolate(xValues, longitudes);

        // Генерируем интерполированные координаты
        List<AnalyzedCoordinate> interpolatedCoordinates = new ArrayList<>();
        double totalArcLength = arcLengths[arcLengths.length - 1];
        for (int i = 0; i < interpolationPoints; i++) {
            double x = totalArcLength * i / (interpolationPoints - 1); //  Рассчитываем X для каждой точки
            double interpolatedLatitude = latitudeSpline.value(x);
            double interpolatedLongitude = longitudeSpline.value(x);

            interpolatedCoordinates.add(new AnalyzedCoordinate(interpolatedLatitude, interpolatedLongitude, this.trajectoryId));
        }

        this.coordinates = interpolatedCoordinates;
        return this;
    }

}
