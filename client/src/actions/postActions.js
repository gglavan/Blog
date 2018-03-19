import axios from "axios";

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
