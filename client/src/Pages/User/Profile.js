import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import pic from "./profilepic.png";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="mycard3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} style={{ width: "260px" }} />
        <hr />
        <Card.Body>
          <Card.Title>{user && user.name}</Card.Title>
          <hr />
          <Card.Text>{user && user.email}</Card.Text>
          <hr />
          <Card.Text>{user && user.phone}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
