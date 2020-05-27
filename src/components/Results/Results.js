import React, { useState } from "react";
import styled from "styled-components";
import MERGED_TEAMS from "../../api/api";

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
  Math.floor(Math.random() * MERGED_TEAMS.length);

function Results() {
  const [firstInput, setFirstValue] = useState({ name: "" });
  const [secondInput, setSecondValue] = useState({ name: "" });

  const random = () => {
    let firstRand = getRandomTeamNumber();
    while (!MERGED_TEAMS[firstRand].checked) {
      firstRand = getRandomTeamNumber();
    }
    let secondRand = getRandomTeamNumber();
    while (firstRand === secondRand || !MERGED_TEAMS[secondRand].checked) {
      secondRand = getRandomTeamNumber();
    }

    setFirstValue(MERGED_TEAMS[firstRand]);
    setSecondValue(MERGED_TEAMS[secondRand]);
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
