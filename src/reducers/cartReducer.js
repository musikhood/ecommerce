import ACTIONS from "../actions/actions";

export default function cartReducer(cart = [], { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      return [...cart, payload];
    case ACTIONS.REMOVE_PRODUCT:
      return cart.filter((product) => product.id !== payload);
    default:
      return cart;
  }
}
