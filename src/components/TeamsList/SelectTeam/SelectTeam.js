import React from "react";
import styled from "styled-components";
import { LEAGUES } from "../../../api/teams";
import Rating from "../../Rating/Rating";
import { changeChecked } from "../../../redux/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Check = styled.div`
  color: forestgreen;
  font-weight: 700;
  font-size: 18px;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 10px;

  img {
    transition: transform 0.2s ease;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NameWrapper = styled.div`
  width: 200px;
`;

const RatingWrapper = styled.div`
  width: 100px;
  padding: 0 4px;
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

  &:hover div:nth-child(2) img {
    transform: scale(0.9);
  }
`;

function SelectTeam({
  team: { id, leagueId, photo, stars, name },
  changeChecked,
  CHECKED,
}) {
  const handleToggleCheck = () => {
    if (CHECKED.has(id)) {
      CHECKED.delete(id);
    } else {
      CHECKED.add(id);
    }
    changeChecked(new Set(CHECKED));
  };

  return (
    <Team onClick={handleToggleCheck} checked={CHECKED.has(id)}>
      <Logo>
        <img src={LEAGUES[leagueId].photo} alt="logo" />
      </Logo>
      <Logo>
        <img src={photo} alt="logo" />
      </Logo>
      <NameWrapper>
        <p>{name}</p>
      </NameWrapper>
      <RatingWrapper>
        <Rating rating={stars} />
      </RatingWrapper>
      <Check>{CHECKED.has(id) && <span> &#10003; </span>}</Check>
    </Team>
  );
}

SelectTeam.propTypes = {
  CHECKED: PropTypes.node.isRequired,
};

const mapStateToProps = (appState) => ({
  CHECKED: appState.CHECKED,
});

export default connect(mapStateToProps, { changeChecked })(SelectTeam);
