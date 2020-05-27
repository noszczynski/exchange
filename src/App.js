import React from "react";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import TeamsList from "./components/TeamsList/TeamsList";
import styled from "styled-components";
import Results from "./components/Results/Results";

const Container = styled.div`
  display: grid;
  grid-template-areas: "select filter";
  grid-template-columns: 440px 1fr;
`;

const SelectTeamList = styled.div`
  grid-area: select;
`;

const Others = styled.div`
  grid-area: filter;
  padding: 50px 0;
  width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <SelectTeamList>
          <TeamsList />
        </SelectTeamList>
        <Others>
          <FilterMenu />
          <Results />
        </Others>
      </Container>
    </div>
  );
}

export default App;
