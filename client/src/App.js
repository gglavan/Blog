import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";
import PostDetailsPage from "./components/pages/PostDetailsPage";
import PostAddPage from "./components/pages/PostAddPage";
import PostEditPage from "./components/pages/PostEditPage";
import Navbar from "./components/commons/Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  @font-face {
    font-family: "Rammetto";
    src: url("./fonts/RammettoOne-Regular.ttf");
  }

  @font-face {
    font-family: "Roboto-Black";
    src: url("./fonts/Roboto-Black.ttf");
  }

  @font-face {
    font-family: "Roboto-Bold";
    src: url("./fonts/Roboto-Bold.ttf");
  }

  @font-face {
    font-family: "Roboto-Light";
    src: url("./fonts/Roboto-Light.ttf");
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: url("./fonts/Roboto-Regular.ttf");
  }
`;

const App = () => (
  <Wrapper>
    <Navbar />
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" exact component={PostsPage} />
    <Route path="/posts/:id" exact component={PostDetailsPage} />
    <Route path="/posts/edit/:id" exact component={PostEditPage} />
    <Route path="/posts/add/new" exact component={PostAddPage} />
  </Wrapper>
);

export default App;
