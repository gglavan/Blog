import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Input, Menu, Container, Segment } from "semantic-ui-react";

export default class NavigationBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Container>
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
            <Menu.Item
              as={Link}
              to="/about"
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/contacts"
              name="contacts"
              active={activeItem === "contacts"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
