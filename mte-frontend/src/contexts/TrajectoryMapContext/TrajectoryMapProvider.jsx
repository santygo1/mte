import {useState} from "react";
import TrajectoryMapContext from "./TrajectoryMapContext.jsx";

const TrajectoryMapProvider = ({children}) => {
    const [currentTrajectory, setCurrentTrajectory] = useState(null);

    function currentTrajectoryExists() {
        return currentTrajectory !== null;
    }

    function isCurrentTrajectory(trajectory) {
        return currentTrajectoryExists() && trajectory !== null ?
            currentTrajectory.trajectoryId === trajectory.trajectoryId :
            false;
    }


    return (
        <TrajectoryMapContext.Provider
            value={{currentTrajectory, setCurrentTrajectory, currentTrajectoryExists, isCurrentTrajectory}}>
            {children}
        </TrajectoryMapContext.Provider>
    );
};

export default TrajectoryMapProvider;