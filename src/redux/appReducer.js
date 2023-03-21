import {SET_GROWN, SET_WEIGHT, SET_SEP, SET_L, SET_RESULT} from "./types";

const initialState = {
  grown: '',
  weight: '',
  result: '0'
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROWN:
    {
      console.log(action.payload, action.type)
      return {
        grown: action.payload
      };
    }
    case SET_WEIGHT:
    {
      console.log(action.payload, action.type)
      return {weight: action.payload};
    }

    case SET_RESULT:
    {
      const resultat = action.payload.grown*action.payload.weight*action.payload.l*action.payload.sep
      console.log(action.payload, action.type, resultat)
      return {result: resultat};
    }

    default: return state
  }
}
