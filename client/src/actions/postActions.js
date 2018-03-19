import axios from "axios";

// Get all posts

export function postsHasErrored(bool) {
  return {
    type: "POSTS_HAS_ERRORED",
    hasErrored: bool
  };
}
export function postsIsLoading(bool) {
  return {
    type: "POSTS_IS_LOADING",
    isLoading: bool
  };
}
export function postsFetchDataSuccess(posts) {
  return {
    type: "POSTS_FETCH_DATA_SUCCESS",
    posts
  };
}

export function postsFetchData(url) {
  return dispatch => {
    dispatch(postsIsLoading(true));
    axios
      .get(url)
      .then(response => {
        dispatch(postsIsLoading(false));
        return response.data;
      })
      .then(posts => dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(postsHasErrored(true)));
  };
}

// Get single post

export function postHasErrored(bool) {
  return {
    type: "POST_HAS_ERRORED",
    hasErrored: bool
  };
}
export function postIsLoading(bool) {
  return {
    type: "POST_IS_LOADING",
    isLoading: bool
  };
}
export function postFetchDataSuccess(post) {
  return {
    type: "POST_FETCH_DATA_SUCCESS",
    post
  };
}

export function postFetchData(url) {
  return dispatch => {
    dispatch(postIsLoading(true));
    axios
      .get(url)
      .then(response => {
        dispatch(postIsLoading(false));
        return response.data;
      })
      .then(post => dispatch(postFetchDataSuccess(post)))
      .catch(() => dispatch(postHasErrored(true)));
  };
}

// Delete post
