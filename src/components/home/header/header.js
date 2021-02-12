import React from 'react';
import keyboardIcon from '../../../assets/icons/keyboard.png';
import './header.css';

export const HomeHeader = () => {
  return (
  <div>
      <img
        src={keyboardIcon}
        className="keyboardicon"
        alt="keyboard"
      ></img>
      <h1 className="textcolor">fast fingers</h1>
      <div className="row">
        <div className="line"></div>
        <div className="textcolor">the ultimate typing game</div>
        <div className="line"></div>
        </div>
     </div>
  )
};
