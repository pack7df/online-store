import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import type { Product } from "../../../models/Product";

type ProductDetailsProps = {
    product: Product ;
    quantity : number
    onQuantityChange : (product: Product, value:number) => void;
  };

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, quantity, onQuantityChange })  => {
      return (
        <section className="flex flex-col gap-5 max-w-xl mx-auto p-6 bg-white rounded shadow h-full">
          <p className="text-xl text-green-600 font-semibold mb-2">
            Price: ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-2">
                <ShoppingCartIcon className="shopingCart" />
                <button
                    className="px-2 py-1 bg-red-500 text-white rounded disabled:opacity-50"
                    onClick={() => {
                        onQuantityChange(product, quantity-1);
                    }}
                    disabled={quantity <= 0}
                    >
                        -
                </button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                    onClick={() => 
                        {
                        onQuantityChange(product, quantity+1);
                        }
                    }
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                        +
                </button>
                <p className="text-xl text-green-600 font-semibold mb-2">
                    ${(product.price*quantity).toFixed(2)}
                </p>
          </div>
          <p className="italic text-gray-500">Category: {product.category}</p>
          <h2 className="text-3xl font-bold mb-4 text-center">{product.title}</h2>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-64 object-contain mb-4"
          />
          
           
        </section>
      );
}

 
export default ProductDetails