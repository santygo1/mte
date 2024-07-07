import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    currentTrajectory: null,
    trajectories: null,
    fetchTrajectory: () => SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'setCurrentTrajectory'),
    setCurrentTrajectory: () => SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'setCurrentTrajectory'),
    setTrajectories: () => SystemErrorLogger.methodNotImplemented("TrajectoryContext", "setTrajectories"),
    isTrajectoriesLoading: false,

    isCurrentTrajectory: (trajectory) => {
        SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'isCurrentTrajectory');
        return false;
    },
    currentTrajectoryExists: () => {
        SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'currentTrajectoryExists');
        return false;
    }
});