import React, {Fragment, useMemo, useContext, useState} from 'react';
import TrajectorySkeleton from "./TrajectorySkeleton/TrajectorySkeleton.jsx";
import TrajectoryPolyline from "./TrajectoryPolyline/TrajectoryPolyline.jsx";
import TrajectoryMapContext from "../../contexts/TrajectoryMapContext/TrajectoryMapContext.jsx";

// Настройки отображения pathOptions для
const DEFAULT_TRAJECTORY_OPTIONS = {
    color: "blue",
    weight: 2
};
const HIGHLIGHTED_TRAJECTORY_OPTIONS = {...DEFAULT_TRAJECTORY_OPTIONS, color: "red"};

const ONFOCUS_TRAJECTORY_WEIGHT = 4; // ширина траектории при ее фокусе;

const Trajectory = ({trajectoryObj}) => {

    const mapContext = useContext(TrajectoryMapContext);

    const contextValue = useMemo(() => ({
        ...mapContext,
        isCurrentTrajectory: mapContext.isCurrentTrajectory(trajectoryObj),
    }), [mapContext, trajectoryObj]);

    const [focus, setFocus] = useState(false);
    
    let trajectoryOptions = DEFAULT_TRAJECTORY_OPTIONS;
    if (!contextValue.isCurrentTrajectory) {
        if (focus) { // Если траектория находится в фокусе
            trajectoryOptions = {...trajectoryOptions, weight: ONFOCUS_TRAJECTORY_WEIGHT};
        }
    } else {
        trajectoryOptions = HIGHLIGHTED_TRAJECTORY_OPTIONS;
    }

    return (
        <>
            {console.log(`Рендер: ${trajectoryObj.trajectoryId}`)}
            <TrajectoryPolyline
                key={trajectoryObj.trajectoryId}
                trajectory={trajectoryObj}
                onClick={() => contextValue.setCurrentTrajectory(trajectoryObj)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                pathOptions={trajectoryOptions}
            />
            {contextValue.isCurrentTrajectory && <TrajectorySkeleton trajectory={trajectoryObj}/>}
        </>
    );
};

export default Trajectory;