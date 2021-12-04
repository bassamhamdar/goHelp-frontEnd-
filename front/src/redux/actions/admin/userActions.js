import { ActionTypes } from "../../constants/action-types";
import fetch from "../../../api/admin/fetchUserApi";
export const SetUsers = (users) => {
  return {
    type: ActionTypes.SetUser,
    payload: users,
  };
};

export const FetchUsers = () => async (dispatch) => {
  const response = await fetch.get("/all");
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: data.data,
  });
};
