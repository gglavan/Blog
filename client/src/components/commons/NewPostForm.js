import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./NewPostForm.css";

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
    axios.post("/api/posts", formData, config).then(response => {
      console.log(response);
    });
    this.props.history.push("/posts");
  };
  render() {
    return (
      <div className="wrapper container">
        <h6>Share your feelings!</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Category:</label>
            <select
              className="form-control"
              id="select"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              name="category"
            >
              <option>Travel</option>
              <option>Technology</option>
              <option>Music</option>
              <option>Space</option>
              <option>Politics</option>
              <option>Nature</option>
              <option>Sports</option>
              <option>Media</option>
              <option>Government</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter your title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              name="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Post content:</label>
            <textarea
              className="form-control"
              id="content"
              rows="10"
              value={this.state.content}
              onChange={this.handleContentChange}
              name="content"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Choose your picture:</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              onChange={this.handleImageChange}
              name="image"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Enter your name"
              value={this.state.author}
              onChange={this.handleAuthorChange}
              name="author"
              required
            />
          </div>
          <button type="submit" className="btn btn-danger btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(NewPostForm);
