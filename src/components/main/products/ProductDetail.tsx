import type { Product } from "../../../models/Product";

type ProductDetailsProps = {
    product: Product | null;
  };

const ProductDetails: React.FC<ProductDetailsProps> = ({ product })  => {

    if (!product) {
        return (
          <div className="p-6 text-center text-gray-500">
            No Product Selected.
          </div>
        );
      }
    
      return (
        <section className="max-w-xl mx-auto p-6 bg-white rounded shadow">
          <h2 className="text-3xl font-bold mb-4 text-center">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-64 object-contain mb-4"
          />
          <p className="text-xl text-green-600 font-semibold mb-2">
            Precio: ${product.price.toFixed(2)}
          </p>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="italic text-gray-500">Categoría: {product.category}</p>
        </section>
      );
}

 
export default ProductDetails