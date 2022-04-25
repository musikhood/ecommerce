import React from "react";
import "./productInCart.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { toggleProduct, removeProduct } from "../../actions/actions";
function ProductInCart({ id, name, img, cost, rate }) {
  const dispatch = useDispatch();
  return (
    <div className="productInCart">
      <div className="productInCart__img-box">
        <img src={img} />
      </div>
      <div className="productInCart__about">
        <div className="productInCart__name">
          <h2>{name}</h2>
        </div>
        <div className="productInCart__cost">
          <p>{cost}</p>
        </div>
        <div className="productInCart__rate">{rate}</div>
      </div>
      <div
        className="productInCart__button"
        onClick={() => {
          dispatch(toggleProduct(id));
          dispatch(removeProduct(id));
        }}
      >
        <RemoveIcon />
      </div>
    </div>
  );
}

export default ProductInCart;
