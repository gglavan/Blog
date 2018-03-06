import React from "react";
import "../styles/DemoPost.css";

const DemoPost = () => (
  <div className="">
    {/* eslint-disable */}
    <img
      src={require("../../images/image2.jpeg")}
      alt="mountain"
      width="100%"
    />
    <div className="demo-post-title">ice cream with chalk taste</div>
    <div className="demo-post-date">March 6, 2018</div>
    <hr />
  </div>
);

export default DemoPost;
