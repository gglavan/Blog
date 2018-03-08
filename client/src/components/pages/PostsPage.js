import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Post from "../elements/Post";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import Footer from "../elements/Footer";
import preload from "../../data/data.json";

class PostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.state.posts.map((post, index) => (
                <Post {...post} key={post._id} />
              ))}
            </div>
            <div className="col-sm-3">
              <Newsletter />
              <PopularPosts popular={preload.popular} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PostsPage;
