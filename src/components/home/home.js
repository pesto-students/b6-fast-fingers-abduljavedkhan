import React, { useState, useEffect } from 'react';

import { HomeHeader } from './header/header';
import { Dropdown } from "./dropdown/dropdown";
import { DIFFICULTY_LEVEL, DIFFICULTY_LEVEL_STRINGS } from '../../common/commonService';
import playIcon from '../../assets/icons/play.svg';
import './home.css';


export const Home = ({ history }) => {
  const [difficultyLevel, setDifficultyLevel] = useState(DIFFICULTY_LEVEL_STRINGS.easy);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [error, setError] = useState(false);


  useEffect(() => {
    const player = localStorage.getItem("player");
    const difficultyLevel = localStorage.getItem("difficultyLevel");
    !currentPlayer && setCurrentPlayer(player);
    !!difficultyLevel && setDifficultyLevel(difficultyLevel);
  }, []);


  const handleStartGame = () => {
    checkPlayerExist();
    if (currentPlayer) {
      localStorage.setItem("player", currentPlayer);
      localStorage.setItem("difficultyLevel", difficultyLevel);
      history.push('/game-area');
    }
  };

  const handleInputName = event => {
    const { value } = event.target;
    if (!error && !value) {
      setError(true)
    } else setError(false);
    setCurrentPlayer(value);
  };

  const handleDropDown = event => {
    const { value } = event.target;
    setDifficultyLevel(value);
  };

  const checkPlayerExist = () => {
    !currentPlayer && setError(true);
  };

  return (
    <div className="Home">
      <HomeHeader />
      <input
        className="playername"
        placeholder="TYPE YOUR NAME"
        onChange={handleInputName}
        value={currentPlayer}
      />

      {error && <p style={{ color: "red" }}>Playername is Required!!</p>}

      <Dropdown
        data={DIFFICULTY_LEVEL}
        value={difficultyLevel}
        onChange={handleDropDown}
      />
      <div
        className="row startgame"
        onClick={handleStartGame}
      >
        <img src={playIcon} alt="play button" />
        <h1 className="textcolor startgametext">START GAME</h1>
      </div>
    </div>
  );
};
