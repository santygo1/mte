import React, {useState} from 'react';
import {Hotline} from "react-leaflet-hotline";

const HotlineTrajectory = ({coordinates, onClick}) => {
    const [options, setOptions] = useState({
        weight: 3
    });

    return (
        <Hotline
            data={coordinates}
            getLat={t => t.lat}
            getLng={t => t.lon}
            getVal={t => t.intensity}
            options={options}
            eventHandlers={{
                click: onClick,
                mouseover: (e, i, p) => setOptions({
                    outlineWidth: 10,
                    outline: "black"
                }),
                mouseout: (e, i, p) => setOptions({weight: 3})
            }}
        />
    );
};

export default HotlineTrajectory;