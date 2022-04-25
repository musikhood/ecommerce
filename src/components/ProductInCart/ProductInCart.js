import React from "react";
import "./productInCart.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  toggleProduct,
  removeProduct,
  addQuantity,
  removeQuantity,
} from "../../actions/actions";
function ProductInCart({ id, name, img, cost, rate, quantityInCart }) {
  const dispatch = useDispatch();
  return (
    <div className="productInCart">
      <div className="productInCart__img-box">
        <img src={img} alt="product" />
      </div>
      <div className="productInCart__about">
        <div className="productInCart__name">
          <h2>{name}</h2>
        </div>
        <div className="productInCart__rate">{rate}</div>
        <div className="productInCart__cost">
          <p>
            {quantityInCart > 1 ? `${quantityInCart}x` : ""} {cost}zł
          </p>
        </div>
      </div>
      <div
        className="productInCart__button productInCart__button--delete"
        onClick={() => {
          dispatch(toggleProduct(id));
          dispatch(removeProduct(id));
        }}
      >
        <CloseIcon />
      </div>
      <div
        className="productInCart__button productInCart__button--remove"
        onClick={() => {
          if (quantityInCart === 1) {
            dispatch(toggleProduct(id));
            dispatch(removeProduct(id));
          } else {
            dispatch(removeQuantity(id));
          }
        }}
      >
        <RemoveIcon />
      </div>
      <div
        className="productInCart__button productInCart__button--add"
        onClick={() => {
          dispatch(addQuantity(id));
        }}
      >
        <AddIcon />
      </div>
    </div>
  );
}

export default ProductInCart;
