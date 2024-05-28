import React, {useEffect, useRef, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, TileLayer} from "react-leaflet";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import useFetch from "../../hooks/useFetch.js";
import Trajectory from "../../components/Trajectory/Trajectory.jsx";
import TrajectoryInfoOffcanvas from "../../components/Trajectory/TrajectoryInfoOffcanvas/TrajectoryInfoOffcanvas.jsx";
import EditableTrajectory from "../../components/Trajectory/EditableTrajectory/EditableTrajectory.jsx";

const TrajectoryStates = {
    VIEW: 0,
    EDIT: 1
};


const Map = () => {
    const [trajectories, setTrajectories] = useState([]);
    const [currentTrajectory, setCurrentTrajectory] = useState(null);
    const [currentTrajectoryState, setCurrentTrajectoryState] = useState(TrajectoryStates.VIEW);

    const mapRef = useRef(null);

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


    // Переводит траекторию в фокус при изменении
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;
        if (currentTrajectoryState !== TrajectoryStates.EDIT) return;

        const bounds = L.latLngBounds(currentTrajectory.coordinates);
        map.flyToBounds(bounds, {
            duration: 1, // Длительность анимации в секундах
            easeLinearity: 0.5 // Линейность анимации (0 = без линейности, 1 = полная линейность)
        });

    }, [currentTrajectoryState]);

    return (
        <>
            <MapContainer ref={mapRef} className={classes.Map} center={[43.0678, 131.893]} zoom={13}>
                <TileLayer continuousWorld={true} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {/*Если текущая траектория изменяется выводим траекторию для измения если не изменяется, выводим все траектории*/}
                {currentTrajectory !== null && currentTrajectoryState === TrajectoryStates.EDIT ?
                    <EditableTrajectory trajectoryObj={currentTrajectory} mapRef={mapRef}/> :
                    trajectories.map((t) =>
                        <Trajectory
                            key={t.trajectoryId}
                            trajectoryObj={t}
                            setCurrentTrajectory={setCurrentTrajectory}
                            isCurrentTrajectory={isCurrentTrajectory(t)}
                        />
                    )
                }

                <TrajectoryInfoOffcanvas
                    trajectory={currentTrajectory}
                    onClose={() => {
                        setCurrentTrajectory(null);
                        setCurrentTrajectoryState(TrajectoryStates.VIEW)
                    }}
                    onEditClick={() => {
                        setCurrentTrajectoryState(TrajectoryStates.EDIT);
                    }}
                />

            </MapContainer>
        </>
    );
};


export default Map;