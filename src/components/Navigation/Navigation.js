import React, { useState } from "react";
import "./navigation.scss";
import Logo from "../../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searching } from "../../actions/actions";
import data from "../../data/products";

export default function Navigation() {
  const cart = useSelector((state) => state.cart);
  let allItemsInCart = 0;
  cart.forEach((element) => {
    allItemsInCart += element.quantityInCart;
  });
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function onChangeHandler(e) {
    setInput(e.target.value);
  }
  let history = useNavigate();

  function search() {
    dispatch(searching(input));
    history("/search");
    setInput("");
  }

  function onKeyDownHandler(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__logo-container">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="nav__search-box">
        <input
          type="text"
          placeholder="Search for item"
          spellCheck="false"
          className="nav__searchbar"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={input}
        />
        <div className="nav__suggestions">
          {input !== "" &&
            data
              .filter((product) =>
                product.name
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase())
              )
              .map((item, index) => (
                <Link
                  key={index}
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    key={index}
                    className="suggestion"
                    onClick={() => {
                      dispatch(searching(item.name));
                      history("/");
                      setInput("");
                    }}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
        </div>
        <div className="nav__search-icon-box" onClick={search}>
          <SearchIcon className="search" />
        </div>
      </div>
      <div className="nav__user-box">
        <Link to="/favourites">
          <div className="favouritePage">
            <FavoriteIcon />
          </div>
        </Link>
        <div className="profile">
          <PersonIcon />
        </div>
        <Link to="/cart">
          <div className="cart">
            {allItemsInCart > 0 ? <div>{allItemsInCart}</div> : null}
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
}
