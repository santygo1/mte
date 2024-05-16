import React, {useContext, useEffect, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, TileLayer} from "react-leaflet";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import useFetch from "../../hooks/useFetch.js";
import Trajectory from "../../components/Trajectory/Trajectory.jsx";
import TrajectoryInfoOffcanvas from "../../components/Trajectory/TrajectoryInfoOffcanvas/TrajectoryInfoOffcanvas.jsx";
import TrajectoryMapProvider from "../../contexts/TrajectoryMapContext/TrajectoryMapProvider.jsx";
import TrajectoryMapContext from "../../contexts/TrajectoryMapContext/TrajectoryMapContext.jsx";

const Map = () => {

    const mapContext = useContext(TrajectoryMapContext);

    const [trajectories, setTrajectories] = useState([]);
    const [fetchTrajectories, isTrajectoriesLoading, trajectoriesError] = useFetch(
        async () => {
            const fetch = await TrajectoryService.getAll();
            setTrajectories(fetch);
        }
    );

    useEffect(() => {
        fetchTrajectories();
    }, []);

    return (
        <>
            <TrajectoryMapProvider>
                <MapContainer className={classes.Map} center={[43.0678, 131.893]} zoom={13}>
                    <TileLayer continuousWorld={true} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    {trajectories.map((t) => <Trajectory key={t.trajectoryId} trajectoryObj={t}/>)}

                    <TrajectoryInfoOffcanvas/>
                </MapContainer>
            </TrajectoryMapProvider>
        </>
    );
};


export default Map;