// Sign up user

export function userRegistrationHasErrored(state = false, action) {
  switch (action.type) {
    case "USER_REGISTRATION_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}
export function userRegistrationIsLoading(state = false, action) {
  switch (action.type) {
    case "USER_REGISTRATION_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function user(state = {}, action) {
  switch (action.type) {
    case "USER_REGISTRATION_SUCCESS":
      return action.message;
    default:
      return state;
  }
}

// Sign in user

export function userSignInHasErrored(state = false, action) {
  switch (action.type) {
    case "USER_SIGN_IN_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}
export function userSignInIsLoading(state = false, action) {
  switch (action.type) {
    case "USER_SIGN_IN_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function loggedUser(state = {}, action) {
  switch (action.type) {
    case "USER_SIGN_IN_SUCCESS":
      return action.message;
    default:
      return state;
  }
}
