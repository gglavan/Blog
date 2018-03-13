import React, { Component } from "react";
import Post from "../commons/Post";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import preload from "../../data/data.json";
import axios from "axios";

class PostsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/api/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
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
