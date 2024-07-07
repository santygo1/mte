package ru.danilspirin.mteapibase.application.dto.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TrajectoryCreateRequest {

    @JsonProperty(required = false)
    String trajectoryId;

    @NotNull
    @JsonProperty(required = true)
    String vesselId;

    @NotNull
    @JsonProperty(required = true)
    String from;

    @NotNull
    @JsonProperty(required = true)
    String to;

    @NotNull
    @JsonProperty(required = true)
    @Valid List<CoordinateRequest> coordinates;
}
