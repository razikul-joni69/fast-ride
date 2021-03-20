import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser.name);
    return (
        <div className="header">
            <Navbar className="container" bg="" variant="light">
                <Link to="/home"><Navbar.Brand to="/home">Fast Ride</Navbar.Brand></Link>
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
                    {loggedInUser.name ? (
                        <Link className="nav-link text-warning" to="/user">
                            {" "}
                            {loggedInUser.name}
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
