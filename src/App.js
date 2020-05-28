import React, { useEffect, useState } from "react";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import TeamsList from "./components/TeamsList/TeamsList";
import styled from "styled-components";
import Results from "./components/Results/Results";
import { setFilter } from "./redux/actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Scenario from "./components/Scenario/Scenario";

const Container = styled.div`
  display: grid;
  grid-template-areas: "select filter scenario";
  grid-template-columns: ${({ width }) => (width ? 600 : 450)}px 1fr 450px;
`;

const SelectTeamList = styled.div`
  grid-area: select;
  height: 100vh;
  overflow: hidden auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
    background-color: #2e7d32;
  }
`;

const StyledShowButton = styled.div`
  padding-bottom: 15px;
  button {
    background-color: forestgreen;
    color: #fff;
  }
`;

const Filters = styled.div`
  grid-area: filter;
  padding: 50px 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const ScenarioList = styled.div`
  //
`;

function App({ setFilter }) {
  const [statsVisibility, setStatsVisible] = useState(false);

  useEffect(() => setFilter(), []);

  return (
    <div className="App">
      <Container width={statsVisibility}>
        <SelectTeamList>
          <TeamsList statsVisibility={statsVisibility} />
        </SelectTeamList>
        <Filters>
          <StyledShowButton>
            <Button
              variant="contained"
              onClick={() => setStatsVisible(!statsVisibility)}
            >
              Show stats
            </Button>
          </StyledShowButton>
          <FilterMenu />
          <Results />
        </Filters>
        <ScenarioList>
          <Scenario />
        </ScenarioList>
      </Container>
    </div>
  );
}

export default connect(null, { setFilter })(App);
