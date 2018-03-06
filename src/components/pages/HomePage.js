import React from "react";
import Navbar from "../elements/Navbar";
import "../styles/HomePage.css";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="wallpaper" />
    <div className="greeting-block">Welcome to my Blog!</div>
  </div>
);

export default HomePage;
