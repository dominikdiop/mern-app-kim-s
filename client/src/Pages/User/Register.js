import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { register } from "../../component/Redux/Actions/user";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./style.css";

const Register = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
    navigate("/profile");
  };

  return (
    <div className="mycard">
      <Card style={{ width: "18rem" }}>
        <h1>Sign in</h1>
        <hr />
        <Form.Label>Name :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
        />
        <Form.Label>Email address :</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <Form.Label>Password :</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <Form.Label>Phone :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          name="phone"
          onChange={handleChange}
        />
        <br />
        <Button variant="primary" type="submit" onClick={handleUser}>
          Sign in
        </Button>
      </Card>
    </div>
  );
};

export default Register;
