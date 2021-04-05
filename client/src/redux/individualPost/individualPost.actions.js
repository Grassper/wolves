import { individualPostTypes } from "./individualPost.types";

//  fetching post Collection
export const fetchPostStart = () => ({
  type: individualPostTypes.FETCH_INDIVIDUAL_POST_START,
});

export const fetchPostSuccess = (post) => ({
  type: individualPostTypes.FETCH_INDIVIDUAL_POST_SUCCESS,
  payload: post,
});

export const fetchPostfailure = (errorMessage) => ({
  type: individualPostTypes.FETCH_INDIVIDUAL_POST_FAILURE,
  payload: errorMessage,
});

export const fetchPostAsyncStart = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostStart());
    try {
      const URL = process.env.REACT_APP_BASE_URL + `/api/post/${id}`;
      const response = await fetch(URL, {
        headers: {
          Accept: "application/json",
        },
      });
      const responseArray = await response.json();
      dispatch(fetchPostSuccess(responseArray));
    } catch (error) {
      dispatch(fetchPostfailure(error));
    }
  };
};

export const clearPostState = () => ({
  type: individualPostTypes.CLEAR_POST_STATE,
});

