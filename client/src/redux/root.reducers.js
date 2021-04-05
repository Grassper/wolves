import { combineReducers } from "redux";

// importing reducers
import userReducer from "./user/user.reducers";
import postReducer from "./post/post.reducers";
import individualPostReducer from "./individualPost/individualPost.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  postCollection: postReducer,
  individualPost: individualPostReducer
});

export default rootReducer;
