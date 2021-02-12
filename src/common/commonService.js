const COLORS = {
  GREEN: '#54BA18',
  PURPLE: '#445298',
  WHITE:'white'
};

const DIFFICULTY_LEVEL = [
  { value: 'easy', label: 'EASY' },
  { value: 'medium', label: 'MEDIUM' },
  { value: 'hard', label: 'HARD' },
];

const DIFFICULTY_LEVEL_STRINGS = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

const DIFFICULTY_FACTOR = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

export {
  COLORS,
  DIFFICULTY_LEVEL,
  DIFFICULTY_LEVEL_STRINGS,
  DIFFICULTY_FACTOR
};