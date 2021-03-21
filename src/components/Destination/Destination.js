import {
    faDollarSign,
    faTruckPickup,
    faUserFriends,
    faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FakeData from "../../FakeData/FakeData";
import Map from "../Map/Map";
import "./Destination.css";

const Destination = (props) => {
    const { title } = useParams();
    console.log("title", title);

    const vehicleName = FakeData.find((vehicle) => vehicle.title === title);
    console.log("object", vehicleName.imgUrl);
    const [destination, setDestination] = useState({
        success: false,
        from: "",
        to: "",
        error: false,
    });
    const handleBlur = (e) => {
        let search = true;
        if (search) {
            let newSearch = { ...destination };
            newSearch[e.target.name] = e.target.value;
            setDestination(newSearch);
        }
    };
    const handleSubmit = () => {
        if (destination.from !== "" && destination.to !== "") {
            let newSearch = { ...destination };
            newSearch.success = true;
            setDestination(newSearch);
        } else {
            let newSearch = { ...destination };
            newSearch.error = true;
            setDestination(newSearch);
        }
    };
    return (
        <div className="container">
            <div className="row map-destination">
                <div className="col-md-4 search-box">
                    {destination.success ? (
                        <>
                            <div className="search-result">
                                <div className="search-bar">
                                    <h3>
                                        <FontAwesomeIcon icon={faTruckPickup} />
                                        From: {destination.from}{" "}
                                    </h3>
                                    <h3>
                                        <FontAwesomeIcon icon={faTruckPickup} />
                                        To: {destination.to}
                                    </h3>
                                </div>
                            </div>
                            <div className="search-img-box">
                                <img
                                    className="search-img "
                                    src={vehicleName.imgUrl}
                                    alt=""
                                />
                                <h4> {vehicleName.title}</h4>
                                <h4>
                                    <FontAwesomeIcon icon={faUserFriends} />
                                    {vehicleName.capacity}
                                </h4>
                                <i class="fas "></i>
                                <h4>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    {vehicleName.price}
                                </h4>
                            </div>
                            <div className="search-img-box">
                                <img
                                    className="search-img "
                                    src={vehicleName.imgUrl}
                                    alt=""
                                />
                                <h4> {vehicleName.title}</h4>
                                <h4>
                                    <FontAwesomeIcon icon={faUserFriends} />
                                    {vehicleName.capacity}
                                </h4>
                                <h4>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    {vehicleName.price}
                                </h4>
                            </div>
                            <div className="search-img-box">
                                <img
                                    className="search-img "
                                    src={vehicleName.imgUrl}
                                    alt=""
                                />
                                <h4> {vehicleName.title}</h4>
                                <h4>
                                    <FontAwesomeIcon icon={faUserFriends} />
                                    {vehicleName.capacity}
                                </h4>
                                <i class="fas "></i>
                                <h4>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    {vehicleName.price}
                                </h4>
                            </div>
                        </>
                    ) : (
                        <div className="search-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>
                                <FontAwesomeIcon icon={faSearchLocation} />Pick From</Form.Label>
                                <Form.Control
                                    name="from"
                                    type="text"
                                    onBlur={handleBlur}
                                    placeholder="Enter Pickup Address"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>
                                <FontAwesomeIcon icon={faSearchLocation} />Pick To</Form.Label>
                                <Form.Control
                                    name="to"
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Enter Destination Address"
                                />
                            </Form.Group>
                            {destination.error ? (
                                <p>Select your Destination</p>
                            ) : (
                                <p></p>
                            )}
                            <Button
                                onClick={handleSubmit}
                                className="btn-block"
                                variant="warning"
                                type="submit"
                            >
                                Search
                            </Button>
                        </div>
                    )}
                </div>
                <div className="col-md-8 ">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;
