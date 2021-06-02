import React, { useState, useEffect } from 'react'

const ProgressTimer = (props) => {
    const {
        size = 120,
        progress = 0
    } = props;
    const [rotateStyle, setRotateStyle] = useState({});
    useEffect(() => {
        setRotateStyle({
            transform: `rotate(${(progress) * 360 / 100}deg)`,
        });
    }, [progress])
    const sizeStyle = { height: size, width: size };
    const clipStyle = { clip: `rect(0 ${size / 2}px ${size}px 0)` };
    return (
        <div className="box-border rounded-full h-24 w-24 items-center relative" style={sizeStyle}>
            <div className="border-gray-500 border-8 border-solid absolute duration-100 box-border rounded-full h-24 w-24" style={sizeStyle} />
            <div className="border-red-500 border-8 border-solid absolute duration-100 box-border rounded-full h-24 w-24" style={{ ...sizeStyle, ...clipStyle, ...rotateStyle }} />
            <div className="border-gray-500 border-8 border-solid absolute duration-100 box-border rounded-full h-24 w-24" style={{ ...sizeStyle, ...clipStyle, opacity: progress >= 50 ? 0 : 1 }} />
            <div className="transform rotate-180 border-red-500 border-8 border-solid absolute duration-100 box-border rounded-full h-24 w-24" style={{ ...sizeStyle, ...clipStyle, opacity: progress >= 50 ? 1 : 0 }} />
            <div className="flex flex-col justify-center items-center absolute duration-100 box-border rounded-full h-24 w-24" style={sizeStyle}>
                <div>{props.children}</div>
            </div>
        </div>
    );
}
export default ProgressTimer;