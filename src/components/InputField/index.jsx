import React from 'react';
import './index.scss';

export const InputField = ({
  errors,
  onChangeInput,
  value,
  id,
  type,
  labelText,
  moreInfo = '',
}) => {
  const error = errors.find((error) => error.for === id);
  const errorMessage = error ? (
    <div className="input-field__error-message">{error.msg}</div>
  ) : null;
  const inputFieldClassArray = !error
    ? ['input-field']
    : ['input-field', 'input-field_error'];

  return (
    <div className={inputFieldClassArray.join(' ')}>
      <div className="input-field__inner">
        <label htmlFor={id} className="input-field__label">
          {labelText}
        </label>
        <input
          onChange={(e) => onChangeInput(e.target.value)}
          value={value}
          id={id}
          type={type}
          className="input-field__input"
        />
        {errorMessage}
      </div>
      <div className="input-field__more-info">{moreInfo}</div>
    </div>
  );
};
