import React, { useEffect } from 'react';
import ProgressTimer from '../ProgressTimer';
import {timeFormat} from '../../common-service';
import useTimer from '../../GameHooks/useTimer';

const TimerCounter = ({timerControl, onFinish}) =>{
    
    const {start, playAgain, totalTime} = timerControl;
    const {time, setStart, setPlayAgain} = useTimer(totalTime);
    
    useEffect(()=>{
        if(start)
         setStart(true);
     },[setStart, start])

    useEffect(()=>{
        if(start)
        setPlayAgain(true);
    },[playAgain, setPlayAgain, start])
   
    useEffect(() => {
        if(time < 0)
            onFinish();
    }, [time, onFinish])

    return (
        <ProgressTimer progress={time*100/totalTime} size={170}>
            <span className="text-2xl">{timeFormat(time)}</span>
        </ProgressTimer>
    );
}
export default TimerCounter