// importation

import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGOUT_USER,
  SUCC_USER,
} from "../ActionType/user";

// initialState
const initialState = {
  user: null,
  loadUser: false,
  errors: [],
  isAuth: false,
};

// Pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case SUCC_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        errors: [],
        isAuth: false,
      };
    case CURRENT_USER:
      return { ...state, loadUser: false, user: payload, isAuth: true };

    default:
      return state;
  }
};

export default userReducer;
