import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { posts, postsHasErrored, postsIsLoading } from "./reducers/postReducer";
// import user from "./reducers/userReducer";

export default createStore(
  combineReducers({
    posts,
    postsHasErrored,
    postsIsLoading
  }),
  {},
  applyMiddleware(logger, thunk, promise())
);
