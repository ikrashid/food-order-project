import React, {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImg from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart = {props.onShowCart}/>
            </header>
            <div className={classes['main-image']}><img src={mealsImg} alt="A table of food"/></div>
        </Fragment>
    )
}

export default Header;