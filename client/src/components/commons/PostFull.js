import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Icon,
  Segment,
  Container,
  Button,
  Grid
} from "semantic-ui-react";
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
`;

const postDate = css`
  margin: 25px 0px;
  font-size: 14px;
  font-style: italic;
`;

const buttonChange = css`
  margin-left: 10px;
  @media (max-width: 578px) {
    display: block;
    margin: 15px 10px;
    width: 100%;
  }
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
            <div>
              <div
                style={{ marginLeft: "10px" }}
                className={`${postDate} text-muted`}
              >
                By <span className="orange">{this.props.author}</span> on{" "}
                {this.props.date}
              </div>
              {localStorage.getItem("token") === "special" ? (
                <Grid middle aligned style={{ marginLeft: "10px" }}>
                  <Grid.Row>
                    <Button
                      className={buttonChange}
                      size="tiny"
                      color="blue"
                      as={Link}
                      style={{ float: "right" }}
                      to={`/posts/edit/${this.props._id}`}
                    >
                      <Icon name="pencil" />
                      Edit
                    </Button>
                    <ConfirmModal handleDelete={this.handleDelete} />
                  </Grid.Row>
                </Grid>
              ) : null}
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
