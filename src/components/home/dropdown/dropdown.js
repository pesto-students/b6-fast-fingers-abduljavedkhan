import React from "react";
import "./dropdown.css";


export const Dropdown = ({ data, value, onChange = () => { } }) => {
  return (
    <select className="row dropdown" value={value} onChange={onChange}>
      {data.map(item => (
        <option className="option" key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
};
