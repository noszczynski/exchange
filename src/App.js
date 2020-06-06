import React, { useEffect, useState } from "react";
import { getLatestExchange } from "./api/api";
import { getSumOfAmounts, roundNumberToTwoDecimal } from "./Utils/Utils";
import { connect } from "react-redux";
import { addTransaction, setExchange } from "./redux/actions";
import Transaction from "./components/Transaction/Transaction";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 25px;
  max-width: 600px;
  margin: 0 auto;
`;

const TransactionsWrapper = styled.div`
  padding: 25px 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    width: 45%;
  }
`;

const NewTransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cornflowerblue;
  color: white;
  padding: 25px;
  font-size: 24px;
  border-radius: 20px;
  margin-bottom: 25px;
  justify-content: space-between;
  input,
  button {
    margin-top: 25px;
    padding: 10px;
    background-color: white;
    color: #333;
    border-radius: 20px;
    border: 0;
  }
  button {
    cursor: pointer;
  }
  p,
  h4 {
    line-height: 200%;
    span {
      background-color: #fff;
      color: cornflowerblue;
      border-radius: 20px;
      padding: 0 10px;
    }
  }
`;

function App({ transactions, addTransaction, euroExchangeRate, setExchange }) {
  const [newTransactionName, setTransactionName] = useState("");
  const [newTransactionAmount, setTransactionAmount] = useState("");
  const [transactionList, setTransactionList] = useState([]);
  const [sum, setSum] = useState(0);
  const [maxTransaction, setMaxTransaction] = useState({
    name: "",
    amount: 0,
    id: 0,
  });

  const clear = () => {
    setTransactionName("");
    setTransactionAmount("");
  };

  const setMax = (arr = []) => {
    let max = 0;
    let index = -1;

    arr.forEach((transaction, i) => {
      if (transaction.amount > max) {
        max = transaction.amount;
        index = i;
      }
    });

    if (index) setMaxTransaction(transactions[index]);
  };

  const handleSetSum = () => {
    setSum(
      roundNumberToTwoDecimal(getSumOfAmounts(transactions) * euroExchangeRate)
    );
  };

  useEffect(() => {
    getLatestExchange().then(({ conversion_rates: { PLN } }) => {
      setExchange(roundNumberToTwoDecimal(PLN));
    });
  }, []);

  useEffect(() => {
    setTransactionList(transactions);
    handleSetSum();
    setMax(transactions);
  }, [transactions, euroExchangeRate]);

  return (
    <AppWrapper>
      <div>
        <p>Exchange EUR to PLN</p>
        <p>1 EURO = {euroExchangeRate} PLN</p>
      </div>
      <NewTransactionWrapper>
        <h4>
          Sum of all transactions: <span>{sum} PLN</span>
        </h4>
        <h4>Max transaction: </h4>
        <p>
          name: <span>{maxTransaction && maxTransaction.name}</span>
        </p>
        <p>
          amount:&nbsp;
          <span>{maxTransaction && maxTransaction.amount} PLN</span>
        </p>
      </NewTransactionWrapper>
      <NewTransactionWrapper>
        <p>New Transaction</p>
        <input
          name="name"
          value={newTransactionName}
          onChange={(e) => setTransactionName(e.target.value)}
          placeholder="Transaction name"
        />
        <input
          type="number"
          name="amount"
          value={newTransactionAmount}
          onChange={(e) => setTransactionAmount(Number(e.target.value))}
          placeholder="EUR"
        />
        <ButtonsWrapper>
          <button
            onClick={() =>
              addTransaction(newTransactionName, newTransactionAmount)
            }
          >
            ADD
          </button>
          <button onClick={clear}>CLEAR</button>
        </ButtonsWrapper>
      </NewTransactionWrapper>
      <TransactionsWrapper>
        {transactionList.map((t, index) => (
          <Transaction key={index} transaction={t} />
        ))}
      </TransactionsWrapper>
    </AppWrapper>
  );
}

const mapStateToProps = (appState) => ({
  transactions: appState.transactions,
  euroExchangeRate: appState.euroExchangeRate,
});

export default connect(mapStateToProps, { addTransaction, setExchange })(App);
