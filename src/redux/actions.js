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

const setStars = (newValue) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_STARS,
    value: newValue,
  });
};

const changeChecked = (set) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_CHECKED,
    set,
  });
};

const setFilter = () => (dispatch) => {
  console.log(`filter`);
  dispatch({
    type: actionTypes.SET_FILTER,
  });
};

export { setSelect, setStats, setStars, changeChecked, setFilter };
