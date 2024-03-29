import { editorTypes } from "./editor.types";

const INITIAL_STATE = {
  visible: false,
  content: null,
};

const editorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case editorTypes.SIGN_OUT_TRIGGER:
      return {
        visible: false,
        content: null,
      };
    case editorTypes.TOGGLE_EDITOR:
      return {
        ...state,
        visible: !state.visible,
      };
    case editorTypes.RESET_EDITOR:
      return {
        ...state,
        content: null,
      };
    case editorTypes.UPDATE_EDITOR:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default editorReducer;
