import {useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import EditTrajectoryContext from "../../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import Confirmation from "../../../Confirmation/Confirmation.jsx";


const DeleteAllTrajectoryChangeButton = () => {

    const {hasChanges, clearChanges} = useContext(EditTrajectoryContext);
    const [confirmationPreferences, setConfirmationPreferences] = useState({
        showConfirmation: false,
        askAgain: true,
    });

    function showConfirmation() {
        setConfirmationPreferences({
            ...confirmationPreferences,
            showConfirmation: true,
        });
    }

    function hideConfirmation() {
        setConfirmationPreferences({
            ...confirmationPreferences,
            showConfirmation: false
        });
    }

    function onClickDelete() {
        if (confirmationPreferences.askAgain) {
            showConfirmation();
        } else {
            clearChanges();
        }
    }

    function onClickCancel() {
        console.log(confirmationPreferences.askAgain)
        if (!confirmationPreferences.askAgain) {
            setConfirmationPreferences({
                ...confirmationPreferences,
                showConfirmation: false,
                askAgain: true
            })
        } else {
            hideConfirmation();
        }
    }

    function onConfirmDelete() {
        clearChanges();
        hideConfirmation();
    }

    function changeAskAgainFlag(value) {
        setConfirmationPreferences({
            ...confirmationPreferences,
            askAgain: value
        });
    }

    return (
        <>
            <ToolButton
                overlayText={"Отменить все изменения"}
                onClick={onClickDelete}
                disabled={!hasChanges}
            ><FontAwesomeIcon icon={faTrash}/></ToolButton>

            {
                confirmationPreferences.showConfirmation &&
                <Confirmation
                    onClickCancel={onClickCancel}
                    onClickConfirm={onConfirmDelete}
                    title={"Отмена изменений"}
                    text={"Все внесенные изменения траектории будут удалены!"}
                    footerElemtns
                >
                    <Form.Check type={"checkbox"}>
                        <Form.Check.Input
                            type="checkbox"
                            onChange={(e) => changeAskAgainFlag(e.target.checked)}
                            checked={confirmationPreferences.askAgain}
                        /><Form.Check.Label>
                        Спрашивать для этой траектории
                    </Form.Check.Label></Form.Check>
                </Confirmation>
            }
        </>
    );
}

const EditNavigator = () => {
    const {
        editableTrajectory,
        goToNextState,
        goToPreviousState,
        hasNextState,
        hasPreviousState,
    } = useContext(EditTrajectoryContext);

    const {isEditMode} = useContext(MapContext);

    function onClickCancel() {

    }

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

            <DeleteAllTrajectoryChangeButton/>

            <Button><FontAwesomeIcon icon={faXmark} onClick={onClickCancel}/></Button>
        </>
    )
}

export default EditNavigator;