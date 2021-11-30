import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Card.css";

const CardGroup = (props) => {
  const { handleGameLogic, currScore, bestScore } = props;
  let images = [
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997812351076/darthvader.jpg",
      text: "Darth vader",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914960098693091388/greatest-star-wars-characters-luke-skywalker.jpg",
      text: "Luke Skywalker",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914960440885411880/Obiwankenobi_dsws.jpg",
      text: "Obi Wan Kenobi",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957998932230246/Anakin_Skywalker_RotS.png",
      text: "Anakin Skywalker",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957998324072488/Hansoloprofile.jpg",
      text: "Han Solo",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957998068207626/chewbacca.jpg",
      text: "Chewbacca",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997577478294/Darth_Sidious.jpg",
      text: "Darth Sidious",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914981044703346718/c3p0.jpg",
      text: "C3P0",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997975932958/princess.jpg",
      text: "Princess Leia",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997346807808/bobbafett.jpg",
      text: "Bobba Fett",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997598449694/yoda.jpg",
      text: "Yoda",
    },
    {
      src: "https://cdn.discordapp.com/attachments/901150871927279636/914957997120303154/lando.jpg",
      text: "Lando Calrissian",
    },
  ];
  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [currScore, bestScore]);

  return (
    <div className="gameContainer">
      {cards.map((card) => (
        <Card card={card} key={card.text} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
};

export default CardGroup;
