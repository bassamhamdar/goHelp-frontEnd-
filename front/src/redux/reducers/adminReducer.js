import { ActionTypes } from "../constants/action-types";

const intialState = {
  org: [],
};
export const AdminReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_ORGS:
      return { ...state, org: payload };

    default:
      return state;
  }
};
