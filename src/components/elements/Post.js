import React from "react";
import "../styles/Post.css";

const Post = () => (
  <div className="wrapper">
    {/* eslint-disable */}
    <img src={require("../../images/image1.jpg")} alt="mountain" width="100%" />
    <div className="container">
      <div className="post-category">Travel</div>
      <div className="post-title">Adventure to travel lonely</div>
      <div className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, et
        ducimus nostrum recusandae dolorum rerum libero accusantium,
        reprehenderit quia voluptates, ullam minus doloremque minima magnam id!
        Praesentium neque inventore perspiciatis id at deserunt, quisquam
        reprehenderit illum temporibus magnam laboriosam soluta repellendus in
        quasi nostrum vel laborum itaque. At, quod quia...
      </div>
      <div className="post-button">
        <button>continue reading</button>
      </div>
      <div className="post-date">
        By <span>George</span> on March 6, 2018
      </div>
    </div>
  </div>
);

export default Post;
