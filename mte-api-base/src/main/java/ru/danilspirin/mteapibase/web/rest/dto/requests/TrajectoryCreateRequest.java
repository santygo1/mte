package ru.danilspirin.mteapibase.web.rest.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class TrajectoryCreateRequest {

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
