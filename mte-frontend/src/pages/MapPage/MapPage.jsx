import TrajectoryContextProvider from "../../contexts/TrajectoryContext/TrajectoryContextProvider.jsx";
import Map from "../../components/Map/Map.jsx";
import MapContextProvider from "../../contexts/MapContext/MapContextProvider.jsx";
import MapHUD from "../components/MapHUD/MapHUD.jsx";

const MapPage = () => {
    return (
        <div className={"fullscreen-page"}>
            <MapContextProvider>
                <TrajectoryContextProvider>
                    <MapHUD/>
                    <Map/>
                </TrajectoryContextProvider>
            </MapContextProvider>
        </div>
    )
}

export default MapPage;