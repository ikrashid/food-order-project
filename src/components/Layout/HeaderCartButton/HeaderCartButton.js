import React, {useContext, useEffect, useState} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) =>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((accum, item) => {return accum + item.amount}, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=> {setBtnIsHighlighted(false)}, 300);
        // when you return within useEffect, its automatically a cleanup function
        return () => {clearTimeout(timer)};
        //Clean up function does not run the first time sideEffect function is run. But after the first time, clean up function runs before the side effect function 
    }, [cartCtx.items])

    
    return(
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;