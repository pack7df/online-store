import { useEffect, useState } from 'react';
import './App.css'
import MainView from '../main/MainView';
import CartView from '../cart/CartView';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Product } from '../../models/Product';


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


  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = (!response.ok ? [] : await response.json() as Product[]);
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts();
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
