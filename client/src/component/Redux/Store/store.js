// import createStore
import { createStore, applyMiddleware, compose } from "redux";

// import rootReducers
import rootReducer from "../Reducers";
import thunk from "redux-thunk";
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export
export default store;
