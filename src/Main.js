import React, { useState } from "react";
import Header from "./components/Header";
import CardGroup from "./components/CardGroup";

const Main = () => {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setCurrScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setBestScore(currScore);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setCurrScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div>
      <Header currScore={currScore} bestScore={bestScore} />
      <CardGroup
        handleGameLogic={handleGameLogic}
        currScore={currScore}
        bestScore={bestScore}
      />
    </div>
  );
};

export default Main;
