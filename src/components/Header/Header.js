import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Navbar className="container" bg="dark" variant="dark">
                <Navbar.Brand to="/home">Fast Ride</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav-link  " to="/home">
                        Home
                    </Link>
                    <Link className="nav-link " to="/destination">
                        Destination
                    </Link>
                    <Link className="nav-link " to="/blog">
                        Blog
                    </Link>
                    <Link className="nav-link " to="/contact">
                        Contact
                    </Link>

                    <Link
                        className="nav-link btn btn-primary btn-sm"
                        to="/login"
                    >
                        Login
                    </Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
