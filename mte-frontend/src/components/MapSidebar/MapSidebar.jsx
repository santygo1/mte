import {useContext, useEffect, useRef, useState} from 'react';
import classes from "./MapSidebar.module.css";
import TrajectoryContext from "../../contexts/TrajectoryContext/TrajectoryContext.js";
import {Button, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import {faCaretLeft, faCaretRight, faClose, faLocation, faMap} from "@fortawesome/free-solid-svg-icons";
import CircleButton from "../CircleButton/CircleButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CSSTransition} from "react-transition-group";
import MapContext from "../../contexts/MapContext/MapContext.js";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";
import InformationBlock from "./InformationBlock/InformationBlock.jsx";
import EditTrajectoryContext from "../../contexts/EditTrajectoryContext/EditTrajectoryContext.js";
import useFetch from "../../hooks/useFetch.js";
import TrajectoryService from "../../api/service/TrajectoryService.js";
import VesselService from "../../api/service/VesselService.js";
import {flags} from "../../util/Flags.jsx";
import {vessels} from "../../util/Vessels.js";

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

    const {isEditMode} = useContext(MapContext);
    useEffect(() => {
        if (isEditMode) {
            setVisible(false);
        }
    }, [isEditMode]);

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

    const [currentVessel, setCurrentVessel] = useState(null);

    const [fetchCurrentVessel, isVesselLoading, vesselError] = useFetch(
        async () => {
            const fetch = await VesselService.getById(currentTrajectory.vesselId);
            setCurrentVessel(fetch);
        }
    );
    useEffect(() => {
        fetchCurrentVessel();
    }, [currentTrajectory]);

    return (
        currentVessel !== null &&
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
                    <div className={classes.OffcanvasHeader}>
                        <Image className={classes.Vessel} src={vessels[currentVessel.mmsi]}/>
                    </div>
                    <OffcanvasBody currentVessel={currentVessel}/>
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

const OffcanvasBody = ({currentVessel}) => {
    const {mode, setViewMode, setEditMode, isViewMode, isEditMode} = useContext(MapContext);
    const {
        currentTrajectory,
        setCurrentTrajectory,
        isCurrentTrajectory,
        currentTrajectoryExists
    } = useContext(TrajectoryContext);
    const {setEditableTrajectory} = useContext(EditTrajectoryContext);

    return (
        currentVessel !== null &&
        <div className={classes.OffcanvasBody}>
            <h4 className={"centered"}><Image className={"flag"} src={flags[currentVessel.flag]}/>{currentVessel.name}
            </h4>
            <hr/>

            {isViewMode &&
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
            }

            <>
                <InformationBlock
                    title={"Маршрут"}
                    values={[
                        ["Время отправления", currentTrajectory.coordinates[0].timestamp],
                        ["Время прибытия", currentTrajectory.coordinates[currentTrajectory.coordinates.length - 1].timestamp],
                        ["Отправление", `${currentTrajectory.coordinates[0].lat.toFixed(2)}...°,${currentTrajectory.coordinates[0].lon.toFixed(2)}...°`],
                        ["Прибытие", `${currentTrajectory.coordinates[currentTrajectory.coordinates.length - 1].lat.toFixed(2)}...°,
                        ${currentTrajectory.coordinates[currentTrajectory.coordinates.length - 1].lon.toFixed(2)}...°`]
                    ]}
                />

                <hr/>
                {currentVessel !== null &&
                    <InformationBlock
                        title={"Судно"}
                        values={[
                            ["MMSI", currentVessel.mmsi],
                            ["Название", currentVessel.name],
                            ["Порт", currentVessel.port],
                            ["Флаг", currentVessel.flag],
                            ["Тип", currentVessel.stringType],
                            ["Длина", currentVessel.length + " м."]
                        ]}
                    />
                }
            </>

        </div>
    );
}

export default MapSidebar;