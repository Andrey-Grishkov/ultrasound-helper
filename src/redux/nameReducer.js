import {SET_INFO} from "./types";
import {doctorList} from "../utils/constants"

const initialState = doctorList[0];

export const nameReducer = (state = initialState, action) => {
  if(action.type===SET_INFO){
    return action.payload
  }
  return state
}
