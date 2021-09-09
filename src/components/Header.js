import React from "react";
import { Cart } from "akar-icons";

export default function Header() {
  return (
    <>
      <div className="p-5 bg-red-500 fixed top-0 w-full z-50 ">
        <div className="flex justify-between sm:w-8/12 m-auto">
          <h1 className="text-gray-50 text-4xl text-center">Store</h1>
          <div className="bg-yellow-500 rounded-full relative w-10 h-10 flex flex-col justify-center items-center">
            <div
              className="bg-gray-800 absolute rounded-full
             text-gray-50 w-8 h-8 flex items-center justify-center bottom-5 left-5"
            >
              0
            </div>
            <Cart size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
