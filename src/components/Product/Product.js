import React from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addFavourite,
  removeFavourite,
} from "../../actions/actions";

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
  const favourite = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  function isFavourite() {
    let bool = false;
    favourite.forEach((item) => {
      if (item.id === id) {
        bool = true;
      }
    });
    return bool;
  }

  const favouriteProduct = isFavourite();
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
        <div
          onClick={() => {
            if (favouriteProduct) {
              dispatch(removeFavourite(id));
            } else {
              dispatch(addFavourite({ id, name, img, previousCost, cost }));
            }
          }}
          className={`product__favourite ${
            favouriteProduct && "product__favourite--true"
          }`}
        >
          <FavoriteIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;
