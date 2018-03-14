import React from "react";
import Newsletter from "../commons/Newsletter";
import PopularPosts from "../commons/PopularPosts";
import Footer from "../commons/Footer";
import NewPostForm from "../commons/NewPostForm";
import preload from "../../data/data.json";

const PostDetailsPage = () => (
  <div>
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

export default PostDetailsPage;
