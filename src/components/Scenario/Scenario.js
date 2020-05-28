import React from "react";
import styled from "styled-components";
import { CHAMPIONS_LEAGUE_EVENTS } from "../../api/events";
import { TEAMS } from "../../api/teams";

const Event = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 50px 0;
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    justify-content: flex-end;
  }
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  color: ${({ winner }) => (winner ? "forestgreen" : "black")};
  font-weight: ${({ winner }) => (winner ? 700 : 400)};
`;

const Result = styled.div`
  font-size: 12px;
  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

const TeamImg = styled.div`
  height: 100%;
  width: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const TeamName = styled.p`
  padding: 0 4px;
`;

function Scenario() {
  return (
    <Wrapper>
      {CHAMPIONS_LEAGUE_EVENTS.map(
        (
          {
            firstId,
            secondId,
            winnerId,
            result,
            season,
            matchClass,
            description,
          },
          index
        ) => (
          <>
            <Event>
              <p>{description}</p>
            </Event>
            <TeamWrapper key={index}>
              <Team winner={winnerId === firstId}>
                <TeamName>{TEAMS[firstId].name}</TeamName>
                <TeamImg>
                  <img src={TEAMS[firstId].photo} />
                </TeamImg>
              </Team>
              <Result>
                <span>{result[0]}</span> VS <span>{result[1]}</span>
              </Result>
              <Team winner={winnerId === secondId}>
                <TeamImg>
                  <img src={TEAMS[secondId].photo} />
                </TeamImg>
                <TeamName>{TEAMS[secondId].name}</TeamName>
              </Team>
            </TeamWrapper>
          </>
        )
      )}
    </Wrapper>
  );
}

export default Scenario;
