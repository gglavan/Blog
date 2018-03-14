import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import history from "../../history";
import "./Post.css";

class PostFull extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const ans = window.confirm("Are you sure?");
    if (ans) {
      axios
        .delete(`/api/posts/${this.props._id}`)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      history.push("/posts");
      history.go("/posts");
    }
  };
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
            <form onSubmit={this.handleSubmit} className="float-right">
              <button className="btn btn-sm btn-danger" type="submit">
                Delete
              </button>
            </form>
            <button className="btn btn-info btn-sm float-right mr-2">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={`/posts/edit/${this.props._id}`}
              >
                Edit
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostFull.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default PostFull;
