import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-6 p-6">
      <div className="flex justify-end">
        <button
          className="p-2 m-2 bg-amber-500 font-semibold rounded-xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <h1 className="font-bold text-xl mb-4 text-center">Cart</h1>

      {cartItems.length === 0 && (
        <div>
        <h3 className="text-center font-medium p-3">
          OOPS!!! Look's like your cart is empty
        </h3>
        <h3 className="text-center font-medium p-3">
          Browse our delicious menu and add items for us to deliver at your
          doorstep
        </h3>
        </div>
      )}

      <div className="w-8/12 m-auto rounded-md">
        <Itemlist items={cartItems} cart={true} />
      </div>
    </div>
  );
};

export default Cart;
