import {useState} from "react";
import TrajectoryContext from "./TrajectoryContext.js";

const TrajectoryContextProvider = ({children}) => {

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
        <TrajectoryContext.Provider value={{
            currentTrajectory: currentTrajectory,
            setCurrentTrajectory: setCurrentTrajectory,
            isCurrentTrajectory: isCurrentTrajectory,
            currentTrajectoryExists: currentTrajectoryExists
        }}>{children}</TrajectoryContext.Provider>
    );
};
export default TrajectoryContextProvider;