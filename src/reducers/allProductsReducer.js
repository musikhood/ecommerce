import products from "../data/products";
import ACTIONS from "../actions/actions";

export default function allProductsReducer(
  state = products,
  { type, payload }
) {
  switch (type) {
    case ACTIONS.TOGGLE_PRODUCT:
      return state.map((product) => {
        if (product.id === payload) {
          product.inCart = !product.inCart;
        }
        return product;
      });
    default:
      return state;
  }
}
