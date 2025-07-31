import { useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';


function App() {

  const [isMainViewMode,setIsMainViewMode] = useState(false);

  return (
    <div> 
      <nav>
        <button onClick={() => setIsMainViewMode(true)}>Home</button>
        <button onClick={() => setIsMainViewMode(false)}>Cart</button>
      </nav>
      {isMainViewMode ? <MainView></MainView> : <CartView></CartView>}
    </div>
  )
}

export default App
