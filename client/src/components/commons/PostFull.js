import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Segment, Container, Button } from "semantic-ui-react";
import styled, { css } from "react-emotion";
import PropTypes from "prop-types";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";
import history from "../../history";

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

const alignedVertical = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class PostFull extends Component {
  handleDelete = () => {
    axios
      .delete(`/api/posts/${this.props._id}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    history.push("/posts");
    history.go("/posts");
  };
  render() {
    return (
      <PostWrapper>
        <Segment>
          <Image src={this.props.image} alt="Oops!" width="100%" />
          <Container>
            <div className={`${postCategory} orange`}>
              {this.props.category}
            </div>
            <div className={postTitle}>{this.props.title}</div>
            <div className={postContent}>{this.props.content}</div>
            <div className={alignedVertical}>
              <div className={`${postDate} text-muted`}>
                By <span className="orange">{this.props.author}</span> on{" "}
                {this.props.date}
              </div>
              <div>
                <Button
                  size="tiny"
                  color="blue"
                  as={Link}
                  to={`/posts/edit/${this.props._id}`}
                >
                  <Icon name="pencil" />
                  Edit
                </Button>
                <ConfirmModal handleDelete={this.handleDelete} />
              </div>
            </div>
          </Container>
        </Segment>
      </PostWrapper>
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
