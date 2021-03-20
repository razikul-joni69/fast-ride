import React from "react";
import { Button, Form } from "react-bootstrap";
import './Destination.css'

const Direction = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 search-form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                            />
                        </Form.Group>
                        <Button
                            className="btn-block"
                            variant="warning"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Form>
                </div>
                <div className="col-md-8">
                    <iframe
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703953085!2d90.27923830451422!3d23.780573256586983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616219027045!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        allowFullScreen="yes"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Direction;
