import {useContext, useState} from "react";
import EditTrajectoryContext from "../../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import ToolDelimiter from "../components/ToolDelimiter/ToolDelimiter.jsx";
import Confirmation from "../../../Confirmation/Confirmation.jsx";


const EditConfirmChange = () => {
    const {
        editableTrajectory,
        needSave,
        saveChanges,
        closeEdit
    } = useContext(EditTrajectoryContext);

    const {isEditMode} = useContext(MapContext);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    function save() {
        saveChanges();
    }

    function exit() {
        setShowCancelConfirmation(false);
        closeEdit();
    }

    return (
        (isEditMode && editableTrajectory !== null) &&
        <>
            <ToolDelimiter/>
            <ToolButton
                overlayText={"Сохранить изменения"}
                onClick={save}
                disabled={!needSave}
            ><FontAwesomeIcon icon={faFloppyDisk}/></ToolButton>
            <ToolDelimiter/>
            <ToolButton
                overlayText={"Выйти из режима редактирования"}
                onClick={() => setShowCancelConfirmation(true)}
            ><FontAwesomeIcon icon={faArrowRightFromBracket}/></ToolButton>
            {
                showCancelConfirmation &&
                <Confirmation
                    onClickCancel={() => setShowCancelConfirmation(false)}
                    onClickConfirm={exit}
                    title={"Выход из режима редактирования"}
                    text={"Все несохраненные изменения будут утеряны!"}
                ></Confirmation>
            }
        </>
    )
}

export default EditConfirmChange;