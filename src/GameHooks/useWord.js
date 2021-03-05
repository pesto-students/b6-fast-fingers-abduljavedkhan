import { useEffect, useState } from "react";
import { GET_RANDOM_WORD, DIFFICULTY_FACTOR } from '../common-service';

const useWord = (difficulty, onWordMatch) => {
    const [word, setWord] = useState(GET_RANDOM_WORD(DIFFICULTY_FACTOR(difficulty)));
    const [text, setText] = useState('');
    useEffect(() => {
        if (word !== '' && word === text) {
            const newWord = GET_RANDOM_WORD(DIFFICULTY_FACTOR(difficulty));
            setWord(newWord);
            onWordMatch(newWord);
            setText('');
        }
    }, [text, word, difficulty, onWordMatch]);
    return { word, text, setText }
}
export default useWord;