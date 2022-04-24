import React from "react";
import "./navigation.scss";
import Logo from "../../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

export default function Navigation() {
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
          <ShoppingCartIcon />
        </div>
      </div>
    </nav>
  );
}
