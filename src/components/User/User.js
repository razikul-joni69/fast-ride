import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Login from '../Login/Login';
import { handleSignOut } from '../Login/LoginManager';

const User = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const signOut = () => {
        handleSignOut().then((res) => {
            // setUser(res);
            setLoggedInUser(res);
        });
    };
    return (
        <div className="text-center">
            <h1>Name: {loggedInUser.name || loggedInUser.displayName}</h1>
            <h3>Email: {loggedInUser.email}</h3>
            <img src={loggedInUser.photo} alt=""/><p></p>
            {loggedInUser.email ? (
                        <button className="btn btn-primary"onClick={signOut}>Sign Out</button>
                    ) : (
                        <Link className="btn btn-primary" to="/login">Sign in Or Sign Up</Link>
                    )}
        </div>
    );
};

export default User;