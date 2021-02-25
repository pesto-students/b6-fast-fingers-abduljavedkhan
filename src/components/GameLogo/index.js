import React from 'react';
import keyboardIcon from '../../assets/icons/keyboard.png';

const GameLogo = () => {
    return (
        <div className="text-center text-primary">
            <img className="w-36 h-16 ml-24 mb-2" src={keyboardIcon} alt="logo" />
            <div className="text-5xl mb-3">fast finger</div>
            <div className="text-base mb-3">____________the ultimate typing game___________</div>
        </div>
    );
}
export default GameLogo;