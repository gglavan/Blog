import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Icon,
  Loader,
  Message
} from "semantic-ui-react";
import { PropTypes } from "prop-types";
import { userSignUpRequest } from "../../actions/userActions";
import Redirect from "./Redirect";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validatePassword = password => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(password);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.validateEmail(this.state.email) &&
      this.validatePassword(this.state.password) &&
      this.state.password === this.state.confirmPassword
    ) {
      this.props.userSignUp("/api/users/signup", this.state);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Form.Field>
          <Input iconPosition="left" placeholder="Email">
            <Icon name="at" />
            <input name="email" required />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Password">
            <Icon name="lock" />
            <input type="password" name="password" required />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Confirm password">
            <Icon name="lock" />
            <input type="password" name="confirmPassword" required />
          </Input>
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" required />
        </Form.Field>
        <Button fluid type="submit" color="blue">
          Sign Up
        </Button>
        <br />
        <Link to="/signin">
          <Icon name="pointing right" />
          Already have an account?
        </Link>

        {this.props.isLoading && (
          <Loader active inline="centered">
            Loading...
          </Loader>
        )}
        {!this.props.isLoading &&
          this.props.message !== undefined && (
            <Message positive>
              <Message.Header>{this.props.message}</Message.Header>
              <p>{"You may now log-in with the username you have chosen"}</p>
              <Redirect path={"signin"} />
            </Message>
          )}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  message: state.user.message,
  hasErrored: state.userRegistrationHasErrored,
  isLoading: state.userRegistrationIsLoading
});

const mapDispatchToProps = dispatch => ({
  userSignUp: (url, data) => dispatch(userSignUpRequest(url, data))
});

SignUp.propTypes = {
  userSignUp: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
