import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../../UI/Input/Input';

const MealItemForm = (props) =>{
    const amountInputRef = useRef(); //storing actual DOM node here
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||enteredAmountNumber < 1 ||enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    } 

    return (
        <form className={classes.form} onSubmit = {submitHandler}>
            <Input label="Amount" ref = {amountInputRef} input={{               
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1',
                step: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid ? <p>Please enter a valid amount 1 through 5</p> : ''}
        </form>
    )
}

export default MealItemForm; 