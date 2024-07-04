import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    mode: null,
    setEditMode: () => SystemErrorLogger.methodNotImplemented('MapContext', 'setEditMode'),
    setViewMode: () => SystemErrorLogger.methodNotImplemented('MapContext', 'setViewMode'),
    isEditMode: false,
    isViewMode: false,
});