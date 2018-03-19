import axios from "axios";

// Sign up user

export function userRegistrationHasErrored(bool) {
  return {
    type: "USER_REGISTRATION_HAS_ERRORED",
    hasErrored: bool
  };
}
export function userRegistrationIsLoading(bool) {
  return {
    type: "USER_REGISTRATION_IS_LOADING",
    isLoading: bool
  };
}
export function userRegistrationSuccess(message) {
  return {
    type: "USER_REGISTRATION_SUCCESS",
    message
  };
}

export function userSignUpRequest(url, data) {
  return dispatch => {
    dispatch(userRegistrationIsLoading(true));
    axios
      .post(url, data)
      .then(response => {
        dispatch(userRegistrationIsLoading(false));
        return response.data;
      })
      .then(message => dispatch(userRegistrationSuccess(message)))
      .catch(() => dispatch(userRegistrationHasErrored(true)));
  };
}

// Sign in user

export function userSignInHasErrored(bool) {
  return {
    type: "USER_SIGN_IN_HAS_ERRORED",
    hasErrored: bool
  };
}
export function userSignInIsLoading(bool) {
  return {
    type: "USER_SIGN_IN_IS_LOADING",
    isLoading: bool
  };
}
export function userSignInSuccess(message) {
  return {
    type: "USER_SIGN_IN_SUCCESS",
    message
  };
}

export function userSignInRequest(url, data) {
  return dispatch => {
    dispatch(userSignInIsLoading(true));
    axios
      .post(url, data)
      .then(response => {
        dispatch(userSignInIsLoading(false));
        return response.data;
      })
      .then(message => dispatch(userSignInSuccess(message)))
      .catch(() => dispatch(userSignInHasErrored(true)));
  };
}
