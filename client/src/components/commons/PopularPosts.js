import React, { Component } from "react";
import DemoPost from "./DemoPost";
import "./PopularPosts.css";

class PopularPosts extends Component {
  render() {
    return (
      <div className="wrapper container">
        <h6>Popular Posts</h6>
        {this.props.popular.map((post, index) => (
          <DemoPost {...post} key={index} />
        ))}
      </div>
    );
  }
}

export default PopularPosts;
