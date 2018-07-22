import * as ActionType from "../actions/ActionType";

const idReducer = (state = 0, action) => {
  let idState;

  switch (action.type) {
    case ActionType.ADD_COUNTER:
      return (idState = action.id);
    case ActionType.REMOVE_COUNTER:
      return (idState = action.id);
    default:
      return state;
  }
};

export default idReducer;
