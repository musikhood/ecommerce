import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import { ProductInCart } from "../../components/";

function Cart() {
  const cart = useSelector((state) => state.cart);

  let totalPrice = 0;
  cart.forEach((element) => {
    totalPrice = totalPrice + element.cost * element.quantityInCart;
  });

  return (
    <div className="cartPage">
      <div className="cartPage__products">
        {cart.map((product) => (
          <ProductInCart key={product.id} {...product} />
        ))}
      </div>
      <div className="cartPage__finalization">
        <h2>Cart Summary</h2>
        <p>Total price: {totalPrice}zł</p>
      </div>
    </div>
  );
}

export default Cart;
