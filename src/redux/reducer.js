import * as actionTypes from "./actionTypes";
import MERGED_TEAMS from "../api/api";
import { LEAGUES } from "../api/teams";

const INITIAL_STATE = {
  LIGUES: LEAGUES,
  TEAMS: MERGED_TEAMS,
  LIGUE: {
    ENGLAND: false,
    SPAIN: false,
    DEUTCHLAND: false,
    FRANCE: false,
    ITALY: false,
    NEDERLANDS: false,
  },
  STATS: {
    ATK: 80,
    SUP: 80,
    DEF: 80,
    SUM: 80,
  },
  STARS: [4.5, 5],
};

export const appState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LIGUE_SELECT: {
      return {
        ...state,
      };
    }
    case actionTypes.SET_STATS: {
      return {
        ...state,
      };
    }
    case actionTypes.SET_STARS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
