import { ActionTypes } from "../../constants/action-types";
import fetchOrg from "../../../api/admin/fetchOrgApi";
import fetchUser from "../../../api/admin/fetchUserApi";

export const FetchOrgs = () => async (dispatch) => {
  const response = await fetchOrg.get("/org");
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_ORGS,
    payload: data.data,
  });
};

export const FetchUsers = () => async (dispatch) => {
  const response = await fetchUser.get("/all");
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
