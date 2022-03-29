import React from 'react';
import './card.scss';

const Card = () => {
  return (
    <div className="card">
      <button className="card__favorite" type="button">
        <img src="img/unliked.svg" alt="unliked" width={32} height={32} />
        <img
          className="d-none"
          src="img/heart-liked.svg"
          alt="unliked"
          width={32}
          height={32}
        />
      </button>
      <img
        className="mb-15"
        src="img/img1.png"
        alt="model"
        width={133}
        height={112}
      />
      <p className="card__text mb-15">
        Мужские Кроссовки Nike Blazer Mid Suede
      </p>
      <div className="d-flex justify-between align-center">
        <div>
          <span className="card__subtext d-block">Цена:</span>
          <b className="card__price">12 999 руб.</b>
        </div>
        <button className="card__button" type="button">
          <img src="img/button-plus.svg" alt="plus" width={32} height={32} />
          <img
            className="d-none"
            src="img/check.svg"
            alt="check"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
