import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm = props => {
  const { addItem } = useContext(CartContext);
  const addItemClickHandler = event => {
    event.preventDefault();
    console.log(props.item);
    addItem(props.item);
  };

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: `amount${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemClickHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
