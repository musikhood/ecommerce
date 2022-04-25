import products from "../data/products";
import ACTIONS from "../actions/actions";

let allProducts = products;

const storedAllProducts = JSON.parse(localStorage.getItem("allProducts"));
if (storedAllProducts) {
  allProducts = storedAllProducts;
}

export default function allProductsReducer(
  state = allProducts,
  { type, payload }
) {
  switch (type) {
    case ACTIONS.TOGGLE_PRODUCT:
      const newState1 = state.map((product) => {
        if (product.id === payload) {
          product.inCart = !product.inCart;
        }
        return product;
      });
      localStorage.setItem("allProducts", JSON.stringify(newState1));
      return newState1;
    default:
      return state;
  }
}
