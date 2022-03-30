import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
  return (
    <div className={styles.item + ' d-flex align-center mb-20'}>
      <img src={props.imgSrc} alt="sneakers" width={70} height={70} />
      <div className="ml-15 mr-15">
        <p className={styles.text}>{props.title}</p>
        <b className={styles.price}>{props.price}</b>
      </div>
      <button className={styles.closeCart} type="button">
        <img src="img/close-btn.svg" alt="close btn" width={32} height={32} />
      </button>
    </div>
  );
};

export default CartItem;
