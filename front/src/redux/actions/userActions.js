import { ActionTypes } from "../constants/action-types";
import userApi from "../../api/userApi";
export const SetUsers = (users) => {
  return {
    type: ActionTypes.SetUser,
    payload: users,
  };
};

export const FetchUsers = () => async (dispatch) => {
  const response = await userApi.get("/all");
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: data.data,
  });
};
