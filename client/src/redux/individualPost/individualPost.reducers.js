import { individualPostTypes } from "./individualPost.types";

// importing model
import Post from "../../model/post.model";

const INITIAL_STATE = {
  isLoad: false,
  post: null,
  error: null,
};

const individualPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case individualPostTypes.FETCH_INDIVIDUAL_POST_START:
      return {
        ...state,
        post: null,
        error: null,
        isLoad: true,
      };
    case individualPostTypes.FETCH_INDIVIDUAL_POST_SUCCESS:
      const { payload } = action;
      const importPost = new Post(
        payload._id,
        payload.title,
        payload.author,
        payload.description,
        payload.imageUrl,
        payload.date,
        payload.comments
      );
      return {
        ...state,
        post: importPost,
        isLoad: false,
        error: null,
      };
    case individualPostTypes.FETCH_INDIVIDUAL_POST_FAILURE:
      return {
        ...state,
        posts: null,
        isLoad: false,
        error: action.payload,
      };

    case individualPostTypes.CLEAR_POST_STATE:
      return{
        isLoad: false,
        post: null,
        error: null,
      }
    default:
      return state;
  }
};

export default individualPostReducer;
