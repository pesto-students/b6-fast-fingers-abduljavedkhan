const addScoresToLocal = (score) => {
    try {
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(!(scores instanceof Array)) throw TypeError("Not an Array");
    localStorage.setItem('scores', JSON.stringify([...scores,score]));
    } catch {
        localStorage.setItem('scores',JSON.stringify([score]))
    }
}

const getScoresFromLocal = () => {
    try {
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(!(scores instanceof Array)) throw TypeError("Not an Array");
    return scores;
    }
    catch {
        return [];
    } 
}
export {addScoresToLocal, getScoresFromLocal}