import React from 'react';
import Coordinate from "../Coordinate/Coordinate.jsx";

const TrajectorySkeleton = ({trajectory}) => {

    return (
        trajectory.coordinates.map((c) =>
            <Coordinate lat={c.lat} lon={c.lon} key={"coord-" + trajectory.trajectoryId + ":" + c.lat + "-" + c.lon}/>)
    );
};

export default TrajectorySkeleton;