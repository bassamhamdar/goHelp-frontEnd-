import { combineReducers } from "redux";
import { OrgReducer } from "./orgReducer";
import { UserReducer } from "./userReducer";

const reducers = combineReducers({
  users: UserReducer,
  orgs: OrgReducer,
});
export default reducers;
