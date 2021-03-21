import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Map from "../Map/Map";
import "./Destination.css";
const Direction = (props) => {
    const { title } = useParams();
    console.log(useParams());
    console.log("title",title);

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
                <div className="col-md-4 search-form">
                    {destination.success ? (
                        <div className="search-result">
                            <div className="inner-search">
                                <h3>
                                    From: {destination.from} {" "}
                                </h3>
                                <h3>To: {destination.to}</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="search-form2">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control
                                    name="from"
                                    type="text"
                                    onBlur={handleBlur}
                                    placeholder="Enter Pickup Address"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pick To</Form.Label>
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

export default Direction;
