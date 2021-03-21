import React from "react";
import Vehicles from "../Vehicles/Vehicles";
import FakeData from '../../FakeData/FakeData';

const Home = () => {
    const style = {
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        height: "310px",
    };
    
    return (
        <div className="container">
            <div style={style} className="row">
                {FakeData.map((vehicle) => (
                    <Vehicles key={vehicle.id} vehicle={vehicle}></Vehicles>
                ))}
            </div>
        </div>
    );
};

export default Home;
