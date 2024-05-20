import {createContext} from "react";

export const MAP_MODE = {VIEW: 1, EDIT: 2};

export default createContext({
    // текущий режим карты
    mode: MAP_MODE.VIEW,

    // текущая траектория в фокусе
    currentTrajectory: null,

    // Процедура устанавливающая текущий режим для карты из MAP_MODE
    setMapMode: () => {
    },

    // Процедура устанавливающая траекторию в фокус
    setCurrentTrajectory: (trajectory) => {
    },

    // Функция проверяющая если ли траектория в фокусе на карте
    currentTrajectoryExists: () => {
    },

    // Функция проверяющая находится ли переданная траектория в фокусе на карте
    isCurrentTrajectory: (trajectory) => {
    },
});