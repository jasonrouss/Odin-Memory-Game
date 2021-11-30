import React from "react";
import "../styles/Card.css";

function Card(props) {
  const {
    card: { src, text },
    handleGameLogic,
  } = props;
  function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
  }
  return (
    <div className="cardSound" onClick={playAudio}>
      <div className="card" onClick={handleGameLogic.bind(this, text)}>
        <div className="img">
          <img src={src} alt={text} className="cardImg" />
        </div>
        <audio id="audio" src=""></audio>
        <div className="cardText ">{text}</div>
      </div>
    </div>
  );
}
export default Card;
