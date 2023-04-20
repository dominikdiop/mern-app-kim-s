import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import { current } from "./component/Redux/Actions/user";
import Food from "./Pages/Food/Food";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import Profile from "./Pages/User/Profile";
import Register from "./Pages/User/Register";
import Add from "./Pages/User/Add";
import Edit from "./Pages/User/Edit";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Profile />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
