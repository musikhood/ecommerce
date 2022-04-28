import { Navigation } from "./components";
import { Home, Cart, Favourites } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart />} exact />
        <Route path="/favourites" element={<Favourites />} exact />
      </Routes>
    </div>
  );
}

export default App;
