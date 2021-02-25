import { useState, useEffect } from "react";
const usePlayer = (val) => {
    const [player, setPlayer] = useState(val);
    const [isFirstEntry,setIsFirstEntry] = useState(true);
    const [error, setError] =useState(false);
    useEffect(()=>{
        if(!isFirstEntry)
        setError(!player);
        else if (!!player)
        setIsFirstEntry(false)
    },[player,isFirstEntry])
    return {
        player, 
        setPlayer, 
        error,
        setError
    }
}
export default usePlayer;