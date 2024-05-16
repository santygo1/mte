import {createContext} from "react";

export default createContext({
    currentTrajectory: null,
    setCurrentTrajectory: () => {
    },

    // Функция проверяющая если ли траектория в фокусе на карте
    currentTrajectoryExists: () => {
    },

    // Функция проверяющая находится ли переданная траектория в фокусе на карте
    isCurrentTrajectory: (trajectory) => {
    },
});