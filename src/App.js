import React, {Fragment} from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import Cart from './components/Cart/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
