// src/js/actions/index.js

import { ADD_NODE } from "../constants/index";

export function addNode(payload) {
    return { type: ADD_NODE, payload }
};
