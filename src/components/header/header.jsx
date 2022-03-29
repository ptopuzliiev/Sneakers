import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header d-flex justify-between align-center">
      <div className="header__logo">
        <img src="img/logo.svg" alt="logo" width={245} height={45} />
      </div>
      <ul className="d-flex align-center">
        <li className="header__item">
          <img src="img/cart.svg" alt="cart" width={18} height={18} />
          <span className="header__price">1205 руб.</span>
        </li>
        <li className="header__item">
          <img src="img/heart.svg" alt="heart icon" width={20} height={20} />
        </li>
        <li className="header__item">
          <img src="img/user.svg" alt="user icon" width={20} height={20} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
