import {SET_RESULT, SET_INFO, SHOW_ERROR, HIDE_ERROR} from "./types";

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

export function showError(name, text) {
  return dispatch => {
    dispatch({
      type: SHOW_ERROR,
      payload: {name, text}
    })
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR
  }
}
