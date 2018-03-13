import React from "react";
import PropTypes from "prop-types";
import DemoPost from "./DemoPost";
import "./PopularPosts.css";

const PopularPosts = props => (
  <div className="wrapper container">
    <h6>Popular Posts</h6>
    {props.popular.map(post => <DemoPost {...post} key={post.date} />)}
  </div>
);

PopularPosts.propTypes = {
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PopularPosts;
