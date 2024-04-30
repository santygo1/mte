import React from 'react';
import {Container, Nav, Navbar as OrigNavbar, NavDropdown} from "react-bootstrap";

const Navbar = (props) => {
    return (
        // TODO: Изменить структуру Navbara
        <OrigNavbar {...props}>
            <Container>
                <OrigNavbar.Brand href="#home">MTE</OrigNavbar.Brand>
                <OrigNavbar.Toggle aria-controls="basic-OrigNavbar-nav"/>
                <OrigNavbar.Collapse id="basic-OrigNavbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </OrigNavbar.Collapse>
            </Container>
        </OrigNavbar>
    );
};

export default Navbar;