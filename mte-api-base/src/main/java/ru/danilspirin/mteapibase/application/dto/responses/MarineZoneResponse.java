package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;

import java.util.List;

@Data
public class MarineZoneResponse {

    String marineZoneId;
    String name;
    List<PolygonCoordinate> polygon;

}
