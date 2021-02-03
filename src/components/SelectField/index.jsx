import React from 'react';
import './index.scss';

export const SelectField = ({ onChangeSelect, id, labelText, options }) => {
  return (
    <div className="select-field">
      <label htmlFor={id} className="select-field__label">
        {labelText}
      </label>
      <select
        onChange={(e) => onChangeSelect(e.target.value)}
        id={id}
        className="select-field__select"
      >
        {options.map(({ city }, index) => {
          return (
            <option key={index} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
};
