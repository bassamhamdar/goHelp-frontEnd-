import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

const reducers = combineReducers({
  allusers: UserReducer,
});
export default reducers;
