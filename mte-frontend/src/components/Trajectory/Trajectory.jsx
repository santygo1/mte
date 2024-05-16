import React, {useContext, useState} from 'react';
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
    console.log("Перерисовал " + trajectoryObj.trajectoryId);
    const [focus, setFocus] = useState(false);

    function handleChangeShowInfo() {
        if (mapContext.currentTrajectory !== null && mapContext.currentTrajectory.trajectoryId === trajectoryObj.trajectoryId) {
            mapContext.setCurrentTrajectory(null);
        } else {
            mapContext.setCurrentTrajectory(trajectoryObj);
        }
    }

    let trajectoryOptions = DEFAULT_TRAJECTORY_OPTIONS;
    if (!mapContext.isCurrentTrajectory(trajectoryObj)) {
        if (focus) { // Если траектория находится в фокусе
            trajectoryOptions = {...trajectoryOptions, weight: ONFOCUS_TRAJECTORY_WEIGHT};
        }
    } else {
        trajectoryOptions = HIGHLIGHTED_TRAJECTORY_OPTIONS;
    }

    return (
        <>
            <TrajectoryPolyline
                trajectory={trajectoryObj}
                onClick={handleChangeShowInfo}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                pathOptions={trajectoryOptions}
            />

            {/*Выводим координаты если траектория находится в фокусе на карте */}
            {mapContext.isCurrentTrajectory(trajectoryObj) && <TrajectorySkeleton trajectory={trajectoryObj}/>}
        </>
    );
};

export default Trajectory;