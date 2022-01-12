import { ActionTypes } from "../constants/action-types";

const intialState = {
  org: [],
  searchOrg: [],
  profile: [],
  org_token: localStorage.getItem("org_token"),
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

      return {
        ...state,
        searchOrg: searched,
      };
    }

    case ActionTypes.FETCH_ONE_ORG:
      return { ...state, org: payload };
    case ActionTypes.FETCH_ORG_PROFILE:
      return { ...state, profile: payload };
    case ActionTypes.SET_ORG:
      return { ...state, org_token: payload };
    default:
      return state;
  }
};
