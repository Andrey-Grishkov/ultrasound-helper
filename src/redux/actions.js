import {SET_RESULT, SET_INFO} from "./types";

export function calcRes(grown, weight, l, sep) {
  return {
    type: SET_RESULT,
    payload: {grown, weight, l, sep}
  }
}

export function infoContact(name, photo, info, contacts) {
  return {
    type: SET_INFO,
    payload: {name, photo, info, contacts}
  }
}
