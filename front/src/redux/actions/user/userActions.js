import { ActionTypes } from "../../constants/action-types";
import userApi from "../../../api/user/userApi";
export const RegisterUser = async (data) => {
  const response = await userApi.post(`/register`, data);
  data = response.data;
  console.log("set use", data);
};

export const loginUser = (cred) => async (dispatch) => {
  const response = await userApi.post("/login", cred);
  const data = response.data;
  let user = {
    token: data.access_token,
    id: data.data[0].id,
    firstName: data.data[0].firstname,
    lastname: data.data[0].lastname,
  };
  localStorage.setItem("user", JSON.stringify(user));
  let parse = JSON.parse(localStorage.getItem("user"));

  console.log(parse);
};
