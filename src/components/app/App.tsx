import { useEffect, useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import type { Product } from '../../models/Product';


const fakeProducts: Product[] = [
  { id: 1, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 2, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 3, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 4, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 5, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 6, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 7, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 8, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 9, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 10, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 11, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 12, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 13, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 14, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 15, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 16, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 17, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 18, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 19, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 20, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 21, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 22, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 23, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 24, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 25, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 26, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 27, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 28, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 29, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 30, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },
  { id: 31, title: 'Gamepad Pro', price: 59.99, image: 'https://picsum.photos/seed/1/600/400', description: "d1", category:"c1" },
  { id: 32, title: 'Headset X', price: 89.9, image: 'https://picsum.photos/seed/2/600/400',  description: "d2", category:"c2" },

  // ...
];


function App() {

  const [isMainViewMode,setIsMainViewMode] = useState(true);
  const [cart, setCart] = useState<Map<number,number>>(new Map());
  const [products, setProducts] = useState<Product[]>([]);
  
  const setCartQuantity = ( product: Product, q: number) => {
    if (product===null) return;
    const newCart = new Map<number,number>(cart);
    newCart.set(product.id,q);
    setCart(newCart);
  }

  useEffect(() => {
    setProducts(fakeProducts);
  },[]);

  const onPayFinished = () => {
    setIsMainViewMode(true);
    setCart(new Map());
  };

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
      {isMainViewMode ? <MainView cart={cart} products={products} setCartQuantity={ setCartQuantity}></MainView> : <CartView cart={cart} onQuantityChange={setCartQuantity} products={products} onPayFinished={onPayFinished}></CartView>}
    </div>
  )
}

export default App
