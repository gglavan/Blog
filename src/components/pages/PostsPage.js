import React from "react";
import Navbar from "../elements/Navbar";
import Post from "../elements/Post";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";

const PostsPage = () => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="col-sm-4">
          <Newsletter />
          <PopularPosts />
        </div>
      </div>
    </div>
  </div>
);

export default PostsPage;
