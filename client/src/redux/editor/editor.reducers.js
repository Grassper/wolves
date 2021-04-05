import { editorTypes } from "./editor.types";

const INITIAL_STATE = {
   visible:false
};

const editorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case editorTypes.TOGGLE_EDITOR:
      return {
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default editorReducer;
