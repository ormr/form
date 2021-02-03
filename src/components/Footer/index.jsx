import React from 'react';
import './index.scss';

export const Footer = ({ lastCommitDate }) => {
  const date = lastCommitDate.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
  });

  const time = lastCommitDate.toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <div className="form-footer">
      <button className="form-footer__button" type="submit">
        Изменить
      </button>
      <div className="form-footer__last-commit">
        последние изменения {date} в {time}
      </div>
    </div>
  );
};
