import React, { Component } from "react";
import "../styles/Post.css";

class PostFull extends Component {
  render() {
    return (
      <div className="wrapper">
        <img src={this.props.image} alt="Oops!" width="100%" />
        <div className="container">
          <div className="post-category">{this.props.category}</div>
          <div className="post-title">{this.props.title}</div>
          <div className="post-content">{this.props.content}</div>
          <div className="post-button" />
          <div className="post-date">
            By <span>{this.props.author}</span> on {this.props.date}
            <form
              name="_method"
              encType="application/x-www-form-urlencoded"
              className="float-right"
              method="POST"
              action={`/api/posts/${this.props._id}?_method=DELETE`}
            >
              <button className="btn btn-sm btn-danger" type="submit">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostFull;
