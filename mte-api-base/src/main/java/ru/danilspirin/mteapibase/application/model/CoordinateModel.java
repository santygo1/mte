package ru.danilspirin.mteapibase.application.model;

public record CoordinateModel(
        double lat,
        double lon,
        String timestamp,
        double speed,
        double heading
) {
    @Override
    public String toString() {
        return "Coordinate{" +
                "lat=" + lat +
                ", lon=" + lon +
                ", timestamp='" + timestamp + '\'' +
                ", speed=" + speed +
                ", heading=" + heading +
                '}';
    }
}
