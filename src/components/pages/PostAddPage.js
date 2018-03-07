import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import Footer from "../elements/Footer";
import NewPostForm from "../elements/NewPostForm";
import preload from "../../data/data.json";

class PostDetailsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <NewPostForm />
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
