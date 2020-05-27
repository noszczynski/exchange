import MERGED_TEAMS from "../api/api";
import { LEAGUES } from "../api/teams";

export const generateIds = () => {
  const checked = new Set();
  for (let i = 0; i < MERGED_TEAMS.length; i++) checked.add(i);
  return checked;
};

export const filterTeams = (newStats, ratio, league, set = new Set()) => {
  const [min, max] = ratio;
  console.log(league);

  MERGED_TEAMS.forEach(({ name, stars, rating, id, leagueId }) => {
    if (
      Number(rating.ATK) >= newStats.ATK &&
      Number(rating.SUP) >= newStats.SUP &&
      Number(rating.DEF) >= newStats.DEF &&
      Number(rating.SUM) >= newStats.SUM &&
      stars >= min &&
      stars <= max &&
      league[LEAGUES[leagueId].title]
    ) {
      set.add(id);
    }
  });

  return set;
};
