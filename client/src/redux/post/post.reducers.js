import { postTypes } from "./post.types";

// importing model
import Post from "../../model/post.model";

const INITIAL_STATE = {
  isLoad: false,
  posts: [],
  error: null,
};

const postModelers = (collection) => {
  const result = collection.map((post) => {
    return new Post(
      post._id,
      post.title,
      post.author,
      post.description,
      post.imageUrl,
      post.date,
      post.comments
    );
  });

  return result;
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postTypes.FETCH_POST_COLLECTION_START:
      return {
        ...state,
        posts: [],
        error: null,
        isLoad: true,
      };
    case postTypes.FETCH_POST_COLLECTION_SUCCESS:
      const { payload } = action;
      const postCollection = postModelers(payload);
      return {
        ...state,
        posts: postCollection,
        isLoad: false,
        error: null,
      };
    case postTypes.FETCH_POST_COLLECTION_FAILURE:
      return {
        ...state,
        posts: [],
        isLoad: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
