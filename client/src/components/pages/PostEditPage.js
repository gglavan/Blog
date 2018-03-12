import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import Footer from "../elements/Footer";
import PostEditForm from "../elements/PostEditForm";
import preload from "../../data/data.json";

class PostEditPage extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch(`/api/posts/${this.props.match.params.id}`)
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
              <PostEditForm {...this.state.post} />
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

export default PostEditPage;
