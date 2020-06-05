import React, { useEffect, useState } from "react";
import { getLatestExchange } from "./api/api";
import { roundNumberToTwoDecimal } from "./Utils/Utils";
import { connect } from "react-redux";
import { addTransaction } from "./redux/actions";
import Transaction from "./components/Transaction/Transaction";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 25px;
`;

const TransactionsWrapper = styled.div`
  padding: 25px 0;
`;

function App({ transactions, addTransaction }) {
  const [EURToPLN, setEURtoPLNRate] = useState(0);
  const [PLNtoEUR, setPLNtoEURRate] = useState(0);
  const [newTransactionName, setTransactionName] = useState("");
  const [newTransactionAmount, setTransactionAmount] = useState(0);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    getLatestExchange().then(({ conversion_rates: { PLN } }) => {
      setEURtoPLNRate(roundNumberToTwoDecimal(PLN));
      setPLNtoEURRate(roundNumberToTwoDecimal(1 / PLN));
    });
  }, []);

  useEffect(() => {
    setTransactionList(transactions);
  }, [transactions]);

  return (
    <AppWrapper>
      <h2>Exchange EUR to PLN</h2>
      <h3>1 EURO = {EURToPLN} PLN</h3>
      <h3>1 PLN = {PLNtoEUR} EURO</h3>

      <div>
        <h2>New Transaction</h2>
        <input
          name="name"
          value={newTransactionName}
          onChange={(e) => setTransactionName(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          value={newTransactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
        <button
          onClick={() =>
            addTransaction(newTransactionName, newTransactionAmount)
          }
        >
          add transaction
        </button>
        <TransactionsWrapper>
          {transactionList.map((t, index) => (
            <Transaction key={index} transaction={t} />
          ))}
        </TransactionsWrapper>
      </div>
    </AppWrapper>
  );
}

const mapStateToProps = (appState) => ({
  transactions: appState.transactions,
});

export default connect(mapStateToProps, { addTransaction })(App);
