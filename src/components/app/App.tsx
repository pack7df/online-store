import { useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'


function App() {

  const [isMainViewMode,setIsMainViewMode] = useState(false);

  

  return (
    <div className="min-h-screen bg-gray-100"> 
      <nav  className="bg-white shadow p-4 flex justify-evenly items-center">
        <button className={`px-4 py-2 rounded ${
          isMainViewMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`} onClick={() => setIsMainViewMode(true)}>
              Products
        </button>
        <button className={`px-4 py-2 rounded ${!isMainViewMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`} 
        onClick={() => setIsMainViewMode(false)}>
          <ShoppingCartIcon className="h-5 w-5" />
        </button>
      </nav>
      {isMainViewMode ? <MainView></MainView> : <CartView></CartView>}
    </div>
  )
}

export default App
