package ru.danilspirin.mteapibase.application.dto.requests;

import lombok.Data;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;

import java.util.List;

@Data
public class MarineZoneRequest {
    String name;
    List<PolygonCoordinate> polygon;
}
