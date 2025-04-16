import React from "react";
import CartCard from "@/features/cart/components/CartCard";
import CheckoutForm from "@/features/cart/components/CheckoutForm";

const CartPage = () => {
  return (
    <div className="flex flex-wrap h-screen justify-between flex-row space-x-0.5 items-center bg-black">
      <CartCard />
      <CheckoutForm />
    </div>
  );
};

export default CartPage;
