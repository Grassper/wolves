import { combineReducers } from "redux";

// importing reducers
import userReducer from "./user/user.reducers";
import postReducer from "./post/post.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  postCollection: postReducer,
});

export default rootReducer;
