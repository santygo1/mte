import {useContext, useEffect, useState} from "react";
import EditTrajectoryContext from "./EditTrajectoryContext.js";
import Util from "../../util/Util.js";
import MapContext from "../MapContext/MapContext.js";

const EditTrajectoryContextProvider = ({children}) => {
    const [trajectoryStatePool, setTrajectoryStatePool] = useState({
        currentStatePosition: 0,
        states: []
    });

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

    const {setEditMode} = useContext(MapContext);


    function clearChanges() {
        if (navigatorComponentState.hasChanges) {
            setTrajectoryStatePool({
                currentStatePosition: 0,
                states: [trajectoryStatePool.states[0]]
            });
        }
    }

    function setEditableTrajectoryClone(trajectory) {
        setTrajectoryStatePool({currentStatePosition: 0, states: [Util.objectDeepCopy(trajectory)]});
        setEditMode();
    }

    function changeCoordinate(coordinatePosition, newCoordinate) {
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

    function saveNewTrajectory() {

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
                clearChanges: clearChanges
            }}
        >{children}</EditTrajectoryContext.Provider>
    );
};
export default EditTrajectoryContextProvider;