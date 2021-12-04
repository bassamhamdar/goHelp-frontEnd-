import { combineReducers } from "redux";
import { AdminReducer } from "./adminReducer";
import { UserReducer } from "./userReducer";

const reducers = combineReducers({
  users: UserReducer,
  orgs: AdminReducer,
});
export default reducers;
