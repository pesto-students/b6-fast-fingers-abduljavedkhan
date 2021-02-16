import React, { useState } from "react";

export const GameRight = () => {
  const [gameTimer, setGameTimer] = useState(0);
  return (
    <div className="text-color right">
      <h3>FAST FINGERS</h3>
      <h4>
        Score:
        {`${gameTimer / 10 < 10
            ? "0" + Math.floor(gameTimer / 10)
            : Math.floor(gameTimer / 10)
          }:${gameTimer % 10 < 10 ? "0" + (gameTimer % 10) : gameTimer % 10}`}
      </h4>
    </div>
  );
};