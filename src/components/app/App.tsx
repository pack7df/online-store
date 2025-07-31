import { useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'


function App() {

  const [isMainViewMode,setIsMainViewMode] = useState(false);

  

  return (
    <div className="main"> 
      <nav  className="nav">
        <button className={`btn 
        ${isMainViewMode ? 'btn-active' : 'btn-inactive'}`} onClick={() => setIsMainViewMode(true)}>
              Products
        </button>
        <button className={`btn btn-flex 
        ${!isMainViewMode ? 'btn-active' : 'btn-inactive'}`} 
        onClick={() => setIsMainViewMode(false)}>
          <ShoppingCartIcon className="shopingCart" />
        </button>
      </nav>
      {isMainViewMode ? <MainView></MainView> : <CartView></CartView>}
    </div>
  )
}

export default App
