import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css";

class Post extends Component {
  state = {};
  urlTitle = () =>
    String(this.props.title)
      .toLowerCase()
      .split(" ")
      .join("-");
  render() {
    return (
      <div className="wrapper">
        <img src={this.props.image} alt="Oops!" width="100%" />
        <div className="container">
          <div className="post-category">{this.props.category}</div>
          <div className="post-title">{this.props.title}</div>
          <div className="post-content">{this.props.content}</div>
          <div className="post-button">
            <Link
              to={{
                pathname: `/posts/${this.urlTitle()}`,
                state: { linkState: this.props }
              }}
            >
              <button>continue reading</button>
            </Link>
          </div>
          <div className="post-date">
            By <span>{this.props.author}</span> on {this.props.date}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
