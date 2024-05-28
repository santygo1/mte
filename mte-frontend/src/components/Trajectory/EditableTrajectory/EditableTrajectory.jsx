import React, {memo, useRef, useState} from "react";
import {Marker, Polyline} from "react-leaflet";
import L from 'leaflet';
import Util from "../../../util/Util.js";
import {EDIT_TRAJECTORY_HINT_OPTIONS, EDIT_TRAJECTORY_TRACK_OPTIONS} from "../../../util/TrajectoryOptions.js";

const EditableTrajectory = ({trajectoryObj, mapRef}) => {
    const [trajectory, setTrajectory] = useState(Util.objectDeepCopy(trajectoryObj));
    const trackRef = useRef(null);

    function updateCoordinate(coordinateIndex, newCoord) {
        console.log(newCoord)
        setTrajectory({
            ...trajectory, coordinates:
                trajectory.coordinates.map((c, i) => i === coordinateIndex ? {
                    ...c,
                    lat: newCoord.lat,
                    lon: newCoord.lng
                } : c)
        });
        deleteTrack();
    }

    // отрисовывает изменненную часть траектории при перемещении координаты
    function printTrack(currentCoordinateIndex, newCoord) {
        const map = mapRef.current;
        if (!map) return;

        // Координаты участка, участок строится между
        // перемещенной координатой и ее исходными соседними координатами
        const coordinates = [newCoord];
        if (currentCoordinateIndex > 0) coordinates.unshift(trajectory.coordinates[currentCoordinateIndex - 1]);
        if (currentCoordinateIndex < trajectory.coordinates.length - 1) coordinates.push(trajectory.coordinates[currentCoordinateIndex + 1]);

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
            <TrajectoryHint trajectory={trajectoryObj}/>
            <Polyline positions={trajectory.coordinates}/>
            {trajectory.coordinates.map((c, i) =>
                <EditableCoordinate
                    key={"editable-coord-" + trajectory.trajectoryId + ":" + c.lat + "-" + c.lon}
                    lat={c.lat}
                    lon={c.lon}
                    onDragEnd={(lat, lon) => updateCoordinate(i, lat, lon)}
                    onDragging={(lat, lon) => printTrack(i, lat, lon)}
                />)}
        </>
    );
}

const EditableCoordinate = memo(({lat, lon, onDragEnd, onDragging}) => {
    const markerRef = useRef(null);

    function onMarkerDrag(callback) {
        const marker = markerRef.current
        if (marker != null) {
            callback(marker.getLatLng());
        }
    }

    return (
        <Marker position={[lat, lon]}
                draggable={true}
                eventHandlers={{
                    dragend: () => onMarkerDrag(onDragEnd),
                    drag: () => onMarkerDrag(onDragging)
                }}
                ref={markerRef}>
        </Marker>
    );
});


const TrajectoryHint = memo(({trajectory}) => {
    return (<Polyline positions={trajectory.coordinates} pathOptions={EDIT_TRAJECTORY_HINT_OPTIONS}/>);
});


export default EditableTrajectory;