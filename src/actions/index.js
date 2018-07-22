// index.js

import * as actionType from "./ActionType";
let idCount = 0;

export const addCounter = id => ({
  type: actionType.ADD_COUNTER,
  payload: 1,
  id: idCount++
});

export const removeCounter = id => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1,
  id: idCount--
});
