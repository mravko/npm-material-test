import { combineReducers } from "redux";
import { selectReducer } from "../reusable/Select";

const someReducerThatHandlesSameAction = (state = true, action) => {
  if (action.type.indexOf("CHANGE") !== -1) {
    console.log("changing 1");
  }
  return state;
};

export default combineReducers({
  someReducerThatHandlesSameAction,
  ...selectReducer("reused1"),
  ...selectReducer("reused2"),
  ...selectReducer("reused3")
});
