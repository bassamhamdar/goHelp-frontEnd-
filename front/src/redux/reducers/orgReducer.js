import { ActionTypes } from "../constants/action-types";

const intialState = {
  org: [],
};
export const OrgReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_ORGS:
      return { ...state, org: payload };

    case ActionTypes.SEARCH_ORGS: {
      const lowerCased = payload.toLowerCase();
      const searched = state.org.filter((item) =>
        item.name.toLowerCase().includes(lowerCased)
      );
      console.log("search in reducer", searched);
      return {
        ...state,
        org: searched,
      };
    }

    case ActionTypes.FETCH_ONE_ORG:
      return { ...state, org: payload };

    default:
      return state;
  }
};
