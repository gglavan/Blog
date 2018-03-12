import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <div className="nav">
    <div className="container">
      <div className="nav-block-left">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/add/new">New Post</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
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
