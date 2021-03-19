import easyWord from '../data/easy.json';
import mediumWord from '../data/medium.json';
import hardWord from '../data/hard.json';
const domain = "https://ff-backend-ajk.herokuapp.com";
const REGISTER_API_ENDPOINT = domain + "/api/fast-finger/user/signup";
const LOGIN_API_ENDPOINT = domain + "/api/fast-finger/user/login";
const ADD_SCORE_API = domain + "/api/fast-finger/game/score";
const GET_SCORE_API = domain + "/api/fast-finger/game/get-score";


const DIFFICULTY_LEVEL = [
  { label: "Easy", value: 1 },
  { label: "Medium", value: 1.5 },
  { label: "Hard", value: 2 }
];

const DIFFICULTY_FACTOR = (difficultyFactor) => {
  if (difficultyFactor >= 2) {
    return "hard";
  }
  else if (difficultyFactor >= 1.5) {
    return "medium";
  }
  else return "easy"
}

const GET_RANDOM_WORD = (difficultyLevel) => {
  switch (difficultyLevel) {
    case 'easy':
      return easyWord[Math.floor(Math.random() * easyWord.length)];
    case 'medium':
      return mediumWord[Math.floor(Math.random() * mediumWord.length)];
    case 'hard':
      return hardWord[Math.floor(Math.random() * hardWord.length)];
    default:
      return easyWord[Math.floor(Math.random() * easyWord.length)];
  }
}

const ROUTES = {
  LOGIN:'/',
  SIGNUP:'/signup',
  HOME: '/home',
  MAINGAME: '/game',
};

const DIFFICULTY_FACTOR_INCREMENT = 0.01;

const timeFormat = (time) => `${Math.floor(time / 60)} : ${Math.floor(time % 600 / 10)}`;

const timeForWord = (difficulty, wordLength) => Math.ceil(wordLength / difficulty) > 2 ? Math.ceil(wordLength / difficulty) * 100 : 200;

export {
  REGISTER_API_ENDPOINT,
  LOGIN_API_ENDPOINT,
  ADD_SCORE_API,
  GET_SCORE_API,
  DIFFICULTY_LEVEL,
  ROUTES,
  DIFFICULTY_FACTOR_INCREMENT,
  GET_RANDOM_WORD,
  DIFFICULTY_FACTOR,
  timeFormat,
  timeForWord
};