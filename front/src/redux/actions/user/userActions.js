import { ActionTypes } from "../../constants/action-types";
import userApi from "../../../api/user/userApi";
export const RegisterUser = async (data) => {
  const response = await userApi.post(`/register`, data);
  data = response.data;
  console.log("set use", data);
};

export const loginUser = (cred) => async (dispatch) => {
  console.log("hhah");
  const response = await userApi.post("/login", cred);
  const data = response.data;
  console.log("login dddd", data);
  dispatch({
    type: ActionTypes.SET_USER,
    payload: data,
  });
};
