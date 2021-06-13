import React, {Fragment} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
const MealItem = ({name, description, price}) =>{
    const priceTransformed = `$${price.toFixed(2)}`;
    return (
        <Fragment>
            <li className={classes.meal}>
                <div>
                    <h3>{name}</h3>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>{priceTransformed}</div>
                </div>
                <MealItemForm/>
            </li>
        </Fragment>
    )
}

export default MealItem;