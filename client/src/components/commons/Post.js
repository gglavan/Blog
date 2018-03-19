import React from "react";
import PropTypes from "prop-types";
import { Image, Icon, Segment, Container, Button } from "semantic-ui-react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";

const PostWrapper = styled("div")`
  margin-top: 50px;
`;

const postCategory = css`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
`;

const postTitle = css`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
`;

const postContent = css`
  font-size: 14px;
  text-align: justify;
  padding: 20px;
}`;

const postDate = css`
  margin-top: 25px;
  font-size: 14px;
  font-style: italic;
}`;

const postButton = css`
  margin-top: 20px;
  text-align: center;
`;

const Post = props => (
  <PostWrapper>
    <Segment>
      <Image src={props.image} alt="Oops!" width="100%" />
      <Container>
        <div className={`${postCategory} orange`}>{props.category}</div>
        <div className={postTitle}>{props.title}</div>
        <div className={postContent}>
          {props.content && `${props.content.substr(0, 1000)}...`}
        </div>
        <div className={postButton}>
          <Button
            inverted
            color="orange"
            animated
            as={Link}
            to={`/posts/${props._id}`}
          >
            <Button.Content visible>Continue Reading</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </div>
        <div className={`${postDate} text-muted`}>
          By <span className="orange">{props.author}</span> on {props.date}
        </div>
      </Container>
    </Segment>
  </PostWrapper>
);

Post.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Post;
