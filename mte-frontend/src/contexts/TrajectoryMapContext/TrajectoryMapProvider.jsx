import {useState} from "react";
import TrajectoryMapContext, {MAP_MODE} from "./TrajectoryMapContext.jsx";

const TrajectoryMapProvider = ({children}) => {
    const [currentTrajectory, setCurrentTrajectory] = useState(null);
    const [mapMode, setMapMode] = useState(MAP_MODE.VIEW);

    function currentTrajectoryExists() {
        return currentTrajectory !== null;
    }

    function isCurrentTrajectory(trajectory) {
        return currentTrajectoryExists() && trajectory !== null ?
            currentTrajectory.trajectoryId === trajectory.trajectoryId :
            false;
    }

    function setViewMode() {
        setMapMode(MAP_MODE.VIEW);
    }

    function setEditMode() {
        setMapMode(MAP_MODE.EDIT);
    }


    return (
        <TrajectoryMapContext.Provider
            value={{
                mapMode,
                currentTrajectory,
                setViewMode,
                setEditMode,
                setCurrentTrajectory,
                currentTrajectoryExists,
                isCurrentTrajectory,
            }}>
            {children}
        </TrajectoryMapContext.Provider>
    );
};

export default TrajectoryMapProvider;