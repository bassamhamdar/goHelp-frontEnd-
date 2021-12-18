import { ActionTypes } from "../constants/action-types";

const intialState = {
  helpRequests: [],
  donRequests: [],
  donations: [],
};
export const ReqReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_HELP_REQ:
      return { ...state, helpRequests: payload };
    case ActionTypes.FETCH_DON_REQ:
      return { ...state, donRequests: payload };
    case ActionTypes.FETCH_DON:
      return { ...state, donations: payload };

    default:
      return state;
  }
};
