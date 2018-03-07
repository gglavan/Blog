import React from "react";
import "../styles/Newsletter.css";

const Newsletter = () => (
  <div className="wrapper container">
    <h6>Get Newsletter</h6>
    <form>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <button className="newsletter-button" type="submit">
        Subscribe Now
      </button>
    </form>
  </div>
);

export default Newsletter;
