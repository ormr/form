import React from 'react';
import './index.scss';

export const CheckField = ({ onChecked }) => {
  return (
    <div className="check-field">
      <div className="check-field__inner">
        <label htmlFor="checkbox" className="check-field__label">
          Я согласен
        </label>
        <input
          onChange={(e) => onChecked(e.target.checked)}
          id="checkbox"
          type="checkbox"
          className="check-field__input"
        />
      </div>
      <div className="check-field__info">
        принимать актуальную информацию на емейл
      </div>
    </div>
  );
};
