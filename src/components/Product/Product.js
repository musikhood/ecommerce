import React from "react";
import "./product.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  addProduct,
  toggleProduct,
  removeProduct,
} from "../../actions/actions";

function Product({ id, name, img, cost, rate, inCart }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product__img-box">
        <img src={img} alt="product" />
      </div>
      <div className="product__about">
        <div className="product__name">
          <h2>{name}</h2>
        </div>
        <div className="product__rate">{rate}</div>
        <div className="product__cost">
          <p>{cost}</p>
        </div>
        {inCart ? (
          <div
            className="product__toggle"
            onClick={() => {
              dispatch(toggleProduct(id));
              dispatch(removeProduct(id));
            }}
          >
            <RemoveIcon />
          </div>
        ) : (
          <div
            className="product__toggle"
            onClick={() => {
              dispatch(addProduct({ id, name, img, cost, rate }));
              dispatch(toggleProduct(id));
            }}
          >
            <AddIcon />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
