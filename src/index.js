import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appState } from "./redux/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

export const INITIAL_STATE = {
  transactions: [],
  euroExchangeRate: 0,
};

const applyInitialState = () => {
  const local = JSON.parse(localStorage.getItem("state"));
  return local ? local : INITIAL_STATE;
};

const rootReducer = appState;
const store = createStore(
  rootReducer,
  applyInitialState(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
