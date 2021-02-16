import React, { useState, useEffect } from 'react';
import dictionary from "../../../data/dictionary.json";
import {
  COLORS,
  DIFFICULTY_FACTOR
} from '../../../common/commonService';
import { Timer } from '../../CountDownTimer/Timer';
import "./gamearea.css";

export const GameArea = ({ history }) => {
  //stores user input
  const [userInputLetter, setUserInputLetter] = useState("");
  //store the randomly fetched word from dictionary
  const [dicFetchedWord, setDicFetchedWord] = useState(null);
  //store the status of fetch
  const [fetchWord, setFetchWord] = useState(true);
  const [difficultyFactor, setDifficultyFactor] = useState(1);

  //get random word from the dictionary
  const getDictinaryWord = () => {
    const newDictionaryWord = dictionary.filter((word) => {
      if (difficultyFactor < DIFFICULTY_FACTOR.medium)
        return word.length <= 4;
      if (difficultyFactor < DIFFICULTY_FACTOR.hard)
        return word.length <= 8 && word.length >= 5;
      return word.length > 8;
    });
    const randomWord = Math.floor(Math.random() * Math.floor(newDictionaryWord.length));
    return newDictionaryWord[randomWord].toUpperCase();
  };

  useEffect(() => {
    const player = localStorage.getItem("player");
    const difficultyLevel = localStorage.getItem("difficultyLevel");
    setDifficultyFactor(DIFFICULTY_FACTOR[difficultyLevel]);
    // eslint-disable
  }, []);

  //fetch the random word
  useEffect(() => {
    if (fetchWord) {
      setDicFetchedWord(getDictinaryWord);
      setFetchWord(false);
    }
    if (
      userInputLetter &&
      dicFetchedWord &&
      userInputLetter.toLowerCase() === dicFetchedWord.toLowerCase()
    ) {
      setDifficultyFactor(difficultyFactor + 0.01);
      setFetchWord(true);
      setUserInputLetter("");
      // setSeconds(0);
      // setMicroSeconds(0);
      // setTimer(0);
    }
    // eslint-disable-next-line
  }, [fetchWord, userInputLetter]);

  //display color based on input
  const color = (i, char) => {
    if (userInputLetter && userInputLetter[i] === char.toLowerCase())
      return COLORS.GREEN;
    else if (
      userInputLetter &&
      userInputLetter[i] !== char.toLowerCase() &&
      userInputLetter.length - 1 >= i
    )
      return COLORS.PURPLE;
    return COLORS.WHITE;
  };

  // store user input word
  const handleInputWord = (e) => {
    const { value } = e.target;
    setUserInputLetter(value);
  };

  return (
    <div >
      <Timer timeForAWord={5} />
      <div className="dic-fetch-word">
        {dicFetchedWord && [...dicFetchedWord].map((letter, i) => (
          <h1 style={{ color: color(i, letter) }} key={i}>
            {letter}
          </h1>
        ))}
      </div>
      <input
        ref={(input) => input && input.focus()}
        type="text"
        className="user-input-word"
        value={userInputLetter}
        onChange={handleInputWord}
      />
    </div>
  );
};