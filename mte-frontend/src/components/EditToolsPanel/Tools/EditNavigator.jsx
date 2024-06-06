import {useContext} from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faXmark} from "@fortawesome/free-solid-svg-icons";
import TrajectoryContext from "../../../contexts/TrajectoryContext/TrajectoryContext.js";
import MapContext from "../../../contexts/MapContext/MapContext.js";

const EditNavigator = () => {
    const {currentTrajectory} = useContext(TrajectoryContext);
    const {isEditMode} = useContext(MapContext);

    return (
        (isEditMode && currentTrajectory !== null) &&
        <>
            <Button><FontAwesomeIcon icon={faAngleLeft}/></Button>
            <Button><FontAwesomeIcon icon={faAngleRight}/></Button>
            <Button><FontAwesomeIcon icon={faXmark}/></Button>
        </>
    )
}

export default EditNavigator;