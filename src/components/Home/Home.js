import React from 'react';
import Bike from '../Images/bike.png'
import Car from '../Images/car.png'
import Bus from '../Images/bus.png'
import Train from '../Images/train.png'
import './Home.css'
const Home = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="card-div ">
                <img className="p-3" src={Bike} alt=""/>
                <h1 className="text-center">BIKE</h1>
            </div>
            <div className="card-div">
                <img className="p-3" src={Car} alt=""/>
                <h1 className="text-center">CAR</h1>
            </div>
            <div className="card-div">
                <img className="p-3" src={Bus} alt=""/>
                <h1 className="text-center">BUS</h1>
            </div>
            <div className="card-div">
                <img className="p-3" src={Train} alt=""/>
                <h1 className="text-center">TRAIN</h1>
            </div>
          
        </div>
        </div>
    );
};

export default Home;