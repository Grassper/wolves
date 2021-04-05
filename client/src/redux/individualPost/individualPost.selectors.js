import { createSelector } from "reselect";

const selectIndividualPost= state => state.individualPost;

export const selectPost = createSelector(
    [selectIndividualPost],
    individualPost => individualPost.post
)