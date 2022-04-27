import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import { ProductInCart } from "../../components/";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
      <div className="cartPage__container">
        <div className="cartPage__finalization">
          <h2>Cart Summary</h2>
          <div className="cartPage__box">
            <div className="price">
              <p>Total price</p>
              <p>{totalPrice}zł</p>
            </div>
            <div className="checkout">
              <Link to="/">CHECKOUT</Link>
            </div>
          </div>
        </div>
        <div className="cartPage__button">
          <Link to="/">
            <ArrowBackIosIcon /> Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
