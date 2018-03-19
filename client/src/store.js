import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import {
  post,
  postHasErrored,
  postIsLoading,
  posts,
  postsHasErrored,
  postsIsLoading
} from "./reducers/postReducer";
import {
  loggedUser,
  userSignInHasErrored,
  userSignInIsLoading,
  user,
  userRegistrationHasErrored,
  userRegistrationIsLoading
} from "./reducers/userReducer";

export default createStore(
  combineReducers({
    loggedUser,
    userSignInHasErrored,
    userSignInIsLoading,
    user,
    userRegistrationHasErrored,
    userRegistrationIsLoading,
    post,
    postHasErrored,
    postIsLoading,
    posts,
    postsHasErrored,
    postsIsLoading
  }),
  {},
  applyMiddleware(logger, thunk, promise())
);
