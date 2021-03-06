// counterReducer.js

import * as ActionType from "../actions/ActionType";

const counterReducer = (state = 0, action) => {
  let newState;

  switch (action.type) {
    case ActionType.ADD_COUNTER:
      return (newState = state + action.payload);
    case ActionType.REMOVE_COUNTER:
      return (newState = state - action.payload);
    default:
      return state;
  }
};

export default counterReducer;
