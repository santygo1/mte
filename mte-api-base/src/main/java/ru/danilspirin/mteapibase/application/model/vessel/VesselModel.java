package ru.danilspirin.mteapibase.application.model.vessel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("vessel")
@Getter
@Setter
@JsonIgnoreProperties("vesselId")
public class VesselModel {

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
