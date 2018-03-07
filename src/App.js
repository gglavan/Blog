import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";
import PostDetailsPage from "./components/pages/PostDetailsPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" exact component={PostsPage} />
    <Route name="details" path="/posts/:id" exact component={PostDetailsPage} />
  </div>
);

export default App;
