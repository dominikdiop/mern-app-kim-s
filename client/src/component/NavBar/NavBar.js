import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../Redux/Actions/user";

const NavBar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  return (
    <div className="mynav">
      <Navbar bg="" variant="">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="./download.png"
              width={50}
              height={50}
              alt="icon"
              href="/"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Food">Food</Nav.Link>
            <Nav.Link href="/Add">Add</Nav.Link>
          </Nav>
          {user && (
            <>
              <Nav.Link href="/" onClick={() => dispatch(logout())}>
                Log out
              </Nav.Link>
            </>
          )}
          {!user && (
            <>
              <Nav.Link href="/register">Sign in</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
