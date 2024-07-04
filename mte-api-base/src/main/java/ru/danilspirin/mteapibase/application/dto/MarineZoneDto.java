package ru.danilspirin.mteapibase.application.dto;

import lombok.Data;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;

import java.util.List;

@Data
public class MarineZoneDto {
    String marineZoneId;
    String name;
    List<PolygonCoordinate> polygon;
}
