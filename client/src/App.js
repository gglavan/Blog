import React from "react";
import styled from "react-emotion";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";
import PostDetailsPage from "./components/pages/PostDetailsPage";
import PostAddPage from "./components/pages/PostAddPage";
import PostEditPage from "./components/pages/PostEditPage";
import AboutPage from "./components/pages/AboutPage";
import ContactsPage from "./components/pages/ContactsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NavigationBar from "./components/commons/NavigationBar";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";

import "./App.css";

const Wrapper = styled("div")`
  background-color: #f4f4f4;
`;

const App = () => (
  <Wrapper>
    <NavigationBar />

    {localStorage.getItem("token") ? (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contacts" exact component={ContactsPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/posts/:id" exact component={PostDetailsPage} />
        <Route path="/posts/edit/:id" exact component={PostEditPage} />
        <Route path="/posts/add/new" exact component={PostAddPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    ) : (
      <Switch>
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    )}
  </Wrapper>
);

export default App;
