import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [click, setClick] = useState(false);
  const [clicks, setClicks] = useState(false);
  const [pots, setPots] = useState(false);
  const [plants, setPlants] = useState(false);
  const [gifts, setGifts] = useState(false);

  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate("/login");
  };

  const loginCartHandler = () => {
    navigate("/cart");
  };

  const exploreClickHandler = () =>{
    navigate("/explore");
  };

  const loginofferHandler = () =>{
    navigate("/offers");
  };

  const loginblogHandler = () =>{
    navigate("/blog");
  };

  return (
    <div>
      <div className="navbar">
        <img src="/Image/logo.png" className="logo" />
        <div className="nav_lists">
          <h3 onClick={() => setClick(!click)}>PLANTS</h3>
          <h3 onClick={() => setClicks(!clicks)}>SEEDS</h3>
          <h3 onClick={() => setPots(!pots)}>POTS & PLANTERS</h3>
          <h3 onClick={() => setPlants(!plants)}>PLANTS CARE</h3>
          <h3 onClick={() => setGifts(!gifts)}>GIFTING</h3>
          <h3 onClick={loginblogHandler}>BLOG</h3>
          <h3 onClick={loginofferHandler}>OFFERS</h3>
        </div>

        <button className="search_box">
          <BsSearch className="search_icon" />
          Search for trees, seeds and planters...
        </button>
        <div className="icons">
          <AiOutlineUser className="icon" onClick={loginClickHandler} />
          <AiOutlineShoppingCart className="icon" onClick={loginCartHandler} />
        </div>
      </div>
      {click && (
        <div className="dropdown">
          <ul>
            <p>Indoor Plants</p>
            <p>Flowering Plants</p>
            <p>Low Maintainence Plants</p>
            <p>Low-Lighting Plants</p>
            <p>Cactus and Succulents</p>
            <p>Hanging Plants</p>
            <p>Medical and Aromatic Plants</p>
            <p>Fruit Plants</p>
            <p>Bundles</p>
            <p>New Arrivals</p>
          </ul>
        </div>
      )}

      {clicks && (
        <div className="dropdowns">
          <ul>
            <p>Flower Seeds</p>
            <p>Vegetable Seeds</p>
            <p>Microgreen Seeds</p>
            <p>Herb Seeds</p>
            <p>Flower Bulbs</p>
            <p>Fruit Seeds</p>
            <p>Seed Kits</p>
            <p>New Arrivals</p>
          </ul>
        </div>
      )}

      {pots && (
        <div className="dropdowns_3">
          <ul>
            <p>Plastic Pots</p>
            <p>Ceramic pots</p>
            <p>Metal Planters</p>
            <p>Ceramic Planters</p>
            <p>Zuri Collection</p>
            <p>Plant Stands</p>
            <p>Seedling Trays</p>
            <p>The Reezer Collections</p>
            <p>Basket Planters</p>
          </ul>
        </div>
      )}

      {plants && (
        <div className="dropdowns_4">
          <ul>
            <p>Potting Mix and Fertilisers</p>
            <p>Garderning Tools</p>
            <p>Watering Cans and Sprayers</p>
            <p>Garden Decor and Accessories</p>
            <p>Pest Controlls</p>
            <p>Video Consultations - Doctor Green</p>
          </ul>
        </div>
      )}

      {gifts && (
        <div className="dropdowns_5">
          <ul>
            <p>Corporate/ Bulk Giftings</p>
            <p>Personalised Giftings</p>
            <p>Gift Cards</p>
          </ul>
        </div>
      )}
      {/* 2nd navbar */}
      <div className="second_navbar">
        <div className="second_navbar_content">
          <p>Free Shipping above ₹499</p>
          <p>All India Delivery</p>
          <p>Call us: +917428730894</p>
        </div>
      </div>

      {/* main body */}
      <div className="gift_bg">
        <img src="/Image/bg1.jpg" className="gift" />

        
          <button onClick={exploreClickHandler}>
            EXPLORE MORE <IoIosArrowForward className="arrow" />
          </button>

      </div>
    </div>
  );
};

export default Home;
