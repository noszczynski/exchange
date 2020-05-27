import React, { useEffect, useState } from "react";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import SelectArea from "./components/SelectArea/SelectArea";
import TeamsList from "./components/TeamsList/TeamsList";
import styled from "styled-components";
import Results from "./components/Results/Results";
import MERGED_TEAMS from "./api/api";

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

export const LengthOfChecked = (arr) => {
  let length = 0;
  arr.forEach((item) => {
    if (item.checked) length++;
  });
  return length;
};

function App() {
  const [checkList, setCheckList] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [filters, setFilters] = useState({
    LIGUE: {
      ENGLAND: false,
      SPAIN: false,
      DEUTCHLAND: false,
      FRANCE: false,
      ITALY: false,
      NEDERLANDS: false,
    },
    ATK: 80,
    SUP: 80,
    DEF: 80,
    SUM: 80,
    STARS: [4.5, 5],
  });

  const handleSetFilters = (action, value) => {
    console.log(action);
    console.log(value);
  };

  const toggleCheck = (id) => {
    if (checkList[id].checked) {
      if (LengthOfChecked(checkList) > 2) {
        checkList[id].checked = false;
      }
    } else {
      checkList[id].checked = true;
    }
    setCheckList([...checkList]);
  };

  const setCheckedPropertiesToArr = (arr) => {
    arr.forEach((item) => {
      item.checked = true;
    });
    return arr;
  };

  useEffect(() => {
    setCheckList(setCheckedPropertiesToArr(MERGED_TEAMS));
  }, []);

  return (
    <div className="App">
      <Container>
        <SelectTeamList>
          <TeamsList
            list={checkList}
            toggleCheck={toggleCheck}
            handleSetFilters={handleSetFilters}
          />
        </SelectTeamList>
        <Others>
          <FilterMenu handleSetFilters={handleSetFilters} />
          <Results disbleButton={disableButton} />
        </Others>
      </Container>
    </div>
  );
}

export default App;
