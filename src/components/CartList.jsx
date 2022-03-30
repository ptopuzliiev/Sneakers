import React from 'react';

const CartList = () => {
  return (
    <dl className="mb-5">
      <div className="d-flex justify-between align-end mb-20">
        <dt>Итого:</dt>
        <span className="cart-list__decor"></span>
        <dd>
          <b>21 498 руб.</b>
        </dd>
      </div>

      <div className="d-flex justify-between align-end mb-20">
        <dt>Налог 5%:</dt>
        <span className="cart-list__decor"></span>
        <dd>
          <b>1074 руб.</b>
        </dd>
      </div>
    </dl>
  );
};

export default CartList;
