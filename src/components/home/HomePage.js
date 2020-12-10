import React from "react";
import GameList from "../games/GameList";
import Heading from "../layout/Heading";

export function HomePage() {
    return (
      <>
        <Heading content="Games"/>
        <GameList></GameList>
    
      </>    
    );
}

export default HomePage;