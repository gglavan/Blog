import React, { Component } from "react";
import "../styles/DemoPost.css";

class DemoPost extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Oops!" width="100%" />
        <div className="demo-post-title">{this.props.title}</div>
        <div className="demo-post-date">{this.props.date}</div>
        <hr />
      </div>
    );
  }
}

export default DemoPost;
