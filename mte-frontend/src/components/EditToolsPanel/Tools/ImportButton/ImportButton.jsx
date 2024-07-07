import React, {useContext, useEffect, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import useFetch from "../../../../hooks/useFetch.js";
import ImportService from "../../../../api/service/ImportService.js";
import TrajectoryContext from "../../../../contexts/TrajectoryContext/TrajectoryContext.js";
import ToolButton from "../components/ToolButton/ToolButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faFileImport} from "@fortawesome/free-solid-svg-icons";

const ImportButton = () => {

    const {trajectories, fetchTrajectory, isTrajectoriesLoading} = useContext(TrajectoryContext);


    const [importData, isLoading, error] = useFetch(
        async () => {
            await ImportService.importData();
            await fetchTrajectory();
        }
    );


    function runTest() {
        importData();
    }

    return (
        (trajectories === null || trajectories.length === 0) &&

        <ToolButton
            overlayText={"Импорт тестовых траекторий"}
            disabled={isLoading || isTrajectoriesLoading}
            onClick={runTest}>
            {
                isLoading ?
                    <Spinner animation="grow" variant={"primary"} size={"sm"}/> :
                    <FontAwesomeIcon icon={faFileImport}/>
            }
        </ToolButton>
    );
};

export default ImportButton;