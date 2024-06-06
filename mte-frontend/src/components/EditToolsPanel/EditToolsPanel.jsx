import {useContext} from "react";
import MapContext from "../../contexts/MapContext/MapContext.js";
import TrajectoryContext from "../../contexts/TrajectoryContext/TrajectoryContext.js";
import classes from "./EditToolsPanel.module.css";
import {tools} from "./ToolsRegister.jsx";

const EditToolsPanel = () => {
    const {mode, setViewMode, setEditMode, isEditMode} = useContext(MapContext);
    const {
        currentTrajectory,
        setCurrentTrajectory,
        isCurrentTrajectory,
        currentTrajectoryExists
    } = useContext(TrajectoryContext);

    return (
        <div className={classes.EditToolsPanel + " hud-element"}>
            {tools.map((t, i) => {
                return (
                    <>
                        {t}
                    </>
                )
            })}
        </div>
    );
}

export default EditToolsPanel;