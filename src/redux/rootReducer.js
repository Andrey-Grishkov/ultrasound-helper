import {combineReducers} from "redux";
import {appReducer} from './appReducer';
import {nameReducer} from './nameReducer';
import {errReducer} from './errReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  info: nameReducer,
  error: errReducer
})
