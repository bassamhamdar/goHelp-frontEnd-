import { ActionTypes } from "../../constants/action-types";
import adminApi from "../../../api/admin/adminApi";

export const FetchOrgs = () => async (dispatch) => {
  const response = await adminApi.get("/org");
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_ORGS,
    payload: data.data,
  });
};

export const FetchUsers = () => async (dispatch) => {
  const response = await adminApi.get("/user");
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: data.data,
  });
};
export const SetAdmin = (users) => {
  return {
    type: ActionTypes.SET_ADMIN,
    payload: users,
  };
};
