import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function GameItem({ id, name, background_image, released, rating }) {
    return (
        <Card>
          <Card.Img variant="top" src={background_image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <b>Released:</b> {released} <br/>
              <b>Rating:</b> {rating}
            </Card.Text>
            <Link to={"game/" + id}>
              <Button variant="primary" block>
                View
              </Button>
            </Link>
          </Card.Body>
        </Card>
    );
}
export default GameItem;
