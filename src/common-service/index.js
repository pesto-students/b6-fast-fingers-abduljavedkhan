import easyWord from '../data/easy.json';
import mediumWord from '../data/medium.json';
import hardWord from '../data/hard.json';

const DIFFICULTY_LEVEL = [
  {label:"Easy", value:1},
  {label:"Medium", value:1.5},
  {label:"Hard", value:2}
];

const DIFFICULTY_FACTOR = (difficultyFactor)=>{
  if(difficultyFactor >=2 ){
      return "hard";
  }
  else if(difficultyFactor >=1.5){
      return "medium";
  }
  else return "easy"
}

const GET_RANDOM_WORD = (difficultyLevel) => {
switch (difficultyLevel) {
    case 'easy' :
        return easyWord[Math.floor(Math.random() * easyWord.length)];
    case 'medium' :
        return mediumWord[Math.floor(Math.random() * mediumWord.length)];
    case 'hard' :
        return hardWord[Math.floor(Math.random() * hardWord.length)];
    default :
        return easyWord[Math.floor(Math.random() * easyWord.length)];
  }
}

const ROUTES = {
  HOME: '/',
  MAINGAME: '/game',
};

const DIFFICULTY_FACTOR_INCREMENT = 0.01;

const timeFormat = (time) => {
  return `${Math.floor(time/6000)} : ${Math.floor(time%6000/100)} : ${time%100}`;
}

const timeForWord = (difficulty,wordLength) => {
    return Math.ceil(wordLength / difficulty) > 2 ? Math.ceil(wordLength / difficulty) * 100 : 200;
}

export {
  DIFFICULTY_LEVEL,
  ROUTES,
  DIFFICULTY_FACTOR_INCREMENT,
  GET_RANDOM_WORD,
  DIFFICULTY_FACTOR,
  timeFormat,
  timeForWord
};