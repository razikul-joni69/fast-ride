import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Vehicles = (props) => {
    const history = useHistory();
    const handleBook = (title) => {
        history.push(`/destination/${title}`);
    };
    const style = {
        width: "15rem",
        cursor: "pointer",
    };
    return (
        <div className="">
            <div className="m-2">
                <Card
                    onClick={() => handleBook(props.vehicle.title)}
                    style={style}
                >
                    <Card.Img
                        className="p-2"
                        style={{ height: "200px" }}
                        variant="top"
                        src={props.vehicle.imgUrl}
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            {props.vehicle.title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Vehicles;
