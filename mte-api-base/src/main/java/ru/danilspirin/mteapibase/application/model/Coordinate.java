package ru.danilspirin.mteapibase.application.model;

public record Coordinate(double lat, double lon, String timestamp, double speed,
                         double heading) implements Comparable<Coordinate> {
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

    @Override
    public int compareTo(Coordinate o) {
        // TODO: Проверка по времени???
        if (this.lat == o.lat && this.lon == o.lon) {
            return 0;
        }

        if (this.lat == o.lat) {
            return Double.compare(this.lon, o.lon);
        } else {
            return Double.compare(this.lat, o.lat);
        }
    }
}
