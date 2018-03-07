import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Post from "../elements/Post";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import Footer from "../elements/Footer";
import preload from "../../data/data.json";

class PostDetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <Post {...this.props.location.state.linkState} />
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
