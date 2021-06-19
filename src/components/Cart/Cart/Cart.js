import React from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal/Modal';

const Cart = (props) =>{
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => <li key={item.id}>{item.name}</li>)}</ul>;

    return (
    <Modal onShowCart={props.onShowCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Amount</span>
            <span>35.99</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onShowCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )

}

export default Cart;