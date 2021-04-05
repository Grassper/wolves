import { createSelector } from "reselect";

const selectPostCollection= state => state.postCollection;

export const selectPostArray = createSelector(
    [selectPostCollection],
    collection => collection.posts
)