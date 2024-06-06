import React, {memo, useRef} from 'react';
import CoordinateMarker from "./CoordinateMarker/CoordinateMarker.jsx";
import classes from "./Coordinate.module.css";

const Coordinate = memo(({lat, lon, onDragEnd, onDragging, draggable = false}) => {
    const markerRef = useRef(null);

    function onMarkerDrag(callback) {
        const marker = markerRef.current
        if (marker != null) {
            callback(marker.getLatLng());
        }
    }

    let className = null;
    if (draggable) {
        className = classes.draggable;
    }

    return (
        <CoordinateMarker position={[lat, lon]}
                          draggable={draggable}
                          radius={2}
                          eventHandlers={{
                              dragend: () => onMarkerDrag(onDragEnd),
                              drag: () => onMarkerDrag(onDragging)
                          }}
                          className={className}
                          ref={markerRef}>
        </CoordinateMarker>
    );
});

export default Coordinate;