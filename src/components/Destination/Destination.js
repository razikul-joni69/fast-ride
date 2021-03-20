import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import "./Destination.css";

const Direction = (props) => {
    const { title } = useParams();
    console.log(title);

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
                                    {destination.from} <small>to</small>{" "}
                                </h3>
                                <h3>{destination.to}</h3>
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
                                    placeholder="Enter Address"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control
                                    name="to"
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Enter Address"
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
                    <iframe
                        className="map"
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703953085!2d90.27923830451422!3d23.780573256586983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616219027045!5m2!1sen!2sbd"
                        width=""
                        height=""
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Direction;
