package ru.danilspirin.mteapibase.application.model.vessel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("vessel")
@Getter
@Setter
public class VesselModel {

    @JsonProperty(required = false)
    @Id
    String vesselId;

    String mmsi;

    String name;

    String flag;

    int type;

    int length;

    String port;

    public String getStringType() {
        return VesselTypes.vesselTypes.get(type);
    }
}
