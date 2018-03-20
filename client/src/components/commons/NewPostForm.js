import React, { Component } from "react";
import axios from "axios";
import styled from "react-emotion";
import {
  Icon,
  Header,
  Segment,
  Container,
  TextArea,
  Button,
  Form
} from "semantic-ui-react";
import history from "../../history";

const PostWrapper = styled("div")`
  margin-top: 50px;
`;

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

class NewPostForm extends Component {
  state = {
    category: "",
    title: "",
    content: "",
    image: null,
    author: ""
  };

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
      .post("/api/posts", formData, config)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    history.push("/posts");
    history.go("/posts");
  };
  render() {
    return (
      <PostWrapper>
        <Segment>
          <Header as="h4" textAlign="center">
            SHARE YOUR FEELINGS!
          </Header>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Select
                fluid
                label="Category"
                id="category"
                onChange={this.handleCategoryChange}
                name="category"
                options={options}
                placeholder="Category"
                required
              />
              <Form.Field>
                <Form.Input
                  id="title"
                  label="Title"
                  placeholder="Enter your title"
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
                onChange={this.handleContentChange}
                name="content"
                required
                placeholder="Tell us more about you..."
              />
              <Form.Field>
                <label htmlFor="image">Choose another picture:</label>
                <Button
                  onClick={() => document.getElementById("image").click()}
                >
                  <Icon name="file" />
                  Open File
                </Button>
                <Form.Input
                  type="file"
                  id="image"
                  name="image"
                  style={{ display: "none" }}
                  onChange={this.handleImageChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="text"
                  label="Author"
                  id="author"
                  placeholder="Enter your name"
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
export default NewPostForm;
