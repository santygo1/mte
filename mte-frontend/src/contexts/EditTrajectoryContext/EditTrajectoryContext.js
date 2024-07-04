import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    editableTrajectory: null,
    setEditableTrajectory: () => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'setEditableTrajectory'),
    changeCoordinate: (coordinatePosition, newCoordinate) => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'setEditableTrajectory'),
    goToPreviousState: () => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'setEditableTrajectory'),
    goToNextState: () => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'setEditableTrajectory'),
    hasNextState: false,
    hasPreviousState: false,
    hasChanges: false,

    closeEdit: () => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'closeEdit'),

    needSave: false,
    isSaving: false,
    saveChanges: () => SystemErrorLogger.methodNotImplemented('EditTrajectoryContext', 'saveChanges'),
    canEdit: false
});