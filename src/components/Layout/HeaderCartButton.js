import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';

const HeaderCartButton = props => {
  const { items } = useContext(CartContext);
  const numItems = items.reduce((curr, item) => curr + item.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default HeaderCartButton;
