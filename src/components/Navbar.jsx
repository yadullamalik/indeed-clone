import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { RiMessage2Fill, RiNotification2Fill } from "react-icons/ri";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="title-div-nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/768px-Indeed_logo.svg.png?20210916154409"
          alt=""
          width="100px"
          onClick={() => navigate("/")}
        />
        <img
          src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"
          alt=""
          width="40px"
          onClick={() => navigate("/")}
        />
        <Link className="nav-links" to={"/"}>
          Find jobs
        </Link>
        <Link className="nav-links" to={"/popular"}>
          Company reviews
        </Link>
        <Link className="nav-links" to={"/salaryguide"}>
          Salary Guide
        </Link>
      </div>
      <div className="login-div-nav">
        <div className="msg-icon">
          <RiMessage2Fill />
        </div>
        <div className="notification-icon">
          <RiNotification2Fill />
        </div>
        <div className="hline-nav"></div>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};
