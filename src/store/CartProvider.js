import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM' ){        
        let updatedItems;
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
        //const updatedItems = state.items.concat(action.payload);
        const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
        const existingItem = state.items[existingItemIndex];
        if(existingItem){
            const updatedItem = {...existingItem, amount: existingItem.amount + action.payload.amount}
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.payload)
        }
        
        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if (action.type === 'REMOVE_ITEM'){           
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.payload);
        }else{
            let updatedItem = {...existingItem, amount: existingItem.amount-1}
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
                  
        return{
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else{
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