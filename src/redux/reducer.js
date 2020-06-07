import * as actionTypes from "./actionTypes";
import { INITIAL_STATE } from "../index";
import { cloneDeep } from "lodash";
import { generateRandomId, roundNumberToTwoDecimal } from "../Utils/Utils";

export const appState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TRANSACTION: {
      const newTransactions = state.transactions;

      newTransactions.push({
        name: action.name,
        amount: roundNumberToTwoDecimal(action.amount),
        id: generateRandomId(),
      });

      const endValue = {
        ...state,
        transactions: [...cloneDeep(newTransactions)],
      };

      localStorage.setItem("state", JSON.stringify(endValue));
      return endValue;
    }

    case actionTypes.REMOVE_TRANSACTION: {
      const newTransactions = state.transactions;

      const index = newTransactions.indexOf(
        newTransactions.find((item) => {
          if (action.id === item.id) {
            return item;
          }
        })
      );

      if (index !== -1) newTransactions.splice(index, 1);

      const endValue = {
        ...state,
        transactions: [...cloneDeep(newTransactions)],
      };

      localStorage.setItem("state", JSON.stringify(endValue));
      return endValue;
    }

    case actionTypes.SET_EXCHANGE: {
      return {
        ...state,
        euroExchangeRate: action.amount,
      };
    }

    default:
      return state;
  }
};
