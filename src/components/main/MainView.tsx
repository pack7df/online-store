import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import ProductDetails from "./products/ProductDetail";
import ProductGallery from "./products/ProductGalery"


type MainViewProps = {
  products: Product[];
  cart: Map<number, number>;
  setCartQuantity : (p : Product, q : number) => void;
};

const MainView: React.FC<MainViewProps> = ({ products, cart, setCartQuantity })  => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [categories,setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string |null>(null);
    const [productsSelected, setProductsSelected] = useState<Product[]>([]);
    

    useEffect(() => {
      const categoriesList = products.map(p => p.category);
      const categoriesSet = new Set(categoriesList);
      setCategories(Array.from(categoriesSet));
      setSelectedCategory(null);
      setProductsSelected(products);
    },[products]);

    const selectedCartQuantityQuery = (selectedProduct!==null)?cart.get(selectedProduct.id) : 0;
    const selectedCartQuantity = selectedCartQuantityQuery??0;
    return (
      <main className="p-6 space-y-6">
        <header className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
          <h1 className="text-3xl font-bold text-blue-800">Header</h1>
        </header>

        <div className="flex w-full h-screen">
            <section className="flex-grow bg-blue-100 p-4 overflow-y-auto bg-white p-4 rounded shadow flex flex-col items-center">
              <select  className="border rounded px-3 py-2"
                value={selectedCategory ?? ""}
                onChange={(e) =>{
                    setSelectedCategory(e.target.value === "" ? null : e.target.value);
                    const productsSelection = products.filter(p => p.category===e.target.value || e.target.value==="");
                    setProductsSelected(productsSelection);
                    if (!productsSelection.some(e => e.id === selectedProduct?.id)) {
                      setSelectedProduct(null);
                    }
                  }
                }
              >
                <option value="">All</option>
                {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
                ))}
              </select>
              <ProductGallery cart={cart} products={productsSelected} onSelect={(p :Product) => {setSelectedProduct(p)}}></ProductGallery>
            </section>
         
              {selectedProduct!==null ? 
              <section className="flex-shrink-0 bg-gray-200 p-4 bg-white p-4 rounded shadow flex flex-col items-center">
                <ProductDetails quantity={selectedCartQuantity} product={selectedProduct} onQuantityChange={setCartQuantity}></ProductDetails>
              </section> : <></>}
            
        </div>
      </main>
    )
}


  
  export default MainView;