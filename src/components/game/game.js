import React from "react";
import { GameArea } from "./GameArea/game-area";
import "./game.css";
import { GameLeft } from "./GameLeft/game-left";
import { GameRight } from "./GameRight/game-right";
export const Game = () => {
  return (
    <div className="game-container">      
      <GameLeft />
      <GameArea />
      <GameRight />
    </div>
  );
};
