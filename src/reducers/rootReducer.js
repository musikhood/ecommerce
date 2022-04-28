import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import favouriteReducer from "./favouriteReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favourite: favouriteReducer,
  search: searchReducer,
});

export default rootReducer;
