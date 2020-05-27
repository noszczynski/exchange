import React, { useEffect } from "react";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import TeamsList from "./components/TeamsList/TeamsList";
import styled from "styled-components";
import Results from "./components/Results/Results";
import { setFilter } from "./redux/actions";
import { connect } from "react-redux";

const Container = styled.div`
  display: grid;
  grid-template-areas: "select filter";
  grid-template-columns: 440px 1fr;
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

const Others = styled.div`
  grid-area: filter;
  padding: 50px 15px;
  max-width: 600px;
  margin: 0 auto;
`;

function App({ setFilter }) {
  useEffect(() => setFilter(), []);
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

export default connect(null, { setFilter })(App);
