import * as actionTypes from "./actionTypes";
import { INITIAL_STATE } from "../index";
import { cloneDeep } from "lodash";
import { generateRandomId } from "../Utils/Utils";

export const appState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TRANSACTION: {
      const newTransactions = state.transactions;

      newTransactions.push({
        name: action.name,
        amount: action.amount,
        id: generateRandomId(),
      });

      return {
        ...state,
        transactions: [...cloneDeep(newTransactions)],
      };
    }

    default:
      return state;
  }
};
