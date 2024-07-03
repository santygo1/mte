import React, {useContext, useEffect, useRef, useState} from 'react';
import classes from "./Map.module.css";
import {MapContainer, TileLayer} from "react-leaflet";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import useFetch from "../../hooks/useFetch.js";
import Trajectory from "../Trajectory/Trajectory.jsx";
import EditableTrajectory from "../Trajectory/EditableTrajectory/EditableTrajectory.jsx";
import MapContext from "../../contexts/MapContext/MapContext.js";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";
import TrajectoryContext from "../../contexts/TrajectoryContext/TrajectoryContext.js";
import AnalyzedTrajectoryPolyline from "../Trajectory/GradientPolyline/AnalyzedTrajectoryPolyline.jsx";
import HotlinePolyline from "../Trajectory/GradientPolyline/AnalyzedTrajectoryPolyline.jsx";
import AnalyzeTrajectoryContext from "../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContext.js";

const Map = () => {
    const mapRef = useRef(null);
    const {mode, setViewMode, setEditMode, isEditMode, isViewMode} = useContext(MapContext);
    const {
        currentTrajectory,
        setCurrentTrajectory,
        isCurrentTrajectory,
        trajectories
    } = useContext(TrajectoryContext);


    const tileRef = useRef();
    // Переводит траекторию в фокус при изменении
    useEffect(function flyToCurrentTrajectoryWhenEdit() {
        const map = mapRef.current;
        if (!map) return;
        if (!isEditMode) return;

        const bounds = L.latLngBounds(currentTrajectory.coordinates);
        map.flyToBounds(bounds, {
            duration: 1, // Длительность анимации в секундах
            easeLinearity: 0.5, // Линейность анимации (0 = без линейности, 1 = полная линейность)
            paddingTopLeft: [444, 0], // TODO: Исправить хардкод(нужен потому что при появлении траектории открывается offcanvas, 444 - ширина панели кнопок + ширина offcanvas)
        });
    }, [mode]);


    useEffect(function changeTileClassName() {
        const tilePane = document.querySelector(".leaflet-pane .leaflet-tile-pane");
        if (tilePane) {
            if (isEditMode) {
                tilePane.classList.add(classes.GrayFilter);
            } else {
                tilePane.classList.remove(classes.GrayFilter);
            }
        } else {
            SystemErrorLogger.UnknownException("Map", "changeTileClassName", "не удалось определить TilePane")
        }
    }, [mode]);


    return (
        <>
            <MapContainer ref={mapRef} className={classes.Map} center={[43.0678, 131.893]} zoom={13}>
                <TileLayer ref={tileRef} continuousWorld={true}
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


                {isEditMode ?
                    <EditableTrajectory trajectoryBeforeEdit={currentTrajectory} mapRef={mapRef}/> :
                    trajectories.map((t) =>
                        <Trajectory
                            key={t.trajectoryId}
                            trajectoryObj={t}
                            setCurrentTrajectory={setCurrentTrajectory}
                            isCurrentTrajectory={isCurrentTrajectory(t)}
                        />
                    )
                }

            </MapContainer>
        </>
    );
};


export default Map;