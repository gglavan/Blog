import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Menu, Container, Segment, Icon } from "semantic-ui-react";

export default class NavigationBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLogout = () => {
    localStorage.removeItem("token");
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Container>
          {localStorage.getItem("token") ? (
            <Menu inverted secondary>
              <Menu.Item
                as={Link}
                to="/"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to="/posts"
                name="posts"
                active={activeItem === "posts"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to="/posts/add/new"
                name="new post"
                active={activeItem === "new post"}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item as={Link} to="/signin" onClick={this.handleLogout}>
                  <Icon name="sign out" />Logout
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          ) : (
            <Menu inverted secondary>
              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/signin"
                  name="signin"
                  active={activeItem === "signin"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="sign in" />Sign In
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/signup"
                  name="signup"
                  active={activeItem === "signup"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="user circle" />Sign Up
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          )}
        </Container>
      </Segment>
    );
  }
}
