import { useState } from "react";
import { Product } from "../../../models/Product";

type ProductGalleryProps = {
    products: Product[];
    onSelect: (p: Product) => void;
  };

const ProductGallery: React.FC<ProductGalleryProps> = ({ products, onSelect })  => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const onClick = (p : Product) => {
      setSelectedId(p.id);
      if (onSelect) onSelect(p);
    }

    return (
        <div className="w-full aspect-[16/9] overflow-y-auto p-4 bg-gray-50">
          <div className="flex flex-wrap justify-start gap-4">
            {products.map((product) =>  {
              const isSelected = product.id === selectedId;
              return (
                <div
                  key={product.id}
                  onClick={() => onClick(product)}
                  className={`
                  flex flex-col items-center border rounded-lg p-4 shadow cursor-pointer w-40
                  ${isSelected ? 'border-blue-600 ring-2 ring-blue-400' : 'border-gray-300'}
              `}
                >
                  <p className="text-sm font-semibold mb-2">{product.title}</p>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-28 object-cover rounded"
                  />
                  <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
}

 
export default ProductGallery