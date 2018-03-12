import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
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
      <SocialMedia />
    </div>
  </div>
);

export default Navbar;
