import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch(action.type){
        case('ADD_ITEM'):
            const updatedItems = state.items.concat(action.payload);
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        default:
            return defaultCartState;
    }
}

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction]  = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', payload: item})
    }

    const removeItemFromCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE_ITEM', payload: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;