import * as actionTypes from "./actionTypes";

const addTransaction = (name = "Blank transaction", amount = 0) => (
  dispatch
) => {
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

const setExchange = (amount) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_EXCHANGE,
    amount,
  });
};

export { addTransaction, removeTransaction, setExchange };
