import React from 'react';
import CartList from './CartList';
import CartItem from './UI/cart-item/CartItem';

const Drawer = ({ closeCart, items = [] }) => {
  return (
    <div className="overlay" onClick={closeCart}>
      <div
        className="drawer d-flex flex-column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-between align-center mb-30">
          <h2>Корзина</h2>
          <button onClick={closeCart} className="closeCart" type="button">
            <img
              src="img/close-btn.svg"
              alt="close btn"
              width={32}
              height={32}
            />
          </button>
        </div>

        <div className="drawerItems mb-30">
          {items.map((item, idx) => (
            <CartItem
              key={idx}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
        <CartList />
        <button className="greenButton" type="button">
          Оформить заказ
          <img
            className="greenButton__icon"
            src="img/arrow-right.svg"
            alt="arrow right"
            width={13}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};

export default Drawer;
