import { combineReducers } from "redux";

// importing reducers
import userReducer from "./user/user.reducers";
import postReducer from "./post/post.reducers";
import individualPostReducer from "./individualPost/individualPost.reducers";
import editorReducer from "./editor/editor.reducers"

const rootReducer = combineReducers({
  user: userReducer,
  postCollection: postReducer,
  individualPost: individualPostReducer,
  editor: editorReducer
});

export default rootReducer;
