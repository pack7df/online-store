import { useState } from "react";
import type { Product } from "../../models/Product";
import ProductDetails from "./products/ProductDetail";
import ProductGallery from "./products/ProductGalery"

const products: Product[] = [
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


function MainView() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    return (
      <main className="p-6 space-y-6">
        <header className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
          <h1 className="text-3xl font-bold text-blue-800">Header</h1>
        </header>

        <div className="flex w-full h-screen">
          <div className="flex-grow bg-blue-100 p-4 overflow-y-auto">
            <section className="bg-white p-4 rounded shadow flex flex-col items-center">
              <ProductGallery products={products} onSelect={(p :Product) => {setSelectedProduct(p)}}></ProductGallery>
            </section>
          </div>

          <div className="flex-shrink-0 bg-gray-200 p-4">
            <section className="bg-white p-4 rounded shadow flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">Details</h2>
              <ProductDetails product={selectedProduct}></ProductDetails>
            </section>
          </div>
        </div>
      </main>
    )
  }
  
  export default MainView