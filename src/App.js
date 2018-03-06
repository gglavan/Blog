import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" exact component={PostsPage} />
  </div>
);

export default App;
