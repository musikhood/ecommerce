import React from "react";
import "./navigation.scss";
import Logo from "../../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

export default function Navigation() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav__search-box">
        <input type="text" placeholder="Search for item" spellCheck="false" />
        <SearchIcon className="search" />
      </div>
      <div className="nav__user-box">
        <div className="profile">
          <PersonIcon />
        </div>
        <div className="cart">
          {cart.length > 0 ? <div>{cart.length}</div> : null}

          <ShoppingCartIcon />
        </div>
      </div>
    </nav>
  );
}
