import { userTypes } from "./user.types";

// importing user model
import User from "../../model/user.model";

const INITIAL_STATE = {
  user: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.USER_SIGN_IN_START:
    case userTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      };
    case userTypes.USER_SIGN_REGISTER_SUCCESS:
    case userTypes.USER_SIGN_IN_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        user: new User(payload.user._id, payload.user.name, payload.token, payload.user.email),
        error: null,
      };
    case userTypes.USER_SIGN_OUT_FAILURE:
    case userTypes.USER_SIGN_REGISTER_FAILURE:
    case userTypes.USER_SIGN_IN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
