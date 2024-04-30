import React, {useEffect, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, Polyline, TileLayer} from "react-leaflet";

const Map = () => {
    const [trajectories, setTrajectories] = useState([]);

    const [trajectory, setTrajectory] = useState([]);

    useEffect(() => {
        //TODO: Поменять моковый запрос данных траектории с сервера
        fetch("/api/v1/map/trajectories?lonFrom=-180&lonTo=180&latFrom=-90&latTo=90",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            .then((data) => data.json())
            .then((data) => {
                const tr = data.map(t => [t.coordinates.map(c => [c.lat, c.lon])]);
                console.log(tr)
                setTrajectory(tr);
            });
    }, []);

    return (
        <MapContainer className={classes.Map} center={[43.0678, 131.893]} zoom={13}>
            <TileLayer
                continuousWorld={true}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {trajectory && (
                <Polyline positions={trajectory} color="blue" weight={1}/>
            )}
            {trajectories.map((t, key) =>
                <Polyline key={key} positions={t.coordinates} color="blue" weight={1}/>
            )}
        </MapContainer>
    );
};


export default Map;