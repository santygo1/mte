import {useContext, useEffect, useRef, useState} from 'react';
import classes from "./MapSidebar.module.css";
import TrajectoryContext from "../../contexts/TrajectoryContext/TrajectoryContext.js";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {faCaretLeft, faCaretRight, faClose, faLocation, faMap} from "@fortawesome/free-solid-svg-icons";
import CircleButton from "../CircleButton/CircleButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CSSTransition} from "react-transition-group";
import MapContext from "../../contexts/MapContext/MapContext.js";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";
import InformationBlock from "./InformationBlock/InformationBlock.jsx";
import EditTrajectoryContext from "../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";

const MapSidebar = ({children}) => {

    const {currentTrajectoryExists} = useContext(TrajectoryContext);

    return (
        <div className={classes.MapSidebar + " hud-element"}>
            <div className={classes.ButtonsPanel}>
                {children}
            </div>
            {(currentTrajectoryExists() && <TrajectoryOffcanvas/>)}
        </div>
    );
};

const TrajectoryOffcanvas = () => {
    const {currentTrajectory, currentTrajectoryExists} = useContext(TrajectoryContext);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (currentTrajectoryExists()) {
            setVisible(true);
        }
    }, [currentTrajectory]);

    const offcanvasRef = useRef();

    function switchHide() {
        setVisible(!visible);
    }


    const overlay =
        <Tooltip style={{position: "fixed"}}>
            {!visible ? "Показать информацию" : "Скрыть информацию"}
        </Tooltip>;


    return (
        <div className={classes.OffcanvasWrapper}>
            <CSSTransition
                in={visible}
                timeout={500}
                classNames={{
                    enterActive: classes.OffcanvasEntering,
                    exit: classes.OffcanvasExiting,
                    exitDone: classes.OffcanvasExited
                }}
                mountOnEnter
            >
                <div className={classes.Offcanvas} ref={offcanvasRef}>
                    <div className={classes.OffcanvasHeader}>{currentTrajectory.trajectoryId}</div>
                    <OffcanvasBody/>
                </div>
            </CSSTransition>


            <OverlayTrigger
                placement="right"
                overlay={overlay}
            >
                <Button className={classes.OffcanvasButtonClose} onClick={switchHide}>
                    {!visible ? <FontAwesomeIcon icon={faCaretRight}/> : <FontAwesomeIcon icon={faCaretLeft}/>}
                </Button>
            </OverlayTrigger>
        </div>
    )
}

const OffcanvasBody = () => {
    const {mode, setViewMode, setEditMode, isEditMode} = useContext(MapContext);
    const {
        currentTrajectory,
        setCurrentTrajectory,
        isCurrentTrajectory,
        currentTrajectoryExists
    } = useContext(TrajectoryContext);
    const {setEditableTrajectory} = useContext(EditTrajectoryContext);

    return (
        <div className={classes.OffcanvasBody}>
            <h4>trajectory.vesselId</h4>
            <hr/>

            <>
                <div className={classes.OffcanvasButtonPanel}>
                    <CircleButton faIcon={faLocation} onClick={setViewMode}>Показать на карте</CircleButton>
                    <CircleButton faIcon={faMap} onClick={() => {
                        if (currentTrajectoryExists()) {
                            setEditableTrajectory(currentTrajectory);
                        } else {
                            SystemErrorLogger.UnknownException("Режим редактирования недоступен: траектория не установлена");
                        }
                    }}>Перейти в режим редактирования</CircleButton>
                    <CircleButton faIcon={faClose} onClick={() => setCurrentTrajectory(null)}>Прекратить
                        просмотр</CircleButton>
                </div>
                <hr/>
            </>

            <>
                <InformationBlock
                    title={"Маршрут"}
                    values={[
                        ["Отправление", currentTrajectory.from],
                        ["Назначение", currentTrajectory.to]
                    ]}
                />
                <hr/>
            </>

        </div>
    );
}

export default MapSidebar;