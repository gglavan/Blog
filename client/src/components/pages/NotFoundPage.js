import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import "./NotFoundPage.css";

class NotFoundPage extends Component {
  componentWillMount() {
    if (!localStorage.getItem("token")) {
      history.push("/signin");
    }
  }
  render() {
    return (
      <div>
        <div className="primary-block">
          <div className="four-oh-four">404</div>
          <div className="info-primary">Page Not Found</div>
          <div className="info-secondary">
            {`Looks like you've followed a broken link or entered a URL that doesn't exist on this site`}
          </div>
          <Link to="/">
            <i className="far fa-hand-point-left mr-2" />
            Back to our site
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
