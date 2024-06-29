import {useContext, useEffect, useState} from "react";
import TrajectoryContext from "./TrajectoryContext.js";
import useFetch from "../../hooks/useFetch.js";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import MapContext from "../MapContext/MapContext.js";

const TrajectoryContextProvider = ({children}) => {

    const [currentTrajectory, setCurrentTrajectory] = useState(null);
    const [trajectories, setTrajectories] = useState([]);
    const {isViewMode} = useContext(MapContext);

    const [fetchTrajectories, isTrajectoriesLoading, trajectoriesError] = useFetch(
        async () => {
            const fetch = await TrajectoryService.getAll();
            setTrajectories(fetch);
        }
    );
    useEffect(() => {
        if (isViewMode) {
            fetchTrajectories()
        }
    }, [isViewMode]);

    useEffect(() => {
        if (currentTrajectory !== null) {
            setCurrentTrajectory(trajectories.filter((i) => i.trajectoryId === currentTrajectory.trajectoryId)[0]);
        }
    }, [trajectories]);

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
            trajectories: trajectories,
            isCurrentTrajectory: isCurrentTrajectory,
            currentTrajectoryExists: currentTrajectoryExists
        }}>{children}</TrajectoryContext.Provider>
    );
};
export default TrajectoryContextProvider;