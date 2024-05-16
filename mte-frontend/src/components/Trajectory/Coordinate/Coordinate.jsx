import React from 'react';
import classes from "./Coordinate.module.css";
import {Circle, CircleMarker, Marker, Popup} from "react-leaflet";

const Coordinate = ({lat, lon}) => {

    return (
        <CircleMarker center={[lat, lon]} radius={2}
                      pathOptions={{
                          color: "red",
                          className: classes.Coordinate
                      }}
        >
        </CircleMarker>
    );
};

export default Coordinate;