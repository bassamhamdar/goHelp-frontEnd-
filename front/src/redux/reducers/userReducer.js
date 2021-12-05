import { ActionTypes } from "../constants/action-types";

const intialState = {
  users: [],
};
export const UserReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, users: payload };
    case ActionTypes.FETCH_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
