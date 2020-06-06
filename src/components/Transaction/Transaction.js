import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeTransaction } from "../../redux/actions";
import { roundNumberToTwoDecimal } from "../../Utils/Utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: cornflowerblue;
  color: white;
  padding: 25px;
  border-radius: 20px;
  margin-bottom: 25px;
  justify-content: space-between;
  font-size: 24px;
  button {
    padding: 25px;
    color: white;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: 0.2s ease;
    font-size: 24px;
    &:hover {
      transform: scale(0.98);
    }
  }
`;

function Transaction({
  transaction: { name, amount, id },
  euroExchangeRate,
  removeTransaction,
}) {
  return (
    <Wrapper>
      <div>
        <p>{name}</p>
        <p>{roundNumberToTwoDecimal(amount)} EUR</p>
        <p>{roundNumberToTwoDecimal(amount * euroExchangeRate)} PLN</p>
      </div>
      <div>
        <button onClick={() => removeTransaction(id)}>X</button>
      </div>
    </Wrapper>
  );
}

const mapStateToProps = (appState) => ({
  euroExchangeRate: appState.euroExchangeRate,
});

export default connect(mapStateToProps, { removeTransaction })(Transaction);
