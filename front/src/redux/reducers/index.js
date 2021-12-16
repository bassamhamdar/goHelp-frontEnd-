import { combineReducers } from "redux";
import { OrgReducer } from "./orgReducer";
import { UserReducer } from "./userReducer";
import { ReqReducer } from "./reqReducer";
const reducers = combineReducers({
  users: UserReducer,
  orgs: OrgReducer,
  req: ReqReducer,
});
export default reducers;
