import React, { Component } from "react";
import Navbar from "../commons/Navbar";
import Post from "../commons/Post";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
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
        console.log(this.state);
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
