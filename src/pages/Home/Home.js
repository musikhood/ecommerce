import React from "react";
import "./home.scss";
import { Product } from "../../components";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.allProducts);
  return (
    <div className="home">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;
