import {Marker} from "react-leaflet";
import {forwardRef} from "react";
import classes from "./CoordinateMarker.module.css";

const CoordinateMarker = forwardRef((props, ref) => {
    let className = classes.DefaultCoordinateIcon;
    const newprops = {...props};
    if (newprops.className) {
        className += " " + newprops.className;
        newprops.className = null;
    }

    return <Marker ref={ref} icon={L.divIcon({className: className})} {...props} />
});
export default CoordinateMarker;