import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appState } from "./redux/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { generateRandomId } from "./Utils/Utils";

export const INITIAL_STATE = {
  transactions: [
    {
      name: "[NAZWA NAZWA]",
      amount: 34.22,
      id: generateRandomId(),
    },
  ],
};

const rootReducer = appState;
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
