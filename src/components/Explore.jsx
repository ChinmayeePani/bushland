import React from "react";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


const Explore = () => {
  const [chat, setChat] = useState(false);

  const navigate = useNavigate();

  const loginExploreHandler = () => {
    navigate("/Coins");
  };
  return (
 
    <div className="exploring">
      <h1>PLANT PARENT REWARDS CLUB</h1>
      <p>Earn Bushland Coins simply by shopping, sharing and more</p>

      <div className="explore_btn_1">
        <button className="btn_4" onClick={loginExploreHandler}>Sign up and get free Coins</button>
        <button className="btn_4">Already a member? Sign in</button>
      </div>
      {chat && (
        <div className="popup">
          <div className="inside">
            The Bushland <BsCircleFill className="active" /> 
            <img src="./Image/logo.png" className="the_bush"/>
          </div>
          <button className="chats_popups">Hi There!</button> <br />
          <button className="chats_popups_1">
            Welcome to The Bushland.com! India’s most trusted brand for plants and gardening
            products!!
          </button>
          <br />
          <button className="chats_popups_1">Let's GREEN up!💚 How can we help you?</button> <br/>
          <div className="auto_reply">
            <button className="auto_reply_1">Order Status</button>
            <button className="auto_reply_1">Shop Products</button>
          </div>
        <div className="icons_send">
        <input input type="text" placeholder="Type your message here" className="type_box"/>
        <IoMdSend className="send"/>
        <BsPaperclip className="send"/>
        </div>
        
        </div>
      )}
      <div className="chats">
        <BsFillChatSquareDotsFill className="chats_1" onClick={() => setChat(!chat)} />
      </div>
    </div>
  );
};

export default Explore;
