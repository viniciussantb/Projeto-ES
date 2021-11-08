import React, { useContext, useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";
import { ScoreContext } from "./context/ScoreContext";
import "./App.less";

export const App = () => {
  const [date, setDate] = useState<Date>(new Date());
  const {scoreValue, setScoreValue, maxScoreValue, setMaxScoreValue} = useContext(ScoreContext);

  const handleRestart = () => {
    if(scoreValue > maxScoreValue){
      setMaxScoreValue(scoreValue);
    }
    setScoreValue(0);
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1 style={{fontSize: "70px"}}>2048</h1>
          <h3>Grupo 5</h3>
        </div>

        <div>
          <Button onClick={handleRestart}>New Game</Button>
          <div className="scores-container">
            <p className="score-container">{scoreValue}</p>
            <p className="best-container">{maxScoreValue}</p>
          </div>
        </div>

      </div>

      <Game key={date.toISOString()} />

      <div>
          <p className='game-explanation'>
            <strong>HOW TO PLAY: </strong>
            <span>
              Use your arrow keys to move the tiles.
              Tiles with the same number merge into one when they touch.
              Add them up to reach <strong>2048</strong>!
            </span>
          </p>
      </div>
    </div>
  );
};
