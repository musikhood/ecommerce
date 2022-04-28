import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productPage.scss";
import data from "../../data/products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addProduct,
  addQuantity,
  removeProduct,
  removeQuantity,
} from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

function ProductPage() {
  let { id } = useParams();
  id = parseInt(id);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const cart = useSelector((state) => state.cart);
  let itemInCart = cart.filter((product) => product.id === id);

  useEffect(() => {
    let product = data.filter((product) => product.id === id);
    setItem(product[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const {
    name,
    img,
    previousCost,
    cost,
    rate,
    inCart,
    quantityInCart,
    display,
    internalStorage,
    ram,
    camera,
    communication,
    operatingSystem,
  } = item;

  return (
    <div className="productPage">
      <div className="productPage__container">
        <div className="productPage__img-box">
          <img src={img} alt="product" />
        </div>
        <div className="productPage__about">
          <h1>{name}</h1>
          <div className="productPage__specifications">
            <p>
              Display: <span>{display}</span>
            </p>
            <p>
              Internal storage: <span>{internalStorage}</span>
            </p>
            <p>
              RAM: <span>{ram}</span>
            </p>
            <p>
              Camera: <span>{camera}</span>
            </p>
            <p>
              Communication: <span>{communication}</span>
            </p>
            <p>
              Operating system: <span>{operatingSystem}</span>
            </p>
          </div>
          <div className="productPage__cost">
            {previousCost && <p>{previousCost}zł</p>}
            <h2>{cost}zł</h2>
          </div>
          <div className="productPage__buttons">
            <div className="productPage__box">
              <div
                className="productPage__remove"
                onClick={() => {
                  if (itemInCart[0]?.quantityInCart === 1) {
                    dispatch(removeProduct(id));
                  } else {
                    dispatch(removeQuantity(id));
                  }
                }}
              >
                <RemoveIcon />
              </div>
              <p>{itemInCart[0]?.quantityInCart || 0}</p>
              <div
                className="productPage__add"
                onClick={() => {
                  if (itemInCart[0]?.quantityInCart) {
                    dispatch(addQuantity(id));
                  } else {
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
                  }
                }}
              >
                <AddIcon />
              </div>
            </div>
            <div
              className="productPage__cart"
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
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
