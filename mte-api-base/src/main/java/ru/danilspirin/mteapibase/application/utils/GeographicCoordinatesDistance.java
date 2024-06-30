package ru.danilspirin.mteapibase.application.utils;

import org.apache.commons.math3.exception.DimensionMismatchException;
import org.apache.commons.math3.ml.distance.DistanceMeasure;

public class GeographicCoordinatesDistance {

    private static final double EARTH_RADIUS_KM = 6371.0;

    public static final DistanceMeasure measure =
            (doubles, doubles1) -> getDistanceInKilometers(doubles[0], doubles[1], doubles1[0], doubles[1]);

    public static double getDistanceInKilometers(double lat1, double lon1, double lat2, double lon2){
        double lat1Rad = Math.toRadians(lat1);
        double lat2Rad = Math.toRadians(lat2);
        double lon1Rad = Math.toRadians(lon1);
        double lon2Rad = Math.toRadians(lon2);

        double x = (lon2Rad - lon1Rad) * Math.cos((lat1Rad + lat2Rad) / 2);
        double y = (lat2Rad - lat1Rad);

        return Math.sqrt(x * x + y * y) * EARTH_RADIUS_KM;
    }



}
