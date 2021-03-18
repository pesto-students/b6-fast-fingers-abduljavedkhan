import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';
import GameLogo from '../../components/GameLogo';
import playIcon from '../../assets/icons/play.svg';
import logout from '../../assets/icons/logout.svg';
import { ROUTES, DIFFICULTY_LEVEL } from '../../common-service';

const Home = props => {
    const [difficultyLevel, setDifficultyLevel] = useState(1);
    const player = props.location.player;
    
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <GameLogo />
            <div className="text-secoundry text-xl font-mono font-bold uppercase mb-4 mt-4"> Welcome!!! {player} </div>
            <DropDown
                options={DIFFICULTY_LEVEL}
                setOption={setDifficultyLevel}
                placeholder="DIFFICULTY LEVEL"
            />
            <Link
                to= { player !== '' ? `${ROUTES.MAINGAME}/${player}/${difficultyLevel}` : "#" }
                onClick={() => !player }
            >
                <Button icon={playIcon} text="START GAME" />
            </Link>
            <Link to={ROUTES.LOGIN} className="mt-4 mb-4 ml-1 mr-8">
        <Button icon={logout} className="text-primary  pl-2 pr-4" text="LOG OUT" /> </Link>
        </div>
    );
}
export default Home;