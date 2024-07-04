import MapPage from "./pages/MapPage/MapPage.jsx";

const App = () => {
    return (
        <MapPage/>
        
        // <Container className="p-0" fluid>
        //     <MapContextProvider>
        //         <TrajectoryContextProvider>
        //             <Row className={"g-0"}>
        //                 <Col md={"auto"}>
        //                     <MapSidebar>
        //                         <Button><FontAwesomeIcon icon={faBars}/></Button>
        //                     </MapSidebar>
        //                 </Col>
        //                 <Col className={"vh-100 vw-100"}>
        //                     <Map/>
        //                 </Col>
        //             </Row>
        //             <EditToolsPanel/>
        //         </TrajectoryContextProvider>
        //     </MapContextProvider>
        // </Container>
    );
}


export default App;
