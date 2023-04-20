import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/Actions/product";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="download.png" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => dispatch(deleteProduct(product._id))}>
            Delete
          </Button>

          <Button
            variant="primary"
            onClick={() => navigate(`/edit/${product._id}`)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
