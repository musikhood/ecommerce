import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import { ProductInCart } from "../../components/";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cartPage">
      {cart.map((product) => (
        <ProductInCart key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Cart;
