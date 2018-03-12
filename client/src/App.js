import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";
import PostDetailsPage from "./components/pages/PostDetailsPage";
import PostAddPage from "./components/pages/PostAddPage";
import PostEditPage from "./components/pages/PostEditPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" exact component={PostsPage} />
    <Route path="/posts/:id" exact component={PostDetailsPage} />
    <Route path="/posts/edit/:id" exact component={PostEditPage} />
    <Route path="/posts/add/new" exact component={PostAddPage} />
  </div>
);

export default App;
