import Map from "./components/Map/Map.jsx";
import {Button, Col, Container, Row} from "react-bootstrap";
import MapContextProvider from "./contexts/MapContext/MapContextProvider.jsx";
import MapSidebar from "./components/MapSidebar/MapSidebar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import TrajectoryContextProvider from "./contexts/TrajectoryContext/TrajectoryContextProvider.jsx";
import EditToolsPanel from "./components/EditToolsPanel/EditToolsPanel.jsx";

const App = () => {
    return (
        <Container className="p-0" fluid>
            <MapContextProvider>
                <TrajectoryContextProvider>
                    <Row className={"g-0"}>
                        <Col md={"auto"}>
                            <MapSidebar>
                                <Button><FontAwesomeIcon icon={faBars}/></Button>
                            </MapSidebar>
                        </Col>
                        <Col className={"vh-100 vw-100"}>
                            <Map/>
                        </Col>
                    </Row>
                    <EditToolsPanel/>
                </TrajectoryContextProvider>
            </MapContextProvider>
        </Container>
    );
}


export default App;
