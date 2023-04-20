// importation

import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCC_PRODUCT, 
} from "../ActionType/product";

// initialState
const initialState = {
  listProduct: [],
  errors: null,
  load: false,
  productToGet: {},
};

// pure function

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, load: true };
    case SUCC_PRODUCT:
      return { ...state, load: false, listProduct: payload.listProduct };
    case FAIL_PRODUCT:
      return { ...state, load: false, errors: payload };
    case ONE_PRODUCT:
      return { ...state, load: false, productToGet: payload.productToGet };
    default:
      return state;
  }
};

export default productReducer;
