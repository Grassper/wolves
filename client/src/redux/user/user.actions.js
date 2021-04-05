import { userTypes } from "./user.types";

//  user sign in
export const userSignStart = () => ({
  type: userTypes.USER_SIGN_IN_START,
});

export const userSignSuccess = (response) => ({
  type: userTypes.USER_SIGN_IN_SUCCESS,
  payload: response,
});

export const userSignfailure = (errorMessage) => ({
  type: userTypes.USER_SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const userSignAsyncStart = (email, password) => {
  return async (dispatch) => {
    dispatch(userSignStart());
    try {
      const URL = "https://nytwolves.herokuapp.com/users/login";
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const signResponse = await response.json();
      dispatch(userSignSuccess(signResponse));
    } catch (error) {
      dispatch(userSignfailure(error));
    }
  };
};

// user registeration in

export const userRegistrationStart = () => ({
  type: userTypes.USER_SIGN_REGISTER_START,
});

export const userRegistrationSuccess = (response) => ({
  type: userTypes.USER_SIGN_REGISTER_SUCCESS,
  payload: response,
});

export const userRegistrationfailure = (errorMessage) => ({
  type: userTypes.USER_SIGN_REGISTER_FAILURE,
  payload: errorMessage,
});

export const userRegistrationAsyncStart = (name, email, password) => {
  return async (dispatch) => {
    dispatch(userRegistrationStart());
    try {
      const URL = "https://nytwolves.herokuapp.com/users/register";
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const registrationResponse = await response.json();
      dispatch(userRegistrationSuccess(registrationResponse));
    } catch (error) {
      dispatch(userRegistrationfailure(error));
    }
  };
};

// user sign out

export const userSignOutStart = () => ({
  type: userTypes.USER_SIGN_OUT_START,
});

export const userSignOutSuccess = (response) => ({
  type: userTypes.USER_SIGN_OUT_SUCCESS,
});

export const userSignOutfailure = (errorMessage) => ({
  type: userTypes.USER_SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const userSignOutAsyncStart = (token) => {
  return async (dispatch) => {
    dispatch(userSignOutStart());
    try {
      const URL = "https://nytwolves.herokuapp.com/users/logoutall";
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const registrationResponse = await response.json();
      console.log(registrationResponse);
      dispatch(userSignOutSuccess());
    } catch (error) {
      dispatch(userSignOutfailure(error));
    }
  };
};
