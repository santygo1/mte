package ru.danilspirin.mteapibase.application.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CheckCoordinateRequest {

    @NotNull
    @JsonProperty(required = true)
    Double lat;

    @NotNull
    @JsonProperty(required = true)
    Double lon;

    @NotNull
    @JsonProperty(required = true)
    String timestamp;

    @NotNull
    @JsonProperty(required = true)
    Double speed;

    @NotNull
    @JsonProperty(required = true)
    Double heading;
}