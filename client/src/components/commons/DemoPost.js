import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const demoPostTitle = css`
  margin-top: 5px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

const demoPostDate = css`
  color: #c1c1c1;
  margin-top: 20px;
  font-size: 12px;
  font-style: italic;
`;

const DemoPost = props => (
  <div>
    <img src={props.image} alt="Oops!" width="100%" />
    <div className={demoPostTitle}>{props.title}</div>
    <div className={demoPostDate}>{props.date}</div>
    <hr />
  </div>
);

DemoPost.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default DemoPost;
