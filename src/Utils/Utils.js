import MERGED_TEAMS from "../api/api";

/*
{
    id: 0,
    leagueId: 0,
    name: "Manchester City",
    shortName: "Man City",
    photo:
      "https://www.fifaindex.com/static/FIFA20/images/crest/10/light/10.webp",
    stars: "5.0",
    rating: {
      attack: "87",
      support: "86",
      defence: "83",
      sum: "85",
    },
  },
*/

export const generateIds = () => {
  const checked = new Set();
  for (let i = 0; i < MERGED_TEAMS.length; i++) checked.add(i);
  return checked;
};

export const addTeamsToCheck = (leagueId, set, willAdd) => {
  MERGED_TEAMS.forEach((team) => {
    if (team.leagueId === leagueId) {
      if (willAdd) set.add(team.id);
      else set.delete(team.id);
    }
  });
  return set;
};

export const filterTeamsByStats = (stat, value) => {
  const set = new Set();

  MERGED_TEAMS.forEach(({ rating, id }) => {
    if (rating[stat] >= value) {
      set.add(id);
    }
  });

  return set;
};

export const filterTeamsByStarRatio = (ratio) => {
  const set = new Set();
  const [min, max] = ratio;

  MERGED_TEAMS.forEach(({ stars, id }) => {
    if (stars >= min && stars <= max) {
      set.add(id);
    }
  });

  return set;
};
