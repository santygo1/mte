import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    currentTrajectory: null,
    trajectories: null,
    setCurrentTrajectory: () => SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'setCurrentTrajectory'),
    isCurrentTrajectory: (trajectory) => {
        SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'isCurrentTrajectory');
        return false;
    },
    currentTrajectoryExists: () => {
        SystemErrorLogger.methodNotImplemented('TrajectoryContext', 'currentTrajectoryExists');
        return false;
    }
});