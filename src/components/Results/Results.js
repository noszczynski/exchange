import React, { useState } from "react";
import styled from "styled-components";
import MERGED_TEAMS from "../../api/api";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

function Results({ CHECKED }) {
  const [firstInput, setFirstValue] = useState({ name: "" });
  const [secondInput, setSecondValue] = useState({ name: "" });

  const random = () => {
    if (CHECKED.size >= 2) {
      let firstRand = getRandomTeamNumber();
      while (!CHECKED.has(firstRand)) {
        firstRand = getRandomTeamNumber();
      }
      let secondRand = getRandomTeamNumber();
      while (firstRand === secondRand || !CHECKED.has(secondRand)) {
        secondRand = getRandomTeamNumber();
      }

      setFirstValue(MERGED_TEAMS[firstRand]);
      setSecondValue(MERGED_TEAMS[secondRand]);
    } else alert("Not enough teams selected");
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
Results.propTypes = {
  // TEAMS: PropTypes.arrayOf(PropTypes.object),
  CHECKED: PropTypes.node.isRequired,
};

Results.defaultProps = {
  // TEAMS: [],
};

const mapStateToProps = (appState) => ({
  // TEAMS: appState.TEAMS,
  CHECKED: appState.CHECKED,
});

export default connect(mapStateToProps)(Results);
