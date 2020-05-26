import React from "react";

function TeamCard({ team }) {
  return (
    <div>
      <p>{team.name}</p>
      <img src={team.photo} />
      <p>{team.stars}</p>
      <p>{team.rating.attack}</p>
      <p>{team.rating.support}</p>
      <p>{team.rating.defence}</p>
      <p>{team.rating.sum}</p>
    </div>
  );
}

export default TeamCard;
