import { combineReducers } from "redux";
import { OrgReducer } from "./orgReducer";
import { UserReducer } from "./userReducer";
import { ReqReducer } from "./reqReducer";
import { PostReducer } from "./postReducer";
const reducers = combineReducers({
  users: UserReducer,
  orgs: OrgReducer,
  req: ReqReducer,
  posts: PostReducer,
});
export default reducers;
