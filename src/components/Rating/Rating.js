import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./rating.scss";
function Rating({ rate }) {
  return (
    <div className="rating">
      {[...Array(rate)].map((star, index) => (
        <div key={index} className="star yellow-star">
          <StarIcon />
        </div>
      ))}
      {[...Array(5 - rate)].map((star, index) => (
        <div key={index} className="star grey-star">
          <StarIcon />
        </div>
      ))}
    </div>
  );
}

export default Rating;
