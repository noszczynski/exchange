import React from "react";
import styled from "styled-components";
import SelectTeam from "./SelectTeam/SelectTeam";
import { TEAMS } from "../../api/teams";

const StyledTeamsList = styled.div`
  display: flex;
  flex-direction: column;
`;

function TeamsList() {
  return (
    <StyledTeamsList>
      {TEAMS.map((team) => (
        <SelectTeam key={team.name} team={team} />
      ))}
    </StyledTeamsList>
  );
}

export default TeamsList;
