import { Navigation } from "./components";
import { Home, Cart, Favourites, Search, ProductPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart />} exact />
        <Route path="/favourites" element={<Favourites />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/product/:id" element={<ProductPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
