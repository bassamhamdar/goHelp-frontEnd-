import { ActionTypes } from "../constants/action-types";

const intialState = {
  admin: [],
  admin_token: localStorage.getItem("admin_token"),
};
export const AdminReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADMIN:
      return { ...state, admin_token: payload };

    default:
      return state;
  }
};
