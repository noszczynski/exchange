import * as actionTypes from "./actionTypes";

const addTransaction = (name, amount) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_NEW_TRANSACTION,
    name,
    amount,
  });
};

const removeTransaction = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_TRANSACTION,
    id,
  });
};

export { addTransaction, removeTransaction };
