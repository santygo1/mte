import React, {useEffect, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, Polyline, TileLayer} from "react-leaflet";

const Map = () => {
    const [trajectory, setTrajectory] = useState([]);

    useEffect(() => {
        //TODO: Поменять моковый запрос данных траектории с сервера

        setTrajectory([
            [43.0014,132.039],
            [43.0074,132.031],
            [43.0124,132.02],
            [43.0168,132.01],
            [43.021,131.999],
            [43.0254,131.989],
            [43.0299,131.979],
            [43.0344,131.969],
            [43.0384,131.96],
            [43.042,131.953],
            [43.0455,131.945],
            [43.0489,131.937],
            [43.0524,131.928],
            [43.0558,131.921],
            [43.0589,131.913],
            [43.0613,131.908],
            [43.0629,131.904],
            [43.0646,131.9],
            [43.0668,131.894],
            [43.0721,131.88],
            [43.0749,131.873],
            [43.0799,131.871],
            [43.0853,131.872],
            [43.0907,131.874],
            [43.0955,131.877],
            [43.099,131.88],
            [43.0992,131.882],
            [43.0993,131.882]
        ]);
    }, []);

    return (
        <MapContainer className={ classes.Map} center={[43.0014,132.039]} zoom={13} >
            <TileLayer
                continuousWorld={true}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {trajectory && (
                <Polyline positions={trajectory} color="blue" weight={5}/>
            )}
        </MapContainer>
    );
};


export default Map;