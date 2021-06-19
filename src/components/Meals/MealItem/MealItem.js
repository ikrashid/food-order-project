import React, {Fragment, useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({name, description, price, id}) =>{
    const cartCtx = useContext(CartContext); // cartCtx is basically the value prop from CartProvider
    const priceTransformed = `$${price.toFixed(2)}`;

    const addToCartHandler = (amountEntered) =>{
        cartCtx.addItem({
            id: id,
            price: price, 
            amount: amountEntered,
            name: name
        })
    }
    return (
        <Fragment>
            <li className={classes.meal}>
                <div>
                    <h3>{name}</h3>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>{priceTransformed}</div>
                </div>
                <MealItemForm id = {id} onAddToCart={addToCartHandler}/>
            </li>
        </Fragment>
    )
}

export default MealItem;