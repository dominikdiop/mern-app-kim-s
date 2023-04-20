import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addProduct } from "../../component/Redux/Actions/product";
import { Link } from "react-router-dom";

const Add = () => {
  const [newProduct, setNewProduct] = useState({ name: "", discreption: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addProduct(newProduct));
  };
  return (
    <div className="add-me">
      <Card style={{ width: "18rem" }}>
        <Form.Label>Name :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <Form.Label>description :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <Link to="/product">
          <Button variant="primary" type="submit" onClick={() => add()}>
            Add
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Add;
