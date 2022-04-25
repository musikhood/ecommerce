import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import allProductsReducer from "./allProductsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  allProducts: allProductsReducer,
});

export default rootReducer;
