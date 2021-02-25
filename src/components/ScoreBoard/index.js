import React from 'react'
import { timeFormat } from '../../common-service';

const ScoreBoard = ({ scores }) => {
    return (
        <>
        <div className=" border-red-700 min-h-md w-72 border-2 ml-2 rounded-lg border-solid mb-1 overflow-hidden mr-10">
            <div className="text-lg text-primary">
                SCORE BOARD
        </div>
            <div className="flex flex-col justify-between py-1 px-2 mx-3">
                {scores.map((score, index) =>
                    <div key={index} className="flex flex-row justify-around py-2 px-1">
                    <span className="text-xs mr-2 text-primary">
                        {score === Math.max(...scores) ? " Best score" : " "}
                    </span>
                    <div  className="ml-2 pl-4" >
                        GAME : {index + 1} 
                    </div>
                    <div className="ml-3 pl-2">
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