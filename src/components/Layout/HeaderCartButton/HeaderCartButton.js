import React, {useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((accum, item) => {return accum + item.amount}, 0);
    
    return(
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;