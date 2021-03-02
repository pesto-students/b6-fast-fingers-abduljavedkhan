import React from 'react'
import { timeFormat } from '../../common-service';

const ScoreBoard = ({ scores }) => {

    return (
        <>
        <div className=" border-red-700 min-h-md w-72 border-2 ml-7 rounded-lg border-solid mb-1 overflow-hidden mr-10">
            <div className="text-lg text-primary">
                SCORE BOARD
        </div>
            <div className="flex flex-col justify-between py-2 px-2 mx-4">
                {scores.map((score, index) =>
                    <div key={index} 
                    className= { score === Math.max(...scores) ? "flex flex-row justify-even text-sm text-primary" : "flex flex-row justify-even py-0 px-1 ml-4 text-base"}    
                    >
                    <span>
                        {   score === Math.max(...scores) ? "Best" : " "}
                    </span>
                    <div  className="ml-5 mr-4  " >
                        GAME : {index + 1} 
                    </div>
                    <div className="ml-6">
                    <div>
                        {timeFormat(score)}
                    </div>
                    </div>
                </div>
                 )}
            </div>
        </div>
        </>
    );
}
export default React.memo(ScoreBoard,({scores: prevScores },{scores: newScores})=>prevScores.length === newScores.length);