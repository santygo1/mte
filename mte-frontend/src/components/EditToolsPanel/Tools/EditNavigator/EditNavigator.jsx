import {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import EditTrajectoryContext from "../../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";

const EditNavigator = () => {
    const {
        editableTrajectory,
        goToNextState,
        goToPreviousState,
        hasNextState,
        hasPreviousState,
    } = useContext(EditTrajectoryContext);

    const {isEditMode} = useContext(MapContext);

    return (
        (isEditMode && editableTrajectory !== null) &&
        <>
            <ToolButton
                overlayText={"Перейти к предыдущему изменению"}
                onClick={goToPreviousState}
                disabled={!hasPreviousState}
            ><FontAwesomeIcon icon={faAngleLeft}/></ToolButton>

            <ToolButton
                overlayText={"Перейти к следующему изменению"}
                onClick={goToNextState}
                disabled={!hasNextState}
            ><FontAwesomeIcon icon={faAngleRight}/></ToolButton>
        </>
    )
}

export default EditNavigator;