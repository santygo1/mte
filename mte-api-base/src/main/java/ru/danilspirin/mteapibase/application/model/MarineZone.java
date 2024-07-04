package ru.danilspirin.mteapibase.application.model;


import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.mapping.Document;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;

import java.util.List;

@Document("marineZone")
@CompoundIndex(name = "coordinates_idx", def = "{'polygon.lon': 1, 'polygon.lat': 1}")
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@ToString
public class MarineZone {

    @Id
    String marineZoneId;
    String name;
    List<PolygonCoordinate> polygon;
}
