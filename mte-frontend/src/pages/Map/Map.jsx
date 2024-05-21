import React, {useEffect, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, TileLayer} from "react-leaflet";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import useFetch from "../../hooks/useFetch.js";
import Trajectory from "../../components/Trajectory/Trajectory.jsx";
import TrajectoryInfoOffcanvas from "../../components/Trajectory/TrajectoryInfoOffcanvas/TrajectoryInfoOffcanvas.jsx";

const Map = () => {
    const [trajectories, setTrajectories] = useState([]);
    const [currentTrajectory, setCurrentTrajectory] = useState(null);

    function currentTrajectoryExists() {
        return currentTrajectory !== null;
    }

    function isCurrentTrajectory(trajectory) {
        return currentTrajectoryExists() && trajectory !== null ?
            currentTrajectory.trajectoryId === trajectory.trajectoryId :
            false;
    }


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
            <MapContainer className={classes.Map} center={[43.0678, 131.893]} zoom={13}>
                <TileLayer continuousWorld={true} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {trajectories.map((t) => <Trajectory
                    key={t.trajectoryId}
                    trajectoryObj={t}
                    setCurrentTrajectory={setCurrentTrajectory}
                    isCurrentTrajectory={isCurrentTrajectory(t)}
                />)}

                <TrajectoryInfoOffcanvas
                    currentTrajectory={currentTrajectory}
                    setCurrentTrajectory={setCurrentTrajectory}
                />
            </MapContainer>
        </>
    );
};


export default Map;