import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = (props) =>(
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>
)

export default HeaderCartButton;