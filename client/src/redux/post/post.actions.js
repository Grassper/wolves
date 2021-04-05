import { postTypes } from "./post.types";

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
      console.log(responseArray)
      // dispatch(fetchPostCollectionSuccess(responseArray.results));
    } catch (error) {
      dispatch(fetchPostCollectionfailure(error));
    }
  };
};
