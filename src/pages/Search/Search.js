import React, { useEffect } from "react";
import "./search.scss";
import data from "../../data/products";
import { useSelector } from "react-redux";
import { Product } from "../../components";
import { useNavigate } from "react-router-dom";

function Search() {
  const searchPhrase = useSelector((state) => state.search);
  const filteredProducts = data.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase())
  );
  let history = useNavigate();
  useEffect(() => {
    if (searchPhrase === "") {
      history("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="searchPage">
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      {filteredProducts.length === 0 && (
        <div className="searchPage__error">
          Sorry, we didn't find any results for the phrase:{" "}
          <span>{searchPhrase}</span>
        </div>
      )}
    </div>
  );
}

export default Search;
