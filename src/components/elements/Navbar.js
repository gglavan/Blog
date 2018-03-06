import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <div className="nav">
    <div className="container">
      <div className="nav-block-left">
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/about">About</a>
        <a href="/contacts">Contacts</a>
      </div>
      <div className="nav-block-right">
        <a href="_blank">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="_blank">
          <i className="fab fa-pinterest" />
        </a>
        <a href="_blank">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="_blank">
          <i className="fas fa-search" />
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
