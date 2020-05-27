import React from "react";
import styled from "styled-components";
import SelectTeam from "./SelectTeam/SelectTeam";

const StyledTeamsList = styled.div`
  display: flex;
  flex-direction: column;
`;

function TeamsList({ list, toggleCheck, handleSetFilters }) {
  return (
    <StyledTeamsList>
      {list.map((team) => (
        <SelectTeam
          key={team.name}
          team={team}
          toggleCheck={toggleCheck}
          handleSetFilters={handleSetFilters}
        />
      ))}
    </StyledTeamsList>
  );
}

export default TeamsList;
