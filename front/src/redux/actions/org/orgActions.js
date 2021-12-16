import orgApi from "../../../api/org/orgApi";
import { ActionTypes } from "../../constants/action-types";

export const RegisterOrg = async (data) => {
  const response = await orgApi.post(`/register`, data);
  data = response.data;
  console.log("set use", data);
};
export const loginOrg = (cred) => async (dispatch) => {
  const response = await orgApi.post("/login", cred);
  const data = response.data;
  let org = {
    token: data.access_token,
    id: data.data[0].id,
    firstName: data.data[0].firstname,
    lastname: data.data[0].lastname,
  };
  localStorage.setItem("org", JSON.stringify(org));
  let parse = JSON.parse(localStorage.getItem("org"));

  console.log(parse);
};

export const fetchHelpReq = (orgId) => async (dispatch) => {
  const response = await orgApi.get(`/helpRequests/${orgId}`);
  const data = response.data;
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_HELP_REQ,
      payload: data.data,
    });
  }
};

export const fetchDonReq = (orgId) => async (dispatch) => {
  const response = await orgApi.get(`/donationRequests/${orgId}`);
  const data = response.data;
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_DON_REQ,
      payload: data.data,
    });
  }
};
