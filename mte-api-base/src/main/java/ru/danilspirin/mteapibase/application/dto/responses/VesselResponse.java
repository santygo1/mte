package ru.danilspirin.mteapibase.application.dto.responses;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class VesselResponse {
    @Id
    String vesselId;

    String mmsi;

    String name;

    String flag;

    int type;

    String stringType;

    int length;

    String port;
}
