import React, { useState } from 'react';
import dropDownIcon from '../../assets/icons/dropdown-arrow.svg';

const DropDown = ({ options, setOption, placeholder }) => {
  const [selected, setSelected] = useState('');
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <div>
      <div
        className="flex flex-row justify-between w-64 h-10 opacity-50 rounded-xl pl-3 pt-2 pr-4 border-2 border-solid shadow bg-transparent mt-2 mb-2"
        onClick={() => setDropdownVisibility(!dropdownVisibility)}
      >
        <div className="text-b-option">
          {selected
            ? selected.toUpperCase()
            : placeholder}
        </div>
        <img
          src={dropDownIcon}
          width="18vw"
          alt="dropdown icon"
          style={{ transform: dropdownVisibility && "rotateX(180deg)" }}
        />
      </div>
      {dropdownVisibility && (
        <div className="flex justify-center">
          <div className="shadow list-none rounded-tl-none rounded-br-xl rounded-bl-xl w-60 mt-0 opacity-50 pt-1 pb-1  text-incorrect bg-white  overflow-hidden " >
            {options.map((difficulty) => (
              <li className=" hover:bg-gray-700 pl-2 text-b-option overflow-hidden" key={difficulty.label} onClick={() => { setSelected(difficulty.label); setOption(difficulty.value); setDropdownVisibility(false) }}>
                {difficulty.label.toUpperCase()}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default DropDown;