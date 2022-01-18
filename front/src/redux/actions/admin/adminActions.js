import { ActionTypes } from "../../constants/action-types";
import adminApi from "../../../api/admin/adminApi";
import { toast } from "react-toastify";
export const FetchOrgs = () => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.get("/org", config);
  const data = response.data;
  console.log("data", data);
  dispatch({
    type: ActionTypes.FETCH_ORGS,
    payload: data.data,
  });
};

export const FetchUsers = () => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.get("/user", config);
  const data = response.data;
  console.log("user data", data);
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: data.data,
  });
};

export const AdminLogin = (cred) => async (dispatch) => {
  const response = await adminApi.post("/login", cred);
  const data = response.data;
  console.log("admin log", data);
  if (data.success) {
    localStorage.setItem("admin_token", data.access_token);
    dispatch({
      type: ActionTypes.SET_ADMIN,
      payload: localStorage.getItem("admin_token"),
    });
    toast.success("Welcome Admin");
  } else {
    toast.error("wrong Credentials");
  }
};

export const AdminLogout = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.post("/logout", {}, config);
  const data = response.data;
  console.log("log out admin", data);
  if (data.success) {
    localStorage.removeItem("admin_token");
    dispatch({
      type: ActionTypes.SET_ADMIN,
      payload: localStorage.getItem("admin_token"),
    });
    toast.success("logged out");
  }
};
export const BlockUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.post(`/blockuser/${id}`, {}, config);
  const data = response.data;
  console.log("block user", data);
  if (data.success) {
    toast.success("User Blocked");
  } else {
    toast.error("Error: user not blocked !");
  }
};

export const UnBlockUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.post(`/unblockuser/${id}`, {}, config);
  const data = response.data;
  console.log("unblock user", data);
  if (data.success) {
    toast.success("User is unblocked");
  } else {
    toast.error("Error: while unblocking !");
  }
};

export const ApproveOrganization = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
  const response = await adminApi.post(`/organization/${id}`, {}, config);
  const data = response.data;
  console.log("approve org", data);
  if (data.success) {
    toast.success("Status Changed");
  } else {
    toast.error("Error: while approving !");
  }
};
