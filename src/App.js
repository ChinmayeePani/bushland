import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Explore from "./components/Explore";
import Offers from "./components/Offers";
import Blog from "./components/Blog";
import Coins from "./components/Coins";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Coins" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
