import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appState } from "./redux/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { LEAGUES } from "./api/teams";
import MERGED_TEAMS from "./api/api";
import { filterTeams, generateIds } from "./Utils/Utils";

export const INITIAL_STATE = {
  LIGUES: LEAGUES,
  TEAMS: MERGED_TEAMS,
  CHECKED: generateIds(),
  LEAGUE: {
    ENGLAND: true,
    SPAIN: true,
    DEUTSCHLAND: true,
    FRANCE: true,
    ITALY: true,
    NEDERLANDS: true,
    ALL: true,
  },
  STATS: {
    ATK: 80,
    SUP: 80,
    DEF: 80,
    SUM: 80,
  },
  STARS: [4, 5],
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
