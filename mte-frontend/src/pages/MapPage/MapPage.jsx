import TrajectoryContextProvider from "../../contexts/TrajectoryContext/TrajectoryContextProvider.jsx";
import Map from "../../components/Map/Map.jsx";
import MapContextProvider from "../../contexts/MapContext/MapContextProvider.jsx";
import MapHUD from "../components/MapHUD/MapHUD.jsx";
import EditTrajectoryContextProvider from "../../contexts/EditTrajectoryContext/EditTrajectoryContextProvider.jsx";
import AnalyzeTrajectoryContextProvider
    from "../../contexts/AnalyzeTrajectoryContext/AnalyzeTrajectoryContextProvider.jsx";

const MapPage = () => {
    return (
        <div className={"fullscreen-page"}>
            <MapContextProvider>
                <TrajectoryContextProvider>
                    <EditTrajectoryContextProvider>
                        <AnalyzeTrajectoryContextProvider>
                            <MapHUD/>
                            <Map/>
                        </AnalyzeTrajectoryContextProvider>
                    </EditTrajectoryContextProvider>
                </TrajectoryContextProvider>
            </MapContextProvider>
        </div>
    )
}

export default MapPage;