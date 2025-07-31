import { useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';


function App() {

  const [isMainViewMode] = useState(false);

  return (
    <div> 
      <nav>Navs</nav>
      {isMainViewMode ? <MainView></MainView> : <CartView></CartView>}
    </div>
  )
}

export default App
