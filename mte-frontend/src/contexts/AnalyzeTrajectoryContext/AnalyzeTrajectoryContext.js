import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    isAnalyzeEnable: false,
    isAnalyzeProcessing: false,
    doMainAreaAnalyze: () => (coordinatePosition, newCoordinate) => SystemErrorLogger.methodNotImplemented('AnalyzeTrajectoryContext', 'doMainAreaAnalyze'),
});