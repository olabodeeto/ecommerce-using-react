import React from "react";
import uuid from "react-uuid";
import { CircleX, CircleMinus, CirclePlus } from "akar-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, decrement, increment } from "../Store/ProductSlice";
import Header from "./Header";

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const toSum = cart.map((product) => product.price * product.qty);
  let sum = toSum.reduce(function (a, b) {
    return a + b;
  }, 0);
  sum = Math.round((sum + Number.EPSILON) * 100) / 100;
  console.log("total is ", sum);
  console.log(toSum);
  const items = cart.map((product) => (
    <div
      key={uuid()}
      className="flex gap-x-5 justify-between 
  bg-red-100 p-2 mt-4 text-gray-700"
    >
      <div>
        <img
          className="object-contain h-14 w-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">${product.price}</div>
      <div className="flex gap-x-4 justify-center items-center">
        {product.qty}
      </div>
      <div className="flex gap-x-4 justify-center items-center">
        <CircleX
          size={18}
          className="text-red-500"
          onClick={() => dispatch(updateCart(product))}
        />
        <CircleMinus size={18} onClick={() => dispatch(decrement(product))} />
        <CirclePlus size={18} onClick={() => dispatch(increment(product))} />
      </div>
    </div>
  ));
  return (
    <>
      <Header />
      <div className=" sm:w-8/12 m-auto mt-20 p-4">
        <h2 className="text-2xl font-semibold text-gray-700 sm:mt-12">
          Your cart
        </h2>
        <div className="rounded-lg mt-10">
          <div className="flex gap-x-5 justify-between bg-red-500 p-2 text-gray-50">
            <div>Items</div>
            <div>Price</div>
            <div>Qty</div>
            <div>Action</div>
          </div>

          {items}
          <div className="bg-gray-800 p-2 text-gray-50 mt-20 mb-20">
            Total cost: ${sum}
          </div>
        </div>
      </div>
    </>
  );
}
