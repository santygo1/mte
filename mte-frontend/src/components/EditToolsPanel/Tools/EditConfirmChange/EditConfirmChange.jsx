import {useContext, useState} from "react";
import EditTrajectoryContext from "../../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import ToolDelimiter from "../components/ToolDelimiter/ToolDelimiter.jsx";
import Confirmation from "../../../Confirmation/Confirmation.jsx";
import {Spinner} from "react-bootstrap";


const EditConfirmChange = () => {
    const {
        editableTrajectory,
        needSave,
        saveChanges,
        closeEdit,
        isSaving,
        canEdit: notCheckingCoordinate
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

    function onExitClick() {
        if (isSaving) return;

        if (needSave || !notCheckingCoordinate) {
            setShowCancelConfirmation(true);
        } else {
            exit();
        }
    }

    return (
        (isEditMode && editableTrajectory !== null) &&
        <>
            <ToolDelimiter/>
            <ToolButton
                overlayText={"Сохранить изменения"}
                onClick={save}
                disabled={!needSave || isSaving}
            >
                {isSaving ?
                    <Spinner animation="grow" variant={"primary"} size={"sm"}/>
                    :
                    <FontAwesomeIcon icon={faFloppyDisk}/>
                }
            </ToolButton>

            <ToolDelimiter/>

            <ToolButton
                overlayText={"Выйти из режима редактирования"}
                onClick={onExitClick}
                disabled={isSaving}
            >
                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            </ToolButton>

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