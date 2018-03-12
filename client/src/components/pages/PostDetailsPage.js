import React, { Component } from "react";
import Navbar from "../commons/Navbar";
import PostFull from "../commons/PostFull";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import preload from "../../data/data.json";

class PostDetailsPage extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch(`/api${this.props.location.pathname}`)
      .then(res => res.json())
      .then(post => {
        this.setState({ post });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <PostFull {...this.state.post} />
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

export default PostDetailsPage;
