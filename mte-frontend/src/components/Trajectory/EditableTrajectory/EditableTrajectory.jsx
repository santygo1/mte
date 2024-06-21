import React, {memo, useContext, useRef} from "react";
import {Polyline} from "react-leaflet";
import L from 'leaflet';
import {EDIT_TRAJECTORY_HINT_OPTIONS, EDIT_TRAJECTORY_TRACK_OPTIONS} from "../../../util/TrajectoryOptions.js";
import Coordinate from "../Coordinate/Coordinate.jsx";
import EditTrajectoryContext from "../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";

const EditableTrajectory = ({trajectoryBeforeEdit, mapRef}) => {
    const {editableTrajectory, changeCoordinate} = useContext(EditTrajectoryContext);
    const trackRef = useRef(null);

    function updateCoordinate(coordinateIndex, newCoord) {
        changeCoordinate(coordinateIndex, newCoord);
        deleteTrack();
    }

    // отрисовывает изменненную часть траектории при перемещении координаты
    function printTrack(currentCoordinateIndex, newCoord) {
        const map = mapRef.current;
        if (!map) return;

        // Координаты участка, участок строится между
        // перемещенной координатой и ее соседними координатами
        const coordinates = [newCoord];
        if (currentCoordinateIndex > 0) coordinates.unshift(editableTrajectory.coordinates[currentCoordinateIndex - 1]);
        if (currentCoordinateIndex < editableTrajectory.coordinates.length - 1) coordinates.push(editableTrajectory.coordinates[currentCoordinateIndex + 1]);

        deleteTrack();

        trackRef.current = L.polyline(
            coordinates,
            EDIT_TRAJECTORY_TRACK_OPTIONS);
        trackRef.current.addTo(map);
    }

    function deleteTrack() {
        if (trackRef.current && mapRef.current) {
            trackRef.current.removeFrom(mapRef.current);
            trackRef.current = null;
        }
    }

    return (
        <>
            <TrajectoryHint trajectory={trajectoryBeforeEdit}/>
            <Polyline positions={editableTrajectory.coordinates}/>
            {editableTrajectory.coordinates.map((c, i) =>
                <Coordinate
                    key={"editable-coord-" + editableTrajectory.trajectoryId + ":" + c.lat + "-" + c.lon}
                    lat={c.lat}
                    lon={c.lon}
                    onDragEnd={(lat, lon) => updateCoordinate(i, lat, lon)}
                    onDragging={(lat, lon) => printTrack(i, lat, lon)}
                    draggable={true}
                />)}
        </>
    );
}

const TrajectoryHint = memo(({trajectory}) => {
    return (<Polyline positions={trajectory.coordinates} pathOptions={EDIT_TRAJECTORY_HINT_OPTIONS}/>);
});


export default EditableTrajectory;