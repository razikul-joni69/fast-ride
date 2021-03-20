import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Vehicles = (props) => {
    const history = useHistory()
    const handleBook = (title) => {
        history.push(`/destination/${title}`);
    }
    return (
        <div className="">
            <div className="m-2">
                <Card style={{ width: "15rem" }}>
                    <Card.Img
                        style={{ height: "200px" }}
                        variant="top"
                        src={props.vehicle.imgUrl}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            {props.vehicle.title}
                        </Card.Title>
                        <Button onClick={() => handleBook(props.vehicle.title)} variant="primary" className="btn-block">
                            Select Destination
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Vehicles;
