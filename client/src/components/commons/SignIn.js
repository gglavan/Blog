import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form, Input, Icon, Loader } from "semantic-ui-react";
import { userSignInRequest } from "../../actions/userActions";
import Redirect from "./Redirect";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.userSignIn("/api/users/signin", this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Form.Field>
          <Input iconPosition="left" placeholder="Email">
            <Icon name="at" />
            <input name="email" />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Password">
            <Icon name="lock" />
            <input type="password" name="password" />
          </Input>
        </Form.Field>
        <Button fluid type="submit" color="blue">
          Sign In
        </Button>
        <br />
        <Link to="/signup">
          <Icon name="pointing right" />
          {"Don't have an account?"}
        </Link>
        {this.props.isLoading && (
          <Loader active inline="centered">
            Loading...
          </Loader>
        )}
        {!this.props.isLoading &&
          this.props.message !== undefined && <Redirect path={"posts"} />}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  message: state.loggedUser.message,
  hasErrored: state.userSignInHasErrored,
  isLoading: state.userSignInIsLoading
});

const mapDispatchToProps = dispatch => ({
  userSignIn: (url, data) => dispatch(userSignInRequest(url, data))
});

SignIn.propTypes = {
  userSignIn: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
