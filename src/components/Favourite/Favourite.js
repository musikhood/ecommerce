import React from "react";
import "./favourite.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { removeFavourite } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Favourite({ id, name, img, previousCost, cost, whenAdded }) {
  const dispatch = useDispatch();
  return (
    <div className="favourite">
      <div className="favourite__container">
        <div className="favourite__img-box">
          <Link to={`/product/${id}`}>
            <img src={img} alt="fav product" />
          </Link>
        </div>
        <div className="favourite__about">
          <p>Added: {whenAdded}</p>
          <h2>
            <Link to={`/product/${id}`}>{name}</Link>
          </h2>
        </div>
      </div>
      <div className="favourite__cost">
        {previousCost && <p className="previous-cost">{previousCost}zł</p>}
        <p className="cost">{cost}zł</p>
      </div>
      <div
        className="favourite__button"
        onClick={() => dispatch(removeFavourite(id))}
      >
        <FavoriteIcon />
      </div>
    </div>
  );
}

export default Favourite;
