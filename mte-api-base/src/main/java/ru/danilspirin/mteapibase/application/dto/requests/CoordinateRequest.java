package ru.danilspirin.mteapibase.application.dto.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@JsonIgnoreProperties(value = "color")
public class CoordinateRequest {

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
