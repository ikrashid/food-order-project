import React from 'react';

const CartContext = React.createContext({
    // improves intellisense
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;