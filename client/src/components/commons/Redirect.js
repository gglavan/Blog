import { Component } from "react";
import PropTypes from "prop-types";
import history from "../../history";

class Redirect extends Component {
  componentDidMount() {
    if (this.props.path === "/signin") {
      setTimeout(() => {
        history.push(`${this.props.path}`);
        history.go(`${this.props.path}`);
      }, 500);
    } else {
      localStorage.setItem("token", this.props.token);
      history.push(`${this.props.path}`);
      history.go(`${this.props.path}`);
    }
  }

  render() {
    return null;
  }
}

Redirect.propTypes = {
  path: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
};

export default Redirect;
