import React from "react";
import { GameArea } from './GameArea/gamearea';
import "./mainGame.css";
import { GameLeft } from "../game/GameLeft/game-left";
import { GameRight } from "../game/GameRight/game-right";

export const Game = () => {
  return (
    <div className="game-container">
      <GameLeft />
      <GameArea />
      <GameRight />
    </div>
  );
};
