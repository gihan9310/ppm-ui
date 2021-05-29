import { combineReducers } from "redux";
import error_reducer from "./error_reducer";
import project_reducer from "./project_reducer";

export default combineReducers({
  errors: error_reducer,
  project:project_reducer
});
