import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img />
      </div>
    </Fragment>
  );
};

export default Header;
