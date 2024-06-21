import classes from "./EditToolsPanel.module.css";
import {tools} from "./ToolsRegister.jsx";

const EditToolsPanel = () => {

    return (
        <div className={classes.EditToolsPanel + " hud-element"}>
            {tools.map((t) => t)}
        </div>
    );
}

export default EditToolsPanel;