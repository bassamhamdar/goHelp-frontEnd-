import { ActionTypes } from "../../constants/action-types";
import userApi from "../../../api/user/userApi";
import { toast } from "react-toastify";

export const RegisterUser = async (data) => {
  const response = await userApi.post(`/register`, data);
  data = response.data;
  console.log("set use", data);
};
export const logoutUser = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.post("/logout", {}, config);
  const data = response.data;
  if (data.success) {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    toast.success("logged out");
  }
};
export const loginUser = async (cred) => {
  const response = await userApi.post("/login", cred);
  console.log("login response", response);
  const data = response.data;

  if (data.success) {
    localStorage.setItem("user_token", data.access_token);
    localStorage.setItem("user_id", data.data[0].id);
    localStorage.setItem("user_name", data.data[0].firstName);
    toast.success("logged in");
  } else {
    toast.error("wrong Credentials");
  }
};

export const FetchOrgs = () => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.get("/org", config);
  console.log("fetch orgs", response);
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_ORGS,
    payload: data.data,
  });
};

export const SearchOrgs = (data) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SEARCH_ORGS,
    payload: data,
  });
};

export const FetchOneOrg = (id) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.get(`/org/profile/${id}`, config);
  const data = response.data;
  console.log("data for one org", data);
  dispatch({
    type: ActionTypes.FETCH_ONE_ORG,
    payload: data.data,
  });
};

export const SendReq = async (message) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.post(`/request`, message, config);
  const data = response.data;

  if (data.success) {
    toast.success("Your request has been sent!");
  } else {
    toast("Error!");
  }
};

export const Fetchposts = () => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.get("/posts", config);
  const data = response.data;
  console.log("from fetch posts", data);
  dispatch({
    type: ActionTypes.FETCH_POSTS,
    payload: data.data,
  });
};

export const DonateOnPost = async (donation) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.post("/donate", donation, config);
  const data = response.data;
  if (data.success) {
    toast.success("Your request has been sent!");
  } else {
    toast("Error!");
  }
};
export const fetchProfile = () => async (dispatch) => {
  let id = localStorage.getItem("user_id");
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  const response = await userApi.get(`profile/${id}`, config);
  const data = response.data;
  console.log("prof", data);
  dispatch({
    type: ActionTypes.FETCH_PROFILE,
    payload: data.data,
  });
};
