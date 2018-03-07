import React, { Component } from "react";
import "../styles/NewPostForm.css";

class NewPostForm extends Component {
  state = {
    category: "",
    title: "",
    body: "",
    image: "",
    date: ""
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.value });
  };

  handlePost = e => {
    // e.prevent
  };

  render() {
    return (
      <div className="wrapper container">
        <h6>Share your feelings!</h6>
        <form method="post" action="/api/posts">
          <div className="form-group">
            <label htmlFor="title">Category:</label>
            <select
              className="form-control"
              id="exampleSelect1"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              name="category"
            >
              <option>Travel</option>
              <option>Technology</option>
              <option>Music</option>
              <option>Space</option>
              <option>Nature</option>
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Post content:</label>
            <textarea
              className="form-control"
              id="body"
              rows="10"
              value={this.state.body}
              onChange={this.handleBodyChange}
              name="body"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Choose your picture:</label>
            <input
              type="file"
              className="form-control-file"
              id="file"
              value={this.state.image}
              onChange={this.handleImageChange}
              name="image"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handlePost}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default NewPostForm;
