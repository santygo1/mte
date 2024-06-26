import React, {memo, useRef} from 'react';
import CoordinateMarker from "./CoordinateMarker/CoordinateMarker.jsx";
import classes from "./Coordinate.module.css";
import {Popup} from "react-leaflet";

const Coordinate = memo(({lat, lon, onDragEnd, onDragging, draggable = false}) => {
    const markerRef = useRef(null);
    const popupRef = useRef(null);

    function onMarkerDrag(callback) {
        const marker = markerRef.current;

        if (marker != null) {
            updatePopupContent();
            marker.openPopup(marker.getLatLng()); // Обновляем координаты
            callback(marker.getLatLng());
        }
    }

    function updatePopupContent() {
        const popup = popupRef.current;
        if (popup) {
            popup.setContent(currentDraggableCoordinate());
        }
    }

    const currentDraggableCoordinate = () => {
        const marker = markerRef.current
        if (marker != null) {
            const {lat, lng} = marker.getLatLng();
            return `${lat.toFixed(4)}°, ${lng.toFixed(4)}°`;
        }
        return "";
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
                              drag: () => onMarkerDrag(onDragging),
                              click: () => updatePopupContent()
                          }}
                          className={className}
                          ref={markerRef}>
            {
                draggable &&
                <Popup ref={popupRef}></Popup>
            }
        </CoordinateMarker>
    );
});

export default Coordinate;