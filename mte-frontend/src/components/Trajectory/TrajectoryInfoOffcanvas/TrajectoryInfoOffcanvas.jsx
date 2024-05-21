import React from 'react';
import classes from "./TrajectoryInfoOffcanvas.module.css";
import {Offcanvas, Table} from "react-bootstrap";

const TrajectoryInfoOffcanvas = ({currentTrajectory, setCurrentTrajectory}) => {

    return (
        currentTrajectory !== null &&
        <Offcanvas show={true}
                   onHide={() => setCurrentTrajectory(null)}
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
                        <td>{currentTrajectory.trajectoryId}</td>
                    </tr>
                    <tr>
                        <td>Судно</td>
                        <td>{currentTrajectory.vesselId}</td>
                    </tr>
                    </tbody>
                </Table>

                <h6>Маршрут</h6>
                <Table>
                    <tbody>
                    <tr>
                        <td>Отправление</td>
                        <td>{currentTrajectory.from}</td>
                    </tr>
                    <tr>
                        <td>Назначение</td>
                        <td>{currentTrajectory.to}</td>
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