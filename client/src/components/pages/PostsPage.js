import React, { Component } from "react";
import Navbar from "../elements/Navbar";
import Post from "../elements/Post";
import Newsletter from "../elements/Newsletter";
import PopularPosts from "../elements/PopularPosts";
import Footer from "../elements/Footer";
import preload from "../../data/data.json";

class PostsPage extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: res.express });
        console.log(this.state.response);
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/posts");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {preload.posts.map((post, index) => (
                <Post {...post} key={index} />
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
