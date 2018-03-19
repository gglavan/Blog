import React, { Component } from "react";
import history from "../../history";

class Redirect extends Component {
  componentDidMount() {
    if (this.props.path == "signin") {
      setTimeout(() => {
        history.push(`/${this.props.path}`);
        history.go(`/${this.props.path}`);
      }, 500);
    } else {
      history.push(`/${this.props.path}`);
      history.go(`/${this.props.path}`);
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
