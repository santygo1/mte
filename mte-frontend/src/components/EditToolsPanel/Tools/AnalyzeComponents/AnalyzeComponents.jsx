import {useContext} from "react";
import MapContext from "../../../../contexts/MapContext/MapContext.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import AnalyzeTrajectoryContext from "../../../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContext.js";
import {Spinner} from "react-bootstrap";

const AnalyzeComponents = () => {

    const {isViewMode} = useContext(MapContext);
    const {doMainAreaAnalyze, isAnalyzeProcessing} = useContext(AnalyzeTrajectoryContext);

    return (isViewMode && <>
        <ToolButton
            overlayText={"Анализ"}
            onClick={doMainAreaAnalyze}
            disabled={isAnalyzeProcessing}
        >
            {
                isAnalyzeProcessing ?
                    <Spinner animation="grow" variant={"primary"} size={"sm"}/> :
                    <FontAwesomeIcon icon={faChartPie}/>
            }
        </ToolButton>
    </>);
}

export default AnalyzeComponents;