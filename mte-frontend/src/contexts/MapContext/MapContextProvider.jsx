import {useState} from "react";
import MapContext from "./MapContext.js";

export const MAP_MODE = {VIEW: 0, EDIT: 1};

const MapContextProvider = ({children}) => {

    const [mode, setMode] = useState(MAP_MODE.VIEW);

    const value = {
        mode: mode,
        setEditMode: () => setMode(MAP_MODE.EDIT),
        setViewMode: () => setMode(MAP_MODE.VIEW),
        isEditMode: mode === MAP_MODE.EDIT,
        isViewMode: mode === MAP_MODE.VIEW
    }

    return (
        <MapContext.Provider value={value}>
            {children}
        </MapContext.Provider>
    );
};
export default MapContextProvider;