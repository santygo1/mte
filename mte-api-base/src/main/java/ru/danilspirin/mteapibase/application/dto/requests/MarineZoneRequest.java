package ru.danilspirin.mteapibase.application.dto.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import ru.danilspirin.mteapibase.application.model.records.PolygonCoordinate;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MarineZoneRequest {

    @JsonProperty(required = false)
    String marineZoneId;

    @JsonProperty(required = true)
    String name;

    List<PolygonCoordinate> polygon;
}
