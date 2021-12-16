import { ActionTypes } from "../constants/action-types";

const intialState = {
  helpRequests: [],
  donRequests: [],
};
export const ReqReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_HELP_REQ:
      return { ...state, helpRequests: payload };
    case ActionTypes.FETCH_DON_REQ:
      return { ...state, donRequests: payload };
    default:
      return state;
  }
};
