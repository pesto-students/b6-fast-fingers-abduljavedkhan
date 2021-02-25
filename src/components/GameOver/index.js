import React from 'react';
import { timeFormat } from '../../common-service';

const  GameOver = ({ score, gameScores, isHighScore }) => {

    return (<div className="text-center justify-center text-5xl self-center mb-10 mt-16">
        <div>
        SCORE : GAME {gameScores.length}
        </div>
        <div className="mb-8 mt-8">
            {timeFormat(score)}
        </div>
        <div className="mb-8 mt-8">
        { isHighScore ? "New High Score" : ""}
        </div>
    </div>);
}
export default GameOver;