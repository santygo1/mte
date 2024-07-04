import {useContext, useState} from "react";
import EditTrajectoryContext from "../../../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExport} from "@fortawesome/free-solid-svg-icons";
import ExportFileModal from "./ExportFileModal.jsx";
import TrajectoryContext from "../../../../contexts/TrajectoryContext/TrajectoryContext.js";

const ExportTool = () => {
    const {canEdit} = useContext(EditTrajectoryContext);
    const [showModal, setShowModal] = useState(false);

    const {trajectories} = useContext(TrajectoryContext);


    return (
        trajectories !== null && trajectories.length > 0 &&
        <>
            <ToolButton
                overlayText={"Экспорт данных траекторий"}
                onClick={() => setShowModal(true)}
                disabled={!canEdit}
            ><FontAwesomeIcon icon={faFileExport}/></ToolButton>
            <ExportFileModal show={showModal} setShow={setShowModal}/>
        </>
    )
}
export default ExportTool;