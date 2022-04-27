import React from "react";
import "./home.scss";
import { Product } from "../../components";
import products from "../../data/products";

function Home() {
  return (
    <div className="home">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;
