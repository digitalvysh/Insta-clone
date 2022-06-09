import React from "react";
import { Link } from "react-router-dom";
import landing from "./images/landing.png";
export default function LandingPage() {
  return (
    <div className="landing">
      <img src={landing} alt="landing page"></img>
      <div id="enterbutton">
        <h1>10x Team 04</h1>
        <Link to="postview" id="btn">
          Enter
        </Link>
      </div>
    </div>
  );
}
