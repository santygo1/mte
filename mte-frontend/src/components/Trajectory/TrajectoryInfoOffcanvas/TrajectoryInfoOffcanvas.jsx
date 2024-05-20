import React, {useContext} from 'react';
import classes from "./TrajectoryInfoOffcanvas.module.css";
import {Offcanvas, Table} from "react-bootstrap";
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
                <Offcanvas.Title>Маршрут</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Table>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>{mapContext.currentTrajectory.trajectoryId}</td>
                    </tr>
                    <tr>
                        <td>Судно</td>
                        <td>{mapContext.currentTrajectory.vesselId}</td>
                    </tr>
                    <tr>
                        <td>Порт(из)</td>
                        <td>{mapContext.currentTrajectory.from}</td>
                    </tr>
                    <tr>
                        <td>Режим карты</td>
                        <td>{mapContext.mode}</td>
                    </tr>
                    <tr>
                        <td>Порт(назначение)</td>
                        <td>{mapContext.currentTrajectory.to}</td>
                    </tr>
                    </tbody>
                </Table>


                <h6>Судно</h6>
                {/*<Table>*/}
                {/*    <tbody>*/}
                {/*    <tr>*/}
                {/*        <td>Название</td>*/}
                {/*        <td>{vessel.vesselId}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Порт</td>*/}
                {/*        <td>{vessel.port}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Флаг</td>*/}
                {/*        <td>{vessel.flag}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Тип</td>*/}
                {/*        <td>{vessel.type}</td>*/}
                {/*    </tr>*/}

                {/*    <tr>*/}
                {/*        <td>Длина</td>*/}
                {/*        <td>{vessel.length}</td>*/}
                {/*    </tr>*/}

                {/*    <tr>*/}
                {/*        <td>MMSI</td>*/}
                {/*        <td>{vessel}</td>*/}
                {/*    </tr>*/}

                {/*    </tbody>*/}
                {/*</Table>*/}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default TrajectoryInfoOffcanvas;