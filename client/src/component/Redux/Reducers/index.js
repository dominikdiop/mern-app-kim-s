// importation
import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";

// create rootReducers
const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

//export
export default rootReducer;
