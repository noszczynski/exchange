import React, { useState } from "react";
import styled from "styled-components";
import SelectTeam from "./SelectTeam/SelectTeam";
import { TEAMS } from "../../api/teams";
import Button from "@material-ui/core/Button";

const StyledTeamsList = styled.div`
  display: flex;
  flex-direction: column;
`;

function TeamsList({ statsVisibility }) {
  return (
    <StyledTeamsList>
      {TEAMS.map((team) => (
        <SelectTeam key={team.name} team={team} showStats={statsVisibility} />
      ))}
    </StyledTeamsList>
  );
}

export default TeamsList;
