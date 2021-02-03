import React from 'react';
import './index.scss';

export const Header = ({ name }) => {
  return (
    <div className="header">
      <h1 className="header__title">
        Здравствуйте, <span className="header__title_name">{name}</span>
      </h1>
    </div>
  );
};
