import {useContext, useState} from "react";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import AnalyzeTrajectoryContext from "../../../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContext.js";
import {Button, Spinner} from "react-bootstrap";
import classes from "./../components/ToolButton/CancelButton.module.css"
import AnalyzeParametersForm from "./AnalyzeParametersForm/AnalyzeParametersForm.jsx";
import TrajectoryContext from "../../../../contexts/TrajectoryContext/TrajectoryContext.js";

const AnalyzeComponents = () => {

    const {isViewMode} = useContext(MapContext);
    const {trajectories} = useContext(TrajectoryContext);
    const {isAnalyzeProcessing, isAnalyzeEnable, disableAnalyze} = useContext(AnalyzeTrajectoryContext);
    const [showFormParam, setShowFormParam] = useState();

    function cancel(e) {
        e.stopPropagation();
        disableAnalyze();
    }

    function showSettings() {
        setShowFormParam(true);
    }


    return (
        (isViewMode && trajectories !== null && trajectories.length > 0) && <>
            <ToolButton
                className={classes.ButtonWrapper}
                overlayText={"Анализ"}
                onClick={showSettings}
                disabled={isAnalyzeProcessing}
            >
                {
                    isAnalyzeProcessing ?
                        <Spinner animation="grow" variant={"primary"} size={"sm"}/> :
                        <FontAwesomeIcon icon={faChartPie}/>
                }
                {
                    isAnalyzeEnable &&
                    <button className={classes.CancelButton} onClick={cancel}>X</button>
                }
            </ToolButton>

            <AnalyzeParametersForm state={showFormParam} setState={setShowFormParam}/>
        </>);
}

export default AnalyzeComponents;