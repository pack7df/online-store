import { useSelector } from "react-redux";
import type { Product } from "../../models/Product"
import CartGallery from "./CartGalery"
import { useState } from "react";
import { LoadingOverlay } from "../LoadingOverlay";


type CartViewProps = {
  products: Product[];
  cart: Map<number, number>;
  onQuantityChange : (product: Product, value:number) => void;
  onPayFinished : () => void;
};


const CartView: React.FC<CartViewProps> = ({ products, cart, onQuantityChange, onPayFinished })  => {
  const [isPaying, setIsPaying] = useState(false);
  const totalToPay = products.reduce((acc,p) => {
    const currentQuantity = cart.get(p.id)??0;
    return acc + currentQuantity*p.price;
  },0);
  console.log(totalToPay)
  return (
    <main className="p-6 space-y-6">
      {isPaying ? <LoadingOverlay></LoadingOverlay>: <></>}
      {totalToPay>0 ? <>
        <header className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
          <p className="text-xl text-green-600 font-semibold mb-2">
            Total to pay: ${(totalToPay).toFixed(2)}
          </p>
          <button
            className="
              bg-green-600 text-white px-6 py-2 rounded 
              hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
              transition
            "
            onClick={() => {
              setIsPaying(true);
              setTimeout(() => {
                setIsPaying(false);
                onPayFinished();
              }, 8000);
            }}
          >
            Pay
          </button>
        </header>
        <section className="bg-white p-4 rounded shadow flex flex-col items-center">
          <CartGallery products={products} cart={cart} onQuantityChange={onQuantityChange}></CartGallery>
        </section>
      </> : <></>}
      
    </main>
  )
}
  
  export default CartView