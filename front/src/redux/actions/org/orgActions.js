import { toast } from "react-toastify";
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
  console.log("log org", data);
  if (data.success) {
    localStorage.setItem("org_token", data.access_token);
    localStorage.setItem("org_id", data.data[0].id);
    localStorage.setItem("org_name", data.data[0].name);
    dispatch({
      type: ActionTypes.SET_ORG,
      payload: localStorage.getItem("org_token"),
    });
    toast.success("Logged in");
  } else {
    toast.error("Wrong Credentials");
  }
};
export const logoutOrg = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  const response = await orgApi.post("/logout", {}, config);
  const data = response.data;
  console.log("log org", data);
  if (data.success) {
    toast.success("logged out");
    localStorage.removeItem("org_token");
    localStorage.removeItem("org_id");
    localStorage.removeItem("org_name");
    dispatch({
      type: ActionTypes.SET_ORG,
      payload: localStorage.getItem("org_token"),
    });
  }
};

export const fetchHelpReq = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  let orgId = localStorage.getItem("org_id");
  const response = await orgApi.get(`/helpRequests/${orgId}`, config);
  const data = response.data;
  console.log("fetchHelpReq", data);
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_HELP_REQ,
      payload: data.data,
    });
  }
};

export const fetchDonReq = () => async (dispatch) => {
  let orgId = localStorage.getItem("org_id");
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  const response = await orgApi.get(`/donationRequests/${orgId}`, config);
  const data = response.data;
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_DON_REQ,
      payload: data.data,
    });
  }
};

export const createPost = async (input) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  const response = await orgApi.post(`/post`, input, config);
  const data = response.data;

  if (data.success) {
    toast.success("Your post has been added");
  } else {
    toast("Error!");
  }
};

export const fetchDonations = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  let orgId = localStorage.getItem("org_id");
  const response = await orgApi.get(`/all/donations/${orgId}`, config);
  const data = response.data;
  console.log("fetchDon", data);
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_DON,
      payload: data.data,
    });
  }
};

export const fetchOrgProfile = () => async (dispatch) => {
  let id = localStorage.getItem("org_id");
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("org_token")}`,
    },
  };
  const response = await orgApi.get(`/profile/${id}`, config);
  const data = response.data;
  console.log("org pro fetch", data);
  if (data.success) {
    dispatch({
      type: ActionTypes.FETCH_ORG_PROFILE,
      payload: data.data,
    });
  }
};
