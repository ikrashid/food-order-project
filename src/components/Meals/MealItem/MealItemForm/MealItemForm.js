import React from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = () =>{
    return (
        <form className={classes.form}>
            <h4>Amount</h4> <input type="text"></input>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;