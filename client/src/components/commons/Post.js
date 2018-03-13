import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = props => (
  <div className="wrapper">
    <img src={props.image} alt="Oops!" width="100%" />
    <div className="container">
      <div className="post-category">{props.category}</div>
      <div className="post-title">{props.title}</div>
      <div className="post-content">
        {props.content && `${props.content.substr(0, 1000)}...`}
      </div>
      <div className="post-button">
        <Link to={`/posts/${props._id}`}>
          <button>continue reading</button>
        </Link>
      </div>
      <div className="post-date">
        By <span>{props.author}</span> on {props.date}
      </div>
    </div>
  </div>
);

Post.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Post;
