

import type { Product } from "../../models/Product";
import ProductDetails from "../main/products/ProductDetail";

type ChartGalleryProps = {
    products: Product[];
    cart: Map<number, number>;
    onQuantityChange : (product: Product, value:number) => void;
  };

const CartGallery: React.FC<ChartGalleryProps> = ({ products, cart, onQuantityChange })  => {
    const cartProducts = products.filter(p => {
        const quantity = cart.get(p.id);
        return (quantity) && (quantity>0);
    });

    return (
        <div className="w-full aspect-[16/9] overflow-y-auto p-4 bg-gray-50">
          <div className="flex flex-wrap justify-start gap-4">
            {cartProducts.map((p) =>  {
              var quantity = cart.get(p.id);
              if (!quantity) quantity = 0;
              return (
                <div
                  key={p.id}
                  className={`
                  flex flex-col items-center border rounded-lg p-4 shadow cursor-pointer
                    border-gray-300
                   `}
                >
                    <ProductDetails product={p} quantity={quantity} onQuantityChange={onQuantityChange}></ProductDetails>
                </div>
              );
            })}
          </div>
        </div>
      );
}

 
export default CartGallery