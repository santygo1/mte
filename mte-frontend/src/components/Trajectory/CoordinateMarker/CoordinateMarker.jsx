import {Marker} from "react-leaflet";
import {forwardRef} from "react";
import classes from "./CoordinateMarker.module.css";

const CoordinateMarker = forwardRef((props, ref) => {
    let className = classes.DefaultCoordinateIcon;
    if (props.className) {
        className += " " + props.className;
    }

    return <Marker ref={ref} icon={L.divIcon({className: className})} {...props} />
});
export default CoordinateMarker;