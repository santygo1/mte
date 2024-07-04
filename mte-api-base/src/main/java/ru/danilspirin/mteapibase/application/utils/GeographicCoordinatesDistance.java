package ru.danilspirin.mteapibase.application.utils;

import org.apache.commons.math3.ml.distance.DistanceMeasure;

public class GeographicCoordinatesDistance {

    private static final double EARTH_RADIUS_KM = 6371.0;

    public static double getDistanceInKilometers(double lat1, double lon1, double lat2, double lon2){
        double lat1Rad = Math.toRadians(lat1);
        double lat2Rad = Math.toRadians(lat2);
        double lon1Rad = Math.toRadians(lon1);
        double lon2Rad = Math.toRadians(lon2);

        double a = Math.sin((lat2Rad - lat1Rad) / 2) * Math.sin((lat2Rad - lat1Rad) / 2)
                + Math.cos(lat1Rad) * Math.cos(lat2Rad)
                * Math.sin((lon2Rad - lon1Rad) / 2) * Math.sin((lon2Rad - lon1Rad) / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return EARTH_RADIUS_KM * c;
    }



}
