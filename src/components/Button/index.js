import React from 'react';

const Button = ({ icon, text, onClick }) => {
    return (
            <div className="flex flex-row justify-center items-center text-lg" onClick={onClick}>
                {icon ? <img className="w-8 h-8 mr-2" src={icon} alt="icon" /> : null}
                <span className="text-primary">{text}</span>
            </div>
    );
}
export default Button;