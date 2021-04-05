import { createSelector } from "reselect";

const selectEditor= state => state.editor;

export const selectEditorVisible = createSelector(
    [selectEditor],
    editor => editor.visible
)