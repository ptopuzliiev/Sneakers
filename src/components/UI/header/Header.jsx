import React from 'react';
import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header + ' d-flex justify-between align-center'}>
      <div className={styles.logo}>
        <img src="img/logo.svg" alt="logo" width={245} height={45} />
      </div>
      <ul className="d-flex align-center">
        <li className={styles.item}>
          <button onClick={props.openCart} className={styles.btn} type="button">
            <img src="img/cart.svg" alt="cart" width={18} height={18} />
            <span className={styles.price}>1205 руб.</span>
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} type="button">
            <img src="img/heart.svg" alt="heart icon" width={20} height={20} />
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} type="button">
            <img src="img/user.svg" alt="user icon" width={20} height={20} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
