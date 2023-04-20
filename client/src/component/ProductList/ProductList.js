import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Actions/product";
import ProductCard from "./ProductCard";
import "./ProductStyle.css";

const ProductList = () => {
  const listProduct = useSelector((state) => state.productReducer.listProduct);
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="food-list">
      {load ? (
        <h2>Loading ...</h2>
      ) : (
        listProduct.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;
