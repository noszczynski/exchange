import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cornflowerblue;
  color: white;
  padding: 25px;
  border-radius: 20px;
  width: 200px;
  margin-bottom: 25px;
`;

function Transaction({ transaction }) {
  return (
    <Wrapper>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
    </Wrapper>
  );
}

export default Transaction;
