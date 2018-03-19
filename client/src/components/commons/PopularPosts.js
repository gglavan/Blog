import React from "react";
import PropTypes from "prop-types";
import { Segment, Header, Container } from "semantic-ui-react";
import DemoPost from "./DemoPost";

const PopularPosts = props => (
  <Segment>
    <Container>
      <Header as="h4" textAlign="center">
        POPULAR POSTS
      </Header>
      {props.popular.map(post => <DemoPost {...post} key={post.date} />)}
    </Container>
  </Segment>
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
