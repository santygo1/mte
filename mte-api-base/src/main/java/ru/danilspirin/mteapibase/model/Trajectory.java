package ru.danilspirin.mteapibase.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("trajectory")
@CompoundIndex(name = "coordinates_idx", def = "{'coordinates.lon': 1, 'coordinates.lat': 1}")
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Trajectory {
    public class Builder {
        private Builder() {
        }

        public Builder vesselId(String vesselId) {
            Trajectory.this.setVesselId(vesselId);
            return this;
        }

        public Builder from(String from) {
            Trajectory.this.setFrom(from);
            return this;
        }

        public Builder to(String to) {
            Trajectory.this.setTo(to);
            return this;
        }

        public Builder setCoordinates(List<Coordinate> coordinates) {
            Trajectory.this.setCoordinates(coordinates);
            return this;
        }

        public Trajectory build() {
            return Trajectory.this;
        }
    }

    @Id
    String trajectoryId;

    String vesselId;

    String from;

    String to;

    List<Coordinate> coordinates;

    private Trajectory() {}

    public static Builder newBuilder() {
        return new Trajectory().new Builder();
    }

    @Override
    public String toString() {
        return "Trajectory{" +
                "trajectoryId='" + trajectoryId + '\'' +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", coordinates=" + coordinates +
                '}';
    }

}

