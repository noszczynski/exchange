import React, { useState } from "react";
import styled from "styled-components";
import mergedTeams from "../../api/api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  button {
    padding: 5px 10px;
    font-size: 18px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: 18px;
`;

export const getRandomTeamNumber = () =>
  Math.floor(Math.random() * mergedTeams.length);

function Results() {
  const [firstInput, setFirstValue] = useState({ name: "" });
  const [secondInput, setSecondValue] = useState({ name: "" });

  const random = () => {
    let firstRand = getRandomTeamNumber();
    while (!mergedTeams[firstRand].checked) {
      firstRand = getRandomTeamNumber();
    }
    let secondRand = getRandomTeamNumber();
    while (firstRand === secondRand || !mergedTeams[secondRand].checked) {
      secondRand = getRandomTeamNumber();
    }

    setFirstValue(mergedTeams[firstRand]);
    setSecondValue(mergedTeams[secondRand]);
  };

  return (
    <Wrapper>
      <button onClick={random}>Random</button>
      <InputWrapper>
        <StyledInput value={firstInput.name} disabled />
        VS
        <StyledInput value={secondInput.name} disabled />
      </InputWrapper>
    </Wrapper>
  );
}

export default Results;
