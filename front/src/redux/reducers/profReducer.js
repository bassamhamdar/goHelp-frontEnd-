import { ActionTypes } from "../constants/action-types";

const intialState = {
  profile: [],
};
export const ProfReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PROFILE:
      return { ...state, profile: payload };

    default:
      return state;
  }
};
