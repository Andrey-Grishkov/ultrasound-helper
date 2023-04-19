import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {createStore, compose, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";
import {errorsMessage} from './redux/ErrorsMiddlleware'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, errorsMessage),
  ));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
