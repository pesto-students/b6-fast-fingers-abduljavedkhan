import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, DIFFICULTY_LEVEL } from '../../common-service';
import TextInput from '../../components/TextInput';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';
import GameLogo from '../../components/GameLogo';
import playIcon from '../../assets/icons/play.svg';
import usePlayer from '../../GameHooks/usePlayer';

const Home = () => {
    const [difficultyLevel, setDifficultyLevel] = useState(1);
    const { player, setPlayer, error, setError } = usePlayer('');
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <GameLogo />
            <TextInput
                text={player}
                setText={setPlayer}
                placeholder="TYPE YOUR NAME"
            />
            { error && <div className="text-primary mb-3 mt-0" >Please Enter Player Name</div>}
            <DropDown
                options={DIFFICULTY_LEVEL}
                setOption={setDifficultyLevel}
                placeholder="DIFFICULTY LEVEL"
            />
            <Link
                to={player !== '' ? `${ROUTES.MAINGAME}/${player}/${difficultyLevel}` : "#"}
                onClick={() => !player && setError(true)}
            >
                <Button icon={playIcon} text="START GAME" />
            </Link>
        </div>
    );
}
export default Home;