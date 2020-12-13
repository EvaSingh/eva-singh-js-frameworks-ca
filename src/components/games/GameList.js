import React, {  useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../constants/api";
import GameItem from "./GameItem";
import SearchGame from "./SearchGame";


export function GameList() {
  const [games, displayGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect( () => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then (json => {
      displayGames(json.results);
      console.log(json.results);
      setFilteredGames(json.results);
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
          
  },[]);

  const filterGames = function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = games.filter(function(g) {


      const lowerCaseName = g.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredGames(filteredArray);
  };

  if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

  return (
    <>
      <SearchGame handleSEarch={filterGames} />

      <Row>
        {filteredGames.map(game => {
          const {id, name, background_image, released, rating } = game;

          return (
            <Col xs={6} md={4} lg={3} key={id}>
              <GameItem id={id}  name={name} background_image={background_image} released={released} rating={rating}/>
            </Col>
          );
        })}
      </Row>
    </> 
  );
}

export default GameList;