import React from 'react';

const TextInput = ({ text, setText, placeholder = '' }) => {
    return (
        <div className="my-4">
            <input
            autoFocus
                className={"bg-gray-500  text-secoundry w-72 h-10 mb-1  rounded-md uppercase text-left pl-4"}
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