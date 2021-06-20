import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../../store/cart-context';


const Cart = (props) =>{
    const cartCtx = useContext(CartContext);
    const onRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }
    const onAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1});
    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => 
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={() => onRemoveHandler(item.id)} 
                onAdd={() => onAddHandler(item)} 
            />
        )}</ul>;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
    <Modal onShowCart={props.onShowCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onShowCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    )

}

export default Cart;