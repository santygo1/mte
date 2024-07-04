package ru.danilspirin.mteapibase.application.service.fileExport;

import ru.danilspirin.mteapibase.application.model.trajectory.CoordinateModel;
import ru.danilspirin.mteapibase.application.model.vessel.VesselModel;

import java.util.HashMap;

public class ResultEntity {


    String flag;
    String vesselId;
    String mmsi;
    int length;
    String port;
    String vesselName;
    int vesselType;
    String vesselTypeString;
    double lat;
    double lon;
    String timestamp;
    double heading;
    double speed;


    ResultEntity(VesselModel vesselModel, CoordinateModel coordinateModel){
        this.flag = vesselModel.getFlag();
        this.vesselId = vesselModel.getVesselId();
        this.mmsi = vesselModel.getMmsi();
        this.length = vesselModel.getLength();
        this.port = vesselModel.getPort();
        this.vesselName = vesselModel.getName();
        this.vesselType = vesselModel.getType();
        this.vesselTypeString = vesselModel.getStringType();
        this.lat = coordinateModel.lat();
        this.lon = coordinateModel.lon();
        this.timestamp = coordinateModel.timestamp();
        this.heading = coordinateModel.heading();
        this.speed = coordinateModel.speed();
    }

    HashMap<String, Object> getValuesMap(){
        return new HashMap<>(){{
            put("flag",flag);
            put("vesselId",vesselId);
            put("mmsi",mmsi);
            put("length",length);
            put("port",port);
            put("vesselName",vesselName);
            put("vesselType",vesselType);
            put("vesselTypeString",vesselTypeString);
            put("lat",lat);
            put("lon",lon);
            put("timestamp",timestamp);
            put("heading",heading);
            put("speed",speed);
        }};
    }
}
