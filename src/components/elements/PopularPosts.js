import React from "react";
import DemoPost from "./DemoPost";
import "../styles/PopularPosts.css";

const PopularPosts = () => (
  <div className="wrapper container">
    <h6>Popular Posts</h6>
    <DemoPost />
    <DemoPost />
    <DemoPost />
    <DemoPost />
  </div>
);

export default PopularPosts;
