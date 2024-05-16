import React, {useState} from 'react';
import {Polyline} from "react-leaflet";

const TrajectoryPolyline = ({trajectory, onClick, pathOptions, onFocus, onBlur}) => {

    return (
        <Polyline
            positions={trajectory.coordinates}
            pathOptions={pathOptions}
            eventHandlers={{
                click: onClick,
                mouseover: onFocus,
                mouseout: onBlur
            }}
        >
        </Polyline>
    );
};

export default TrajectoryPolyline;