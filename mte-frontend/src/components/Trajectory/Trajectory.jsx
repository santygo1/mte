import React, {memo, useContext, useRef} from 'react';
import Coordinate from "./Coordinate/Coordinate.jsx";
import {Polyline} from "react-leaflet";
import {
    DEFAULT_TRAJECTORY_OPTIONS,
    HIGHLIGHTED_TRAJECTORY_OPTIONS,
    ONFOCUS_TRAJECTORY_WEIGHT
} from "../../util/TrajectoryOptions.js";
import AnalyzeTrajectoryContext from "../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContext.js";
import SegmentedPolyline from "./GradientPolyline/SegmentedPolyline.jsx";

const Trajectory = memo(function Trajectory({
                                                trajectoryObj,
                                                isCurrentTrajectory,
                                                setCurrentTrajectory
                                            }) {

    const {isAnalyzeEnable} = useContext(AnalyzeTrajectoryContext);

    // В зависимости от выбрана траектория или нет устанавливаем определенные стили отображения
    let trajectoryOptions = DEFAULT_TRAJECTORY_OPTIONS;
    if (isCurrentTrajectory) {
        trajectoryOptions = HIGHLIGHTED_TRAJECTORY_OPTIONS;
    }

    const polylineRef = useRef();

    // Устанавливаем фокус, если траектория не является текущей выбранной траекторией
    // Функция использует useRef, что предотвращает перерендер
    function onHover(isHover) {
        if (!isCurrentTrajectory) {
            const polyline = polylineRef.current;
            if (!polyline) return;

            if (isHover) {
                polyline.setStyle({weight: ONFOCUS_TRAJECTORY_WEIGHT});
            } else {
                polyline.setStyle(trajectoryOptions)
            }
        }
    }

    return (
        <>
            {
                isAnalyzeEnable ?
                    <SegmentedPolyline coordinates={trajectoryObj.coordinates}/> :

                    <Polyline
                        ref={polylineRef}
                        positions={trajectoryObj.coordinates}
                        pathOptions={trajectoryOptions}
                        eventHandlers={{
                            click: () => setCurrentTrajectory(trajectoryObj),
                            mouseover: () => onHover(true),
                            mouseout: () => onHover(false)
                        }}
                    />
            }

            {isCurrentTrajectory && trajectoryObj.coordinates.map((c) =>
                <Coordinate
                    key={"coord-" + trajectoryObj.trajectoryId + ":" + c.lat + "-" + c.lon}
                    lat={c.lat}
                    lon={c.lon}
                />)}
        </>
    );
});

export default Trajectory;