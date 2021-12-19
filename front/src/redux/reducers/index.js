import { combineReducers } from "redux";
import { OrgReducer } from "./orgReducer";
import { UserReducer } from "./userReducer";
import { ReqReducer } from "./reqReducer";
import { PostReducer } from "./postReducer";
import { ProfReducer } from "./profReducer";
const reducers = combineReducers({
  users: UserReducer,
  orgs: OrgReducer,
  req: ReqReducer,
  posts: PostReducer,
  prof: ProfReducer,
});
export default reducers;
