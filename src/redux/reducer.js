import * as actionTypes from "./actionTypes";
import { INITIAL_STATE } from "../index";
import { addTeamsToCheck, filterTeams, generateIds } from "../Utils/Utils";
import { LEAGUES_IDS } from "../api/teams";

export const appState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LIGUE_SELECT: {
      const { select, value } = action;

      const newLeague = Object.assign({}, state.LEAGUE);
      newLeague[select] = value;

      if (select === "ALL") {
        const newLeagueForAllOpt = value
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
            };
        return {
          ...state,
          LEAGUE: newLeagueForAllOpt,
          CHECKED: value
            ? filterTeams(state.STATS, state.STARS, newLeagueForAllOpt)
            : new Set(),
        };
      }

      return {
        ...state,
        LEAGUE: newLeague,
        CHECKED: filterTeams(state.STATS, state.STARS, newLeague),
      };
    }
    case actionTypes.SET_STATS: {
      const { stat, value } = action;

      const newStats = Object.assign({}, state.STATS);
      newStats[stat] = value;

      return {
        ...state,
        STATS: newStats,
        CHECKED: filterTeams(newStats, state.STARS, state.LEAGUE),
      };
    }
    case actionTypes.SET_STARS: {
      const { value } = action;
      return {
        ...state,
        STARS: value,
        CHECKED: filterTeams(state.STATS, value, state.LEAGUE),
      };
    }
    case actionTypes.CHANGE_CHECKED: {
      // setSelect("ALL", !state.CHECKED.size === action.set.size);
      return {
        ...state,
        CHECKED: action.set,
      };
    }
    case actionTypes.SET_FILTER: {
      const { STATS, STARS, LEAGUE } = state;
      console.log(filterTeams(STATS, STARS, LEAGUE, generateIds()));
      return {
        ...state,
        CHECKED: new Set(filterTeams(STATS, STARS, LEAGUE)),
      };
    }
    default:
      return state;
  }
};
