import { ActionTypes } from "../constants/action-types";

const intialState = {
  posts: [],
};
export const PostReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};
