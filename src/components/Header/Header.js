import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <Navbar className="container" bg="" variant="light">
                <Link to="/home">
                    <Navbar.Brand to="/home">Fast Ride</Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                    <Link className="nav-link  " to="/home">
                        Home
                    </Link>
                    <Link className="nav-link " to="/destination/BIKE">
                        Destination
                    </Link>
                    <Link className="nav-link " to="/contact">
                        Contact
                    </Link>
                    {loggedInUser.name || loggedInUser.displayName ? (
                        <Link className="nav-link text-warning" to="/user">
                            {" "}
                            {loggedInUser.name || loggedInUser.displayName}
                        </Link>
                    ) : (
                        <Link
                            className="nav-link btn btn-primary btn-sm"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
