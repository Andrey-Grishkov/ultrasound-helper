import {combineReducers} from "redux";
import {appReducer} from './appReducer'
import {nameReducer} from './nameReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  info: nameReducer
})
