// importation
import axios from "axios";
import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCC_PRODUCT,
} from "../ActionType/product";

// get all Product
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get("api/product/all");
    dispatch({ type: SUCC_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// add product

export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.post("api/product/add", newProduct, config);
    dispatch(getProduct());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// delete product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProduct());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// edit Product

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/product/${id}`, newProduct);
    dispatch(getProduct());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// get one product

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({ type: ONE_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};
