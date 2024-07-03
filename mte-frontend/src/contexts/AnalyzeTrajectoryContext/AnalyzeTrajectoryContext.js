import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    isAnalyzeEnable: false,
    isAnalyzeProcessing: false,
    analyzeResult: null,
    getTrajectoryAnalyze: null,
    doAnalyze: () => (params) => SystemErrorLogger.methodNotImplemented('AnalyzeTrajectoryContext', 'doMainAreaAnalyze'),
});