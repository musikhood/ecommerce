import React from "react";
import "./productInCart.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  addQuantity,
  removeQuantity,
} from "../../actions/actions";
function ProductInCart({ id, name, img, previousCost, cost, quantityInCart }) {
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
        <div className="productInCart__container">
          <div className="productInCart__cost">
            {previousCost && <p className="previous-cost">{previousCost}zł</p>}
            <p className="cost">{cost}zł</p>
          </div>
          <div className="productInCart__quantity">
            <div
              className="productInCart__button productInCart__remove"
              onClick={() => {
                if (quantityInCart === 1) {
                  dispatch(removeProduct(id));
                } else {
                  dispatch(removeQuantity(id));
                }
              }}
            >
              <RemoveIcon />
            </div>
            <p>{quantityInCart}</p>
            <div
              className="productInCart__button productInCart__add"
              onClick={() => {
                dispatch(addQuantity(id));
              }}
            >
              <AddIcon />
            </div>
          </div>
        </div>
      </div>
      <div
        className="productInCart__delete"
        onClick={() => {
          dispatch(removeProduct(id));
        }}
      >
        <DeleteForeverIcon />
      </div>
    </div>
  );
}

export default ProductInCart;
