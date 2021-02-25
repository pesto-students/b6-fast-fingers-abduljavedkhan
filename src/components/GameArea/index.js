import React, { useEffect, useReducer } from 'react';
import Timer from '../../components/Timer'
import TextInput from '../TextInput';
import { DIFFICULTY_FACTOR_INCREMENT,timeForWord } from '../../common-service';
import useWord from '../../GameHooks/useWord';
import FetchWord from '../FetchWord';
import {initialState, gameControl} from '../../GameHooks/useCommonState';

const GameArea = ({ difficulty, setDifficulty, setScore, handleGameOver }) =>{

const [gameTimer, dispatch] = useReducer(gameControl, initialState);
const onWordMatch = (word) => {
        setScore((prev) => prev + gameTimer.totalTime);
        setDifficulty((prev) => prev + DIFFICULTY_FACTOR_INCREMENT);
        dispatch({type:'playAgain', payload: timeForWord(difficulty, word.length) });
};
    const {word, text, setText} = useWord(difficulty,onWordMatch);
    useEffect(()=>{
    if(!!text && !gameTimer.start){
        dispatch({type:'start', payload: timeForWord(difficulty, word.length)});
        }
    },[text, word, gameTimer.start, difficulty]);
    
    return (
        <div className="flex flex-col items-center ml-36">
            <Timer
                onFinish={handleGameOver}
                timerControl={gameTimer}
            />
            <FetchWord dicFetchedWord={word} userInputLetter={text} />
            <TextInput text={text} setText={setText} textAlign="center" />
        </div>
    );
}
export default GameArea