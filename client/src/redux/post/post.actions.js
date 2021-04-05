import { postTypes } from "./post.types";

import { fetchPostAsyncStart } from "../individualPost/individualPost.actions";

//  fetching post Collection
export const fetchPostCollectionStart = () => ({
  type: postTypes.FETCH_POST_COLLECTION_START,
});

export const fetchPostCollectionSuccess = (collection) => ({
  type: postTypes.FETCH_POST_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchPostCollectionfailure = (errorMessage) => ({
  type: postTypes.FETCH_POST_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchPostCollectionAsyncStart = () => {
  return async (dispatch) => {
    dispatch(fetchPostCollectionStart());
    try {
      const URL = process.env.REACT_APP_BASE_URL + "/api/post/";
      const response = await fetch(URL, {
        headers: {
          Accept: "application/json",
        },
      });
      const responseArray = await response.json();
      dispatch(fetchPostCollectionSuccess(responseArray));
    } catch (error) {
      dispatch(fetchPostCollectionfailure(error));
    }
  };
};

//  add post to server
export const addPostStart = () => ({
  type: postTypes.FETCH_ADD_POST_START,
});

export const addPostSuccess = () => ({
  type: postTypes.FETCH_ADD_POST_SUCCESS,
});

export const addPostfailure = (errorMessage) => ({
  type: postTypes.FETCH_ADD_POST_FAILURE,
  payload: errorMessage,
});

export const addPostAsyncStart = (obj, token) => {
  return async (dispatch) => {
    dispatch(addPostStart());
    try {
      const URL = process.env.REACT_APP_BASE_URL + "/api/post/";
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(obj),
      });
      const responseArray = await response.json();
      console.log(responseArray);
      dispatch(fetchPostCollectionAsyncStart());
    } catch (error) {
      dispatch(addPostfailure(error));
    }
  };
};

//  update post to server
export const updatePostStart = () => ({
  type: postTypes.FETCH_UPDATE_POST_START,
});

export const updatePostSuccess = () => ({
  type: postTypes.FETCH_UPDATE_POST_SUCCESS,
});

export const updatePostfailure = (errorMessage) => ({
  type: postTypes.FETCH_UPDATE_POST_FAILURE,
  payload: errorMessage,
});

export const updatePostAsyncStart = (obj, id, token) => {
  return async (dispatch) => {
    dispatch(updatePostStart());
    try {
      const URL = process.env.REACT_APP_BASE_URL + `/api/post/${id}`;
      const response = await fetch(URL, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(obj),
      });
      const responseArray = await response.json();
      console.log("update successfull", responseArray);
      dispatch(fetchPostAsyncStart(id));
    } catch (error) {
      dispatch(updatePostfailure(error));
    }
  };
};
