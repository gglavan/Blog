import React from "react";
import "../styles/NewPostForm.css";

const NewPostForm = () => (
  <div className="wrapper container">
    <h6>Share your feelings!</h6>
    <form>
      <div className="form-group">
        <label for="title">Category</label>
        <select className="form-control" id="exampleSelect1">
          <option>Travel</option>
          <option>Technology</option>
          <option>Music</option>
          <option>Space</option>
          <option>Nature</option>
        </select>
      </div>
      <div className="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your title"
        />
      </div>
      <div className="form-group">
        <label for="body">Example textarea</label>
        <textarea className="form-control" id="body" rows="10" />
      </div>
      <div class="form-group">
        <label for="file">Choose your picture</label>
        <input type="file" class="form-control-file" id="file" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default NewPostForm;
