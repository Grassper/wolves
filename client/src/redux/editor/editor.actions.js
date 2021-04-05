import { editorTypes } from "./editor.types";

export const toggleEditor = () => ({
  type: editorTypes.TOGGLE_EDITOR,
});


export const resetEditor = () => ({
  type: editorTypes.RESET_EDITOR,
})

export const updateEditor = (content) => ({
  type: editorTypes.UPDATE_EDITOR,
  payload: content
})