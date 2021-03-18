import React from "react";
import Background from '../Images/Bg.png';
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <div styles={{ backgroundImage:`url(${Background})` }}>
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand className="brand-name" href="#home">Fast Ride</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Destination</Nav.Link>
                        <Nav.Link className="btn btn-danger" href="#pricing">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
            {/* <img className="background-img" src={Background} alt="" /> */}
        </div>
    );
};

export default Header;
