import React from "react";
import "./favourites.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Favourite } from "../../components";

function Favourites() {
  const favorite = useSelector((state) => state.favourite);
  return (
    <div className="favourites">
      <div className="favourites__container-top">
        <h1>My Favourites</h1>
        <div className="favourites__button">
          <Link to="/">
            <ArrowBackIosIcon /> Back to shop
          </Link>
        </div>
      </div>
      <div className="favourites__container-bottom">
        {favorite.map((item) => (
          <Favourite key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
