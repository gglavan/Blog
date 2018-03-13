import React from "react";
import PropTypes from "prop-types";
import "./DemoPost.css";

const DemoPost = props => (
  <div>
    <img src={props.image} alt="Oops!" width="100%" />
    <div className="demo-post-title">{props.title}</div>
    <div className="demo-post-date">{props.date}</div>
    <hr />
  </div>
);

DemoPost.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default DemoPost;
