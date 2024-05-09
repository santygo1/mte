package ru.danilspirin.mteapibase.application.model;

import lombok.*;
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
@Builder
@ToString
public class TrajectoryModel {

    @Id
    String trajectoryId;

    String vesselId;

    String from;

    String to;

    @ToString.Exclude
    List<CoordinateModel> coordinates;

}

