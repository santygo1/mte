import Map from "./pages/Map/Map.jsx";
import {Col, Container, Row} from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
    return (
        <Container className="p-0 vh-100" fluid >
            <Navbar expand="lg" className="bg-body-tertiary"/>
            <Row className={"vh-100 g-0"} >
                <Col md={"auto"}>
                    <Sidebar />
                </Col>
                <Col className={"w-100"}>
                   <Map/>
                </Col>
            </Row>
        </Container>
    );
}


export default App;
