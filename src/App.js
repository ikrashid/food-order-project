import React, {useState} from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import Cart from './components/Cart/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [showCart, setShowCart] = useState(false);

  const onShowCartHandler = () =>{
    setShowCart((prevState)=> !prevState);
  }

  return (
    <CartProvider>
      {showCart ? (<Cart onShowCart={onShowCartHandler}/>) : ''}
      <Header onShowCart={onShowCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
