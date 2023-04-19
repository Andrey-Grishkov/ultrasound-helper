import {SHOW_ERROR, HIDE_ERROR} from "./types";

const initialState = {
  error: null
}

export const errReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_ERROR:
      return {...state, error: action.payload};
    case HIDE_ERROR:
      return {...state, error: null};
    default: return state
  }
}
