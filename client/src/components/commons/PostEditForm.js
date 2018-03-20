import React, { Component } from "react";
import {
  Header,
  Segment,
  Container,
  TextArea,
  Button,
  Form,
  Select
} from "semantic-ui-react";
import styled from "react-emotion";
import axios from "axios";
import PropTypes from "prop-types";
import history from "../../history";

const options = [
  { text: "Travel", value: "travel" },
  { text: "Technology", value: "technology" },
  { text: "Music", value: "music" },
  { text: "Space", value: "space" },
  { text: "Politics", value: "politics" },
  { text: "Nature", value: "nature" },
  { text: "Sports", value: "sports" },
  { text: "Media", value: "media" },
  { text: "Government", value: "government" }
];

const PostWrapper = styled("div")`
  margin-top: 50px;
`;

class PostEditForm extends Component {
  state = {
    category: "",
    title: "",
    content: "",
    image: null,
    author: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ category: nextProps.category });
    this.setState({ title: nextProps.title });
    this.setState({ content: nextProps.content });
    this.setState({ image: nextProps.image });
    this.setState({ author: nextProps.author });
  }

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", this.state.category);
    formData.append("title", this.state.title);
    formData.append("content", this.state.content);
    formData.append("image", this.state.image);
    formData.append("author", this.state.author);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .patch(`/api/posts/${this.props._id}`, formData, config)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    history.push("/posts");
    history.go("/posts");
  };

  render() {
    return (
      <PostWrapper>
        <Segment>
          <Header as="h4" textAlign="center">
            EDIT YOUR POST!
          </Header>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <label htmlFor="category">
                <strong>Category</strong>
              </label>
              <Select
                fluid
                label="Category"
                id="category"
                name="category"
                options={options}
                placeholder="Category"
                required
                value={this.state.category}
                onChange={(e, { value }) => this.setState({ category: value })}
              />
              <Form.Field>
                <Form.Input
                  id="title"
                  label="Title"
                  placeholder="Enter your title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  name="title"
                  required
                />
              </Form.Field>
              <Form.Field
                control={TextArea}
                label="About"
                id="content"
                rows="10"
                value={this.state.content}
                onChange={this.handleContentChange}
                name="content"
                required
                placeholder="Tell us more about you..."
              />
              <Form.Field>
                <label htmlFor="image">Choose another picture:</label>
                <Form.Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={this.handleImageChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  label="Author"
                  id="author"
                  placeholder="Enter your name"
                  value={this.state.author}
                  onChange={this.handleAuthorChange}
                  name="author"
                  required
                />
              </Form.Field>
              <Button color="orange" fluid type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Segment>
      </PostWrapper>
    );
  }
}

PostEditForm.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default PostEditForm;
