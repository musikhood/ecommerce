import ACTIONS from "../actions/actions";

let myCart = [];

const storedCart = JSON.parse(localStorage.getItem("cart"));
if (storedCart) {
  myCart = storedCart;
}

export default function cartReducer(cart = myCart, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      const newState1 = [...cart, payload];
      localStorage.setItem("cart", JSON.stringify(newState1));
      return newState1;
    case ACTIONS.REMOVE_PRODUCT:
      const newState2 = cart.filter((product) => product.id !== payload);
      localStorage.setItem("cart", JSON.stringify(newState2));
      return newState2;
    default:
      return cart;
  }
}
