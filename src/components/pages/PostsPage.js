import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Post from "../elements/Post";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import preload from "../../data/data.json";

class PostsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              {preload.posts.map((post, index) => (
                <Post {...post} key={index} />
              ))}
            </div>
            <div className="col-sm-4">
              <Newsletter />
              <PopularPosts popular={preload.popular} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;
