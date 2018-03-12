import React, { Component } from "react";
import "./NewPostForm.css";

class PostEditForm extends Component {
  state = {
    category: "",
    title: "",
    content: "",
    image: "",
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
    this.setState({ image: e.target.value });
  };

  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  };

  handlePost = e => {
    // e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="wrapper container">
        <h6>Edit your post!</h6>
        <form
          name="_method"
          method="post"
          action={`/api/posts/${this.props._id}?_method=PATCH`}
          encType="multipart/form-data"
        >
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
            <label htmlFor="image">Choose another picture:</label>
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
          <button
            type="submit"
            className="btn btn-danger btn-block"
            onClick={this.handlePost}
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
export default PostEditForm;
