import React, { useEffect } from 'react';
import TimerProgressBar from '../TimerProgressBar';
import {timeFormat} from '../../common-service';
import useTimer from '../../GameHooks/useTimer';
function Timer({timerControl, onFinish}) {
    
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
        <TimerProgressBar progress={time*100/totalTime} size={170}>
            <span className="text-2xl">{timeFormat(time)}</span>
        </TimerProgressBar>
    );
}
export default Timer