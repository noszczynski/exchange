import * as actionTypes from "./actionTypes";

const setSelect = (select, value) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LIGUE_SELECT,
    select,
    value,
  });
};
const setStats = (stat, value) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_STATS,
    stat,
    value,
  });
};
const setStars = (a, b) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_STARS,
    a,
    b,
  });
};

export { setSelect, setStats, setStars };
