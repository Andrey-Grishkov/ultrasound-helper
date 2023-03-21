import {SET_RESULT} from "./types";

export function calcRes(grown, weight, l, sep) {
  return {
    type: SET_RESULT,
    payload: {grown, weight, l, sep}
  }
}
