import { ActionTypes } from "../constants/action-types";

const intialState = {
  users: [],
  user_token: localStorage.getItem("user_token"),
};
export const UserReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user_token: payload };
    case ActionTypes.FETCH_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
