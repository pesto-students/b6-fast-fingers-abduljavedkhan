import { useEffect, useRef, useState } from "react";

function useTimer(value) {
    const [time, setTime] = useState(value);
    const [start, setStart] = useState(false);
    const [playAgain, setPlayAgain] = useState(false);
    let timer = useRef(null);
    useEffect(() => {
        timer.current = start ? setInterval(() => setTime((prev) => prev - 1 ), 10) :null;
        return () => clearInterval(timer.current);
    }, [start])
    useEffect(() => {
        if(playAgain)
        setTime(value)
        setPlayAgain(false);
    },[playAgain,value])
    return {
        time,
        setStart,
        setPlayAgain
    };
}
export default useTimer;