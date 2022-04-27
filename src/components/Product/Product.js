import React from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "../Rating/Rating";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/actions";

function Product({
  id,
  name,
  img,
  previousCost,
  cost,
  rate,
  inCart,
  quantityInCart,
}) {
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
        <div className="product__rate">
          <Rating rate={rate} />
        </div>
        <div className="product__cost">
          {previousCost && <p className="previous-cost">{previousCost}zł</p>}
          <p className="cost">{cost}zł</p>
        </div>

        <div
          className="product__add"
          onClick={() => {
            dispatch(
              addProduct({
                id,
                name,
                img,
                previousCost,
                cost,
                rate,
                inCart,
                quantityInCart,
              })
            );
          }}
        >
          <AddShoppingCartIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;
