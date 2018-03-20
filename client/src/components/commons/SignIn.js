import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form, Input, Icon, Loader, Message } from "semantic-ui-react";
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
            <input type="email" name="email" required />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Password">
            <Icon name="lock" />
            <input type="password" name="password" required />
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
        {this.props.isLoading && !this.props.hasErrored ? (
          <Loader active inline="centered">
            Loading...
          </Loader>
        ) : (
          this.props.isLoading &&
          this.props.hasErrored && (
            <Message negative hidden={this.isHidden}>
              <Message.Header>{"Wrong email or password"}</Message.Header>
              <p>{"Please verify the text you entered"}</p>
            </Message>
          )
        )}
        {!this.props.isLoading &&
          this.props.token !== undefined && (
            <Redirect path={"/"} token={this.props.token} />
          )}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.loggedUser.token,
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
  token: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
