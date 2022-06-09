import React from "react";
import logo from "./images/logo.png";
import cameraicon from "./images/cameraicon.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const navigateAdd = () => {
    navigate("/add");
  };
  const navigateHome = () => {
    navigate("/postview");
  };
  return (
    <div>
      <div className="header">
        <div id="name-and-logo">
          <img
            src={logo}
            alt="logo"
            onClick={navigateHome}
            id="home-icon"
          ></img>
          <h2>Instaclone</h2>
        </div>
        <img
          src={cameraicon}
          alt="camara icon"
          onClick={navigateAdd}
          id="add-post-icon"
        ></img>
      </div>
      <div className="whitespace"></div>
    </div>
  );
}
