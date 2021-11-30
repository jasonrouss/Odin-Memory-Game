import React from "react";
import "../styles/Header.css";
function Header(props) {
  const { currScore, bestScore } = props;
  return (
    <div>
      <div className="fE">
        <div className="score">
          <div className="currScore">Score: {currScore}</div>
          <div className="bestScore">Best Score: {bestScore}</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
