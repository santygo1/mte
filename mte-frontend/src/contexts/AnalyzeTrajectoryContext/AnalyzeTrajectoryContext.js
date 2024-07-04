import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    isAnalyzeEnable: false,
    disableAnalyze: () => (params) => SystemErrorLogger.methodNotImplemented('AnalyzeTrajectoryContext', 'disableAnalyze'),
    isAnalyzeProcessing: false,
    analyzeResult: null,
    getTrajectoryAnalyze: null,
    params: null,
    setParams: (params) => SystemErrorLogger.methodNotImplemented('AnalyzeTrajectoryContext', 'setParams'),
    doAnalyze: () => (params) => SystemErrorLogger.methodNotImplemented('AnalyzeTrajectoryContext', 'doMainAreaAnalyze'),
});