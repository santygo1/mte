import React, {memo, useRef} from 'react';
import Coordinate from "./Coordinate/Coordinate.jsx";
import {Polyline} from "react-leaflet";
import {
    DEFAULT_TRAJECTORY_OPTIONS,
    HIGHLIGHTED_TRAJECTORY_OPTIONS,
    ONFOCUS_TRAJECTORY_WEIGHT
} from "../../util/TrajectoryOptions.js";

const Trajectory = memo(function Trajectory({
                                                trajectoryObj,
                                                isCurrentTrajectory,
                                                setCurrentTrajectory
                                            }) {

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

    console.log(`rerender ${trajectoryObj.trajectoryId} at ${new Date().toLocaleTimeString()}`);
    return (
        <>
            <Polyline
                ref={polylineRef}
                positions={trajectoryObj.coordinates}
                pathOptions={trajectoryOptions}
                eventHandlers={{
                    click: () => setCurrentTrajectory(trajectoryObj),
                    mouseover: () => onHover(true),
                    mouseout: () => onHover(false)
                }}
            >
            </Polyline>
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