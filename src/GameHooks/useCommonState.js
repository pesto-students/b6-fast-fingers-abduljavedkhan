import React from 'react';
export const initialState = { start: false, playAgain: false, totalTime: 0 };

export const gameControl = (state, action) => {
    switch (action.type) {
        case 'start':
            return { start: true, playAgain: false, totalTime: action.payload }
        case 'playAgain':
            return { ...state, playAgain: !state.playAgain, totalTime: action.payload };
        default:
            return state;
    }
}



