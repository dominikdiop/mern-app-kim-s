import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editProduct, getProduct } from "../../component/Redux/Actions/product";

const Edit = () => {
  const [newProduct, setNewProduct] = useState({ name: "", description: "" });
  const dispatch = useDispatch();
  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editProduct(match.params.id, newProduct));
    navigate(-1);
  };

  return (
    <div className="edit-card">
      <Card style={{ width: "18rem" }}>
        <Form.Label>Name :</Form.Label>
        <Form.Control
          type="text"
          placeholder={`${productToGet.name}`}
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <Form.Label>description :</Form.Label>
        <Form.Control
          type="text"
          placeholder={`${productToGet.description}`}
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleEdit}>
          Edit
        </Button>
      </Card>
    </div>
  );
};

export default Edit;
