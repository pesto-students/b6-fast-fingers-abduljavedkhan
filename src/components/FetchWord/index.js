import React from 'react';

const FetchWord = ({dicFetchedWord,userInputLetter}) => {
    
const wordsInsideDiv = dicFetchedWord.split('').map((char,index)=>
<div key={index} className= {userInputLetter && userInputLetter[index] ? char===userInputLetter[index] ? "text-correct" : "text-incorrect" :""}> {char}</div>)
return (
    <div className="inline-flex text-gray-400 text-2xl uppercase m-4" >
        {wordsInsideDiv}
    </div>
);
}                           
export default FetchWord;