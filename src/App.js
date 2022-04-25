import { Navigation, Product } from "./components";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.allProducts);
  return (
    <div className="App">
      <Navigation />
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;
