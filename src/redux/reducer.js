import * as actionTypes from "./actionTypes";
import { INITIAL_STATE } from "../index";
import {
  addTeamsToCheck,
  filterTeamsByStarRatio,
  filterTeamsByStats,
  generateIds,
} from "../Utils/Utils";
import { LEAGUES_IDS } from "../api/teams";

export const appState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LIGUE_SELECT: {
      const { select, value } = action;
      let checkedSet; // new set for changes

      const newValue = Object.assign({}, state.LIGUE);
      newValue[select] = value;

      if (select === "ALL") {
        return {
          ...state,
          LIGUE: value
            ? {
                ENGLAND: true,
                SPAIN: true,
                DEUTSCHLAND: true,
                FRANCE: true,
                ITALY: true,
                NEDERLANDS: true,
                ALL: true,
              }
            : {
                ENGLAND: false,
                SPAIN: false,
                DEUTSCHLAND: false,
                FRANCE: false,
                ITALY: false,
                NEDERLANDS: false,
                ALL: false,
              },
          CHECKED: value ? generateIds() : new Set(),
        };
      } else {
        checkedSet = addTeamsToCheck(
          LEAGUES_IDS[select].id,
          state.CHECKED,
          value
        );
      }
      return {
        ...state,
        LIGUE: newValue,
        CHECKED: new Set(checkedSet),
      };
    }
    case actionTypes.SET_STATS: {
      const { value, stat } = action;
      return {
        ...state,
        STATS: value,
        CHECKED: filterTeamsByStats(stat, value),
      };
    }
    case actionTypes.SET_STARS: {
      const { value } = action;
      return {
        ...state,
        STARS: value,
        CHECKED: filterTeamsByStarRatio(value),
      };
    }
    case actionTypes.CHANGE_CHECKED: {
      // setSelect("ALL", !state.CHECKED.size === action.set.size);
      return {
        ...state,
        CHECKED: action.set,
      };
    }
    default:
      return state;
  }
};
