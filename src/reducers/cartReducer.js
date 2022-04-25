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
    case ACTIONS.ADD_QUANTITY:
      const newState3 = cart.map((product) => {
        if (product.id === payload) {
          product.quantityInCart += 1;
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(newState3));
      return newState3;
    case ACTIONS.REMOVE_QUANTITY:
      const newState4 = cart.map((product) => {
        if (product.id === payload) {
          if (product.quantityInCart === 1) {
            return product;
          }
          product.quantityInCart -= 1;
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(newState4));
      return newState4;
    default:
      return cart;
  }
}
