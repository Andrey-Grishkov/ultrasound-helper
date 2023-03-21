import {SET_GROWN, SET_WEIGHT, SET_L, SET_SEP, SET_RESULT} from "./types";

export function calcRes(grown, weight, l, sep) {
  return {
    type: SET_RESULT,
    payload: {grown, weight, l, sep}
  }
}

export function setGrown(grown) {
  return {
    type: SET_GROWN,
    payload: grown
  }
}

export function setWeight(weight) {
  return {
    type: SET_WEIGHT,
    payload: weight
  }
}
