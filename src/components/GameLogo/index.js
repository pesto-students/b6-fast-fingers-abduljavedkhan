import React from 'react';
import keyboardIcon from '../../assets/icons/keyboard.png';

const GameLogo = () => {
    return (
        <div className="text-center text-primary">
            <img className="w-32 h-16 ml-16 mb-2" src={keyboardIcon} alt="logo" />
            <div className="text-4xl mb-3">fast finger</div>
            <div className="flex justify-center">
            <div className="m-1 self-center h-1 w-14 bg-red-500"></div>
            <div className="text-xs mb-1">the ultimate typing game</div>
            <div className="m-1 self-center h-1 w-14 bg-red-500"></div>
            </div>
        </div>
    );
}
export default GameLogo;