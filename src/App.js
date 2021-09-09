import React, { useEffect, useState } from "react";
import { Cart } from "akar-icons";
import loadingimg from "./assets/loadingimgg.gif";
import uuid from "react-uuid";
import Header from "./components/Header";
function App() {
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState("block");
  // const [productShow, setproductShow] = useState("hidden");

  const productList = products.map((product) => (
    <div key={uuid()} className="relative w-full h-80 bg-white py-4 mt-10">
      <div className="w-full">
        <div>
          <img
            className="object-contain h-48 w-full"
            src={product.image}
            alt=""
          />
        </div>
        <div
          className="bg-red-600 text-gray-50 p-2 
        w-20 absolute top-0"
        >
          ${product.price}
        </div>
        <div
          className="bg-red-400 text-gray-50 p-2 
        w-12 h-12 rounded-full flex justify-center items-center
        absolute bottom-10 z-20 right-2"
        >
          +<Cart size={24} />
        </div>
        <div
          className="bg-yellow-400 text-gray-800 p-2 
        w-full absolute bottom-0"
        >
          <p className="p-2 text-sm"> {product.title.substring(0, 40)}...</p>
        </div>
      </div>
    </div>
  ));
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setisLoading("hidden");
        setproducts(json);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-red-600 h-full sm:p-4 md:p-8">
        <div
          className={`h-screen w-full ${isLoading} bg-black flex flex-col justify-center items-center text-gray-100`}
        >
          <h1>Loading stuffs</h1>
          <img className="w-60" src={loadingimg} alt="" />
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-4 
        items-end bg-red-400 py-5 px-1 sm:p-5 mt-10 md:mt-20"
        >
          {productList}
        </div>
      </div>
    </>
  );
}

export default App;
