import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import GameHeader from '../../components/GameHeader';
import GameArea from '../../components/GameArea';
import ScoreBoard from '../../components/ScoreBoard';
import GameOver from '../../components/GameOver';
import Button from '../../components/Button';

import reloadIcon from '../../assets/icons/reload.svg';
import crossIcon from '../../assets/icons/cross.svg';
import logout from '../../assets/icons/logout.svg';
import { ROUTES } from '../../common-service';
import { addScoresToLocal, getScoresFromLocal } from '../../utils/storage';

const MainGame = () => {
    // keep all this on useReducer (for multiple state management)
    const { player, difficultyLevel } = useParams();
    const [currentDifficulty, setCurrentDifficulty] = useState(Number(difficultyLevel));
    const [gameOverStatus, setGameOverStatus] = useState(false);
    const [score, setScore] = useState(0);

    let scores = useRef(getScoresFromLocal());
// add api call to update score , use REACT query or SWR
    const handleGameOver = () => {
        if (score !== 0)
        addScoresToLocal(score);
        scores.current = getScoresFromLocal();
        setGameOverStatus(true);
    }

    const handlePlayAgain = () => {
        setScore(0);
        setCurrentDifficulty(Number(difficultyLevel));
        setGameOverStatus(false);
    }
    return (
        <div className="flex-1 p-2.5 flex-col text-center items-center w-screen h-screen justify-between text-secoundry">
            <GameHeader difficulty={currentDifficulty} playerName={player} score={score} />
            <div className="flex flex-row flex-wrap-reverse justify-center">
                {!gameOverStatus ?
                    <>
                        <ScoreBoard scores={scores.current} />
                        <GameArea
                            difficulty={currentDifficulty}
                            setDifficulty={setCurrentDifficulty}
                            setScore={setScore}
                            handleGameOver={handleGameOver}
                        />
                        <div className="flex-1 "></div>
                    </>
                    :
                    <div>
                        <GameOver
                            score={score}
                            gameScores={scores.current}
                            isHighScore={Math.max(...scores.current) === score}
                        />
                        <Button icon={reloadIcon} text="PLAY AGAIN" onClick={handlePlayAgain} />
                    </div>
                }
            </div>

            <div className="w-max mb-5 mt-3 ml-2 ">
                {!gameOverStatus ?
                    <Button icon={crossIcon} text="STOP GAME" onClick={handleGameOver} /> :
                    <Link to={ROUTES.LOGIN} className="mt-4 mb-4 ml-1 mr-8">
                    <Button icon={logout} className="text-primary  pl-2 pr-4" text="LOG OUT" /> </Link>
                }
            </div>

        </div>
    );
}
export default MainGame;