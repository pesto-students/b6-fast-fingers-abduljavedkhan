import React from 'react';
import accountIcon from '../../assets/icons/person.svg';
import gamepadIcon from '../../assets/icons/gamepad.svg';

import { DIFFICULTY_FACTOR } from '../../common-service';

import {timeFormat} from '../../common-service';

const  GameHeader = ({playerName, difficulty, score}) => {
    return (
        <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start items-center text-left text-primary uppercase">
        <div className="flex flex-row justify-start mx-3 my-3 pr-3">
                <img src={accountIcon} alt="icon" width="25vw" className="mr-4" />
                <h3>
                    {`PLAYER_${playerName}`}
                </h3>
           </div> 
            <div className="flex flex-row justify-start  ">
                <img src={gamepadIcon} alt="icon" width="25vw" className="ml-2 mr-3" />
                <h3>
                    {`LEVEL : ${DIFFICULTY_FACTOR(difficulty)}`}
                </h3>
            </div>
        </div>
        <div className="flex flex-col text-right text-lg text-primary mr-5">
                <h3 className="text-xl mb-2">
                    {`fast fingers`}
                </h3>
                <h3>
                    {`SCORE: ${timeFormat(score)}`}
                </h3>
        </div>
    </div>
    )
}

export default React.memo(GameHeader)
