import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../component/Redux/Actions/user";
import Card from "react-bootstrap/Card";
import "./style.css";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/profile");
  };
  return (
    <div className="mycard2">
      <Card style={{ width: "18rem" }}>
        <h1>Log in</h1>
        <hr />
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <Button variant="primary" type="submit" onClick={handleUser}>
          Log in
        </Button>
      </Card>
    </div>
  );
};

export default Login;
