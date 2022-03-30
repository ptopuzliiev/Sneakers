import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ id, title, price, imgSrc, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ id, title, price, imgSrc });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <button className={styles.favorite} type="button" onClick={onFavorite}>
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
        src={imgSrc}
        alt="model"
        width={133}
        height={112}
      />
      <p className={styles.text}>{title}</p>
      <div className="d-flex justify-between align-center">
        <div>
          <span className={styles.subText}>Цена:</span>
          <b className={styles.price}>
            <span>{price}</span> руб.
          </b>
        </div>
        <button onClick={onClickPlus} className={styles.plus} type="button">
          <img
            src={isAdded ? 'img/check.svg' : 'img/button-plus.svg'}
            alt="plus"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
