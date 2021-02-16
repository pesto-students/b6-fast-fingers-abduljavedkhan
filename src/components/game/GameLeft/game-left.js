import React, { useState } from "react";
import { GameScoreBoard } from '../GameScoreBoard/gameScoreBoard';
import userAccount from '../../../assets/icons/account.svg';
import level from '../../../assets/icons/game.svg';
import close from '../../../assets/icons/close.svg';

export const GameLeft = () => {
  //store the highest score
  const [newHighScore, setNewHighScore] = useState(
    (localStorage.getItem("highscore") &&
      JSON.parse(localStorage.getItem("highscore"))) || 0  );
  const player = localStorage.getItem("player");
  const difficultyLevel = localStorage.getItem("difficultyLevel");

  //store the userscores and maintain it in local storage
  const [userScores, setUserScores] = useState(
    JSON.parse(localStorage.getItem("scores")) || []
  );

  //State to control gameover
  const [gameOver, setGameOver] = useState(false);

  const [gameOverStatus, setGameOverStatus] = useState(false);

  //stop the game
  const stopGame = () => {
    setGameOver(true);
    setGameOverStatus(true);
  };
  return (
    <div className="textcolor left">
      <div className="game-left-header">
        <div className="player-name">
          <img src={userAccount} alt="account" width="25vw" />
          <h3>{player.toUpperCase()}</h3>
        </div>
        <div className="level">
          <img src={level} alt="game" width="25vw" />
          <h3>LEVEL : {difficultyLevel.toUpperCase()}</h3>
        </div>
      </div>
      <GameScoreBoard
        gameOver={gameOver}
        userScores={userScores}
        newHighScore={newHighScore}
      />
      <div
        className="stop"
        onClick={() => (gameOver ? window.location.assign("/") : stopGame())}>
        <div className="game-left-stop">
          {!gameOver && <img src={close} alt="close" />}
          <h2>{!gameOver ? "STOP GAME" : "QUIT"}</h2>
        </div>
      </div>
    </div>
  );
};