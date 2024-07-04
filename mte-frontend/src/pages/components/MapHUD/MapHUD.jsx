import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import MapSidebar from "../../../components/MapSidebar/MapSidebar.jsx";
import EditToolsPanel from "../../../components/EditToolsPanel/EditToolsPanel.jsx";

const MapHUD = () => {
    return (
        <>
            <MapSidebar>
                <Button><FontAwesomeIcon icon={faBars}/></Button>
            </MapSidebar>
            <EditToolsPanel/>
        </>
    )
}

export default MapHUD;