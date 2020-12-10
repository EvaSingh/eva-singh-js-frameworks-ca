import React, {  useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../constants/api";
import GameItem from "./GameItem";


export function GameList() {
  const [games, displayGames] = useState([]);
    
  useEffect( () => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then (json => {
      displayGames(json.results);
      console.log(json.results);
    });

         
  },[]);

  return (
    <Row>
      {games.map(game => {
        const {id, name, background_image, released, rating } = game;

        return (
          <Col xs="6" md="4" lg="3">
            <GameItem id={id} name={name} background_image={background_image} released={released} rating={rating}/>
          </Col>
        );
      })}
    </Row>
  );
}

export default GameList;