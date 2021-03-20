import React, { useContext } from 'react';
import { UserContext } from '../../App';

const User = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="text-center">
            <h1>Name: {loggedInUser.name}</h1>
            <h3>Email: {loggedInUser.email}</h3>
            <img src={loggedInUser.photo} alt=""/>
        </div>
    );
};

export default User;