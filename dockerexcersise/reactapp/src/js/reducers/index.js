// src/js/reducers/index.js

import { ADD_NODE } from "../constants/index";

const initialState = {
  nodes: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_NODE) {
    return Object.assign({}, state, {
      nodes: state.nodes.concat(action.payload)
    });
  }	
  return state;
};

export default rootReducer;
