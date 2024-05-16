import React, {useContext} from 'react';
import classes from "./TrajectoryInfoOffcanvas.module.css";
import {Offcanvas} from "react-bootstrap";
import TrajectoryMapContext from "../../../contexts/TrajectoryMapContext/TrajectoryMapContext.jsx";

const TrajectoryInfoOffcanvas = () => {

    const mapContext = useContext(TrajectoryMapContext);

    const showCurrentTrajectoryInfo = mapContext.currentTrajectoryExists();

    return (
        showCurrentTrajectoryInfo &&
        <Offcanvas show={showCurrentTrajectoryInfo}
                   onHide={() => mapContext.setCurrentTrajectory(null)}
                   backdrop={false}
                   scroll={true}
                   placement={'end'}
                   className={classes.TrajectoryInfoOffcanvas}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{mapContext.currentTrajectory.trajectoryId}</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default TrajectoryInfoOffcanvas;