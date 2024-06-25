import {useContext, useEffect, useState} from "react";
import EditTrajectoryContext from "./EditTrajectoryContext.js";
import Util from "../../util/Util.js";
import MapContext from "../MapContext/MapContext.js";
import {useToasts} from "react-bootstrap-toasts";
import useFetch from "../../hooks/useFetch.js";
import TrajectoryService from "../../api/service/TrajectoryService.js";

const DEFAULT_TRAJECTORY_STATE_POOL = {
    currentStatePosition: 0,
    savedStatePosition: 0,
    states: []
};


const EditTrajectoryContextProvider = ({children}) => {
    const [trajectoryStatePool, setTrajectoryStatePool] = useState(DEFAULT_TRAJECTORY_STATE_POOL);

    const toasts = useToasts();

    const [updateTrajectory, isUpdating, updateError] = useFetch(
        async () => {
            const trajectory = trajectoryStatePool.states[trajectoryStatePool.currentStatePosition];
            const result = await TrajectoryService.updateTrajectory(trajectory.trajectoryId, trajectory);
        }
    );

    useEffect(() => {
        if (updateError) {
            console.log(updateError)
            toasts.show({
                headerContent: <span className="me-auto">Сохранение ошибка</span>,
                bodyContent: 'Сохранение завершено.',
                toastProps: {
                    className: "fade-in",
                    autohide: true,
                    delay: 3000,
                },
            });
        }
    }, [updateError]);

    const [navigatorComponentState, setNavigatorComponentState] = useState({
        hasPreviousState: false,
        hasNextState: false,
        hasChanges: false
    });

    useEffect(() => {
        const newState = {
            hasNextState: trajectoryStatePool.currentStatePosition < trajectoryStatePool.states.length - 1,
            hasPreviousState: trajectoryStatePool.currentStatePosition > 0,
            hasChanges: trajectoryStatePool.states.length > 1 && trajectoryStatePool.currentStatePosition > 0,
        };

        setNavigatorComponentState(newState);
    }, [trajectoryStatePool]);

    useEffect(() => {

    }, []);

    const {setEditMode, setViewMode} = useContext(MapContext);

    function setEditableTrajectoryClone(trajectory) {
        setTrajectoryStatePool({
            ...DEFAULT_TRAJECTORY_STATE_POOL,
            states: [Util.objectDeepCopy(trajectory)]
        });
        setEditMode();
    }

    function changeCoordinate(coordinatePosition, newCoordinate) {
        // TODO: добавить проверку координаты

        // Вытягиваем из общего пула состояний, текущие состояния, т.е. те которые находятся от 0 до текущего выбранного
        const currentTrajectoryStates = trajectoryStatePool.states.slice(0, trajectoryStatePool.currentStatePosition + 1);
        // Глубоко копируем последнее состояние чтобы его изменить
        const newTrajectoryState = Util.objectDeepCopy(currentTrajectoryStates[currentTrajectoryStates.length - 1]);

        // Обновляем координаты последнего выбранного состояния
        newTrajectoryState.coordinates[coordinatePosition] = {
            ...newTrajectoryState.coordinates[coordinatePosition],
            lat: newCoordinate.lat,
            lon: newCoordinate.lng
        };

        // Добавляем новое состояние вправо к пулу состояний начиная с выбранной позиции
        const newStates = [...currentTrajectoryStates, newTrajectoryState]
        setTrajectoryStatePool({
            // устанавливаем позицию на изменение
            currentStatePosition: newStates.length - 1,

            // передаем изменненые состояния
            states: newStates
        });
    }

    function goToNextState() {
        if (navigatorComponentState.hasNextState) {
            setTrajectoryStatePool({
                    ...trajectoryStatePool,
                    currentStatePosition: trajectoryStatePool.currentStatePosition + 1
                }
            )
        } else {
            console.log("Переход на следующие редактирумое состояние траектории невозможно: следующее состояние отсуствует");
        }
    }

    function goToPreviousState() {
        if (navigatorComponentState.hasPreviousState) {
            setTrajectoryStatePool({
                    ...trajectoryStatePool,
                    currentStatePosition: trajectoryStatePool.currentStatePosition - 1
                }
            )
        } else {
            console.log("Переход на предыдущее редактирумое состояние траектории невозможно: предыдущее состояние отсуствует");
        }
    }

    function closeEdit() {
        setViewMode();
    }

    function saveChanges() {
        if (isUpdating) return;

        setTrajectoryStatePool({
            ...trajectoryStatePool,
            savedStatePosition: trajectoryStatePool.currentStatePosition
        });

        updateTrajectory();
    }

    function checkCoordinate() {
    }

    return (
        <EditTrajectoryContext.Provider
            value={{
                editableTrajectory: trajectoryStatePool.states[trajectoryStatePool.currentStatePosition],
                setEditableTrajectory: setEditableTrajectoryClone,
                changeCoordinate: changeCoordinate,
                goToNextState: goToNextState,
                goToPreviousState: goToPreviousState,
                hasNextState: navigatorComponentState.hasNextState,
                hasPreviousState: navigatorComponentState.hasPreviousState,
                hasChanges: navigatorComponentState.hasChanges,
                closeEdit: closeEdit,
                saveChanges: saveChanges,
                needSave: trajectoryStatePool.savedStatePosition !== trajectoryStatePool.currentStatePosition && !isUpdating,
                isSaving: !isUpdating
            }}
        >
            {children}
        </EditTrajectoryContext.Provider>
    );
};
export default EditTrajectoryContextProvider;