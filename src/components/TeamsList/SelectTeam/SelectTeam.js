import React from "react";
import styled from "styled-components";
import { LEAGUES } from "../../../api/teams";
import Rating from "../../Rating/Rating";

const Check = styled.div`
  color: forestgreen;
  font-weight: 700;
  font-size: 18px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  height: 48px;
  background-color: ${({ checked }) =>
    checked ? "rgba(157,248,12,0.38)" : "transparent"};
  .logo {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
  img {
    transition: transform 0.2s ease;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover div:nth-child(2) img {
    transform: scale(0.9);
  }
  & > div {
    &:nth-child(3) {
      width: 200px;
    }
    &:nth-child(4) {
      width: 100px;
      padding: 0 4px;
    }
  }
`;

function SelectTeam({
  team: { id, leagueId, photo, stars, name, checked },
  toggleCheck,
}) {
  return (
    <Team onClick={() => toggleCheck(id)} checked={checked}>
      <div className="logo">
        <img src={LEAGUES[leagueId].photo} alt="logo" />
      </div>
      <div className="logo">
        <img src={photo} alt="logo" />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <Rating rating={stars} />
      <Check>{checked && <span> &#10003; </span>}</Check>
    </Team>
  );
}

export default SelectTeam;
