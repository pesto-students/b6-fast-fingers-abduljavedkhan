import React from 'react';

const TextInput = ({ text, setText, placeholder = '' }) => {
    return (
        <div className="my-2 mx-4">
            <input
            autoFocus
                className={"bg-gray-500  text-secoundry  rounded-lg w-64 h-8 mb-1 uppercase text-left pl-4"}
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={({ target: { value } }) => {
                    setText(value.toLowerCase());
                }}
            />
        </div>
    );
}
export default TextInput;