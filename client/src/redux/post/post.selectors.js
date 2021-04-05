import { createSelector } from "reselect";

const selectPostCollection= state => state.postCollection;

export const selectPost = createSelector(
    [selectPostCollection],
    collection => collection.posts
)