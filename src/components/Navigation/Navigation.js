import React from "react";
import "./navigation.scss";
import Logo from "../../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navigation() {
  const cart = useSelector((state) => state.cart);
  let allItemsInCart = 0;
  cart.forEach((element) => {
    allItemsInCart += element.quantityInCart;
  });
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__logo-container">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="nav__search-box">
        <input type="text" placeholder="Search for item" spellCheck="false" />
        <div className="nav__search-icon-box">
          <SearchIcon className="search" />
        </div>
      </div>
      <div className="nav__user-box">
        <div className="favourite">
          <FavoriteIcon />
        </div>
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
