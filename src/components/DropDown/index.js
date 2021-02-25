import React, { useState } from 'react';
import './index.css'
import dropDownIcon from '../../assets/icons/dropdown-arrow.svg';

const DropDown = ({ options, setOption, placeholder }) => {
  const [selected, setSelected] = useState('');
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <div>
      <div
        className="input-field-difficulty"
        onClick={() => setDropdownVisibility(!dropdownVisibility)}
      >
        <div className="text-b-option text-lg">
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
          <div className="dropdown" >
            {options.map((difficulty) => (
              <li key={difficulty.label} onClick={() => { setSelected(difficulty.label); setOption(difficulty.value); setDropdownVisibility(false) }}>
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