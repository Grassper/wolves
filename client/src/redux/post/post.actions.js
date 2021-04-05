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
      const responseforAddition = await response.json();
      console.log(responseforAddition)
      alert("post added successfully");
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
      const responseforupdation = await response.json();
      console.log(responseforupdation)
      alert("update successfull");
      dispatch(fetchPostAsyncStart(id));
    } catch (error) {
      dispatch(updatePostfailure(error));
    }
  };
};

//  delete from from server
export const deletePostStart = () => ({
  type: postTypes.FETCH_DElETE_POST_START,
});

export const deletePostSuccess = () => ({
  type: postTypes.FETCH_DElETE_POST_SUCCESS,
});

export const deletePostfailure = (errorMessage) => ({
  type: postTypes.FETCH_DElETE_POST_FAILURE,
  payload: errorMessage,
});

export const deletePostAsyncStart = (id, token) => {
  return async (dispatch) => {
    dispatch(deletePostStart());
    try {
      const URL = process.env.REACT_APP_BASE_URL + `/api/post/${id}`;
      const response = await fetch(URL, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      });
      const responseforRemoval = await response.json();
      alert(responseforRemoval.message);
    } catch (error) {
      dispatch(deletePostfailure(error));
    }
  };
};
