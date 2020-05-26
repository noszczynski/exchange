const LEAGUES_IDS = {
  ENGLAND: {
    id: "0",
    name: "Premier League",
    photo:
      "https://www.transfermarkt.pl/images/logo/originals/gb1.png?lm=1521104656",
  },
  SPAIN: {
    id: "1",
    name: "LaLiga Santander",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/LaLiga_Santander.svg",
  },
  DEUTSCHLAND: {
    id: "2",
    name: "Bundesliga",
    photo:
      "https://cdn.freebiesupply.com/logos/large/2x/bundesliga-2-logo-png-transparent.png",
  },
  FRANCE: {
    id: "3",
    name: "Ligue 1 Conforama",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ligue1.svg/1200px-Ligue1.svg.png",
  },
  ITALY: {
    id: "4",
    name: "Serie A TIM",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Serie_A_Logo_%28ab_2019%29.png",
  },
  NEDERLANDS: {
    id: "5",
    name: "Eredivisie",
    photo:
      "https://europeanleagues.com/wp-content/uploads/EREDIVISIE_LOGO_560x560.png",
  },
};

const TEAMS = [
  {
    id: "0",
    leagueId: "0",
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
  {
    id: "1",
    leagueId: "0",
    name: "Liverpool",
    shortName: "Liv",
    photo:
      "https://www.fifaindex.com/static/FIFA20/images/crest/10/light/9.webp",
    stars: "5.0",
    rating: {
      attack: "87",
      support: "83",
      defence: "85",
      sum: "86",
    },
  },
  {
    id: "2",
    leagueId: "1",
    name: "FC Barcelona",
    shortName: "Barca",
    photo:
      "https://www.fifaindex.com/static/FIFA20/images/crest/10/light/241.webp",
    stars: "5.0",
    rating: {
      attack: "88",
      support: "85",
      defence: "85",
      sum: "86",
    },
  },
  {
    id: "3",
    leagueId: "1",
    name: "Real Madryt CF",
    shortName: "Real M",
    photo:
      "https://www.fifaindex.com/static/FIFA20/images/crest/10/light/243.webp",
    stars: "5.0",
    rating: {
      attack: "85",
      support: "87",
      defence: "85",
      sum: "86",
    },
  },
  {
    id: "4",
    leagueId: "4",
    name: "Juventus Turyn",
    shortName: "Juve",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/45.webp",
    stars: "5.0",
    rating: {
      attack: "89",
      support: "84",
      defence: "85",
      sum: "85",
    },
  },
  {
    id: "5",
    leagueId: "3",
    name: "Paris Saint-Germain",
    shortName: "PSG",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/73.webp",
    stars: "5.0",
    rating: {
      attack: "88",
      support: "84",
      defence: "83",
      sum: "85",
    },
  },
  {
    id: "6",
    leagueId: "2",
    name: "FC Bayern Monachium",
    shortName: "Bayern",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/21.webp",
    stars: "5.0",
    rating: {
      attack: "87",
      support: "85",
      defence: "81",
      sum: "84",
    },
  },
  {
    id: "7",
    leagueId: "1",
    name: "Atlético Madryt",
    shortName: "Atlético",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/240.webp",
    stars: "5.0",
    rating: {
      attack: "81",
      support: "83",
      defence: "82",
      sum: "83",
    },
  },
  {
    id: "8",
    leagueId: "0",
    name: "Tottenham Hotspur",
    shortName: "Spurs",
    photo:
      "https://www.fifaindex.com/static/FIFA20/images/crest/10/light/18.webp",
    stars: "4.5",
    rating: {
      attack: "85",
      support: "82",
      defence: "82",
      sum: "82",
    },
  },
  {
    id: "9",
    leagueId: "4",
    name: "Napoli",
    shortName: "Napoli",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/48.webp",
    stars: "4.5",
    rating: {
      attack: "84",
      support: "81",
      defence: "81",
      sum: "82",
    },
  },
  {
    id: "10",
    leagueId: "2",
    name: "Borussia Dortmund",
    shortName: "BVB",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/22.webp",
    stars: "4.5",
    rating: {
      attack: "83",
      support: "83",
      defence: "82",
      sum: "82",
    },
  },
  {
    id: "11",
    leagueId: "4",
    name: "Inter Mediolan",
    shortName: "Inter",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/44.webp",
    stars: "4.5",
    rating: {
      attack: "83",
      support: "80",
      defence: "86",
      sum: "82",
    },
  },
  {
    id: "12",
    leagueId: "0",
    name: "Manchester United",
    shortName: "Man Und",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/11.webp",
    stars: "4.5",
    rating: {
      attack: "83",
      support: "81",
      defence: "81",
      sum: "81",
    },
  },
  {
    id: "13",
    leagueId: "4",
    name: "Lazio Rzym",
    shortName: "Lazio",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/46.webp",
    stars: "4.5",
    rating: {
      attack: "82",
      support: "81",
      defence: "80",
      sum: "81",
    },
  },
  {
    id: "14",
    leagueId: "1",
    name: "Valencia CF",
    shortName: "Valencia",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/461.webp",
    stars: "4.5",
    rating: {
      attack: "81",
      support: "81",
      defence: "81",
      sum: "81",
    },
  },
  {
    id: "15",
    leagueId: "0",
    name: "Chelsea",
    shortName: "Chelsea",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/5.webp",
    stars: "4.5",
    rating: {
      attack: "80",
      support: "84",
      defence: "81",
      sum: "81",
    },
  },
  {
    id: "16",
    leagueId: "0",
    name: "Arsenal",
    shortName: "Arsenal",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/1.webp",
    stars: "4.5",
    rating: {
      attack: "84",
      support: "82",
      defence: "78",
      sum: "80",
    },
  },
  {
    id: "17",
    leagueId: "2",
    name: "RB Lipsk",
    shortName: "RB Lipsk",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/112172.webp",
    stars: "4.5",
    rating: {
      attack: "81",
      support: "81",
      defence: "79",
      sum: "80",
    },
  },
  {
    id: "18",
    leagueId: "1",
    name: "Real Betis Balompié",
    shortName: "Betis",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/449.webp",
    stars: "4.5",
    rating: {
      attack: "81",
      support: "81",
      defence: "78",
      sum: "80",
    },
  },
  {
    id: "19",
    leagueId: "2",
    name: "Bayer 04 Leverkusen",
    shortName: "Bayer 04",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/32.webp",
    stars: "4.5",
    rating: {
      attack: "80",
      support: "80",
      defence: "79",
      sum: "80",
    },
  },
  {
    id: "20",
    leagueId: "1",
    name: "Sevilla FC",
    shortName: "Sevilla",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/481.webp",
    stars: "4.5",
    rating: {
      attack: "79",
      support: "81",
      defence: "80",
      sum: "80",
    },
  },
  {
    id: "21",
    leagueId: "5",
    name: "Ajax Amsterdam",
    shortName: "Ajax",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/245.webp",
    stars: "4.5",
    rating: {
      attack: "79",
      support: "81",
      defence: "80",
      sum: "80",
    },
  },
  {
    id: "22",
    leagueId: "4",
    name: "AC Milan",
    shortName: "Milan",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/47.webp",
    stars: "4.5",
    rating: {
      attack: "85",
      support: "78",
      defence: "79",
      sum: "79",
    },
  },
  {
    id: "23",
    leagueId: "4",
    name: "AS Roma",
    shortName: "Roma",
    photo:
      "https://www.fifaindex.com/static/FIFA19/images/crest/10/light/52.webp",
    stars: "4.5",
    rating: {
      attack: "85",
      support: "78",
      defence: "79",
      sum: "79",
    },
  },
];

const LEAGUES = [
  LEAGUES_IDS.ENGLAND, // 0
  LEAGUES_IDS.SPAIN, // 1
  LEAGUES_IDS.DEUTSCHLAND, // 2
  LEAGUES_IDS.FRANCE, // 3
  LEAGUES_IDS.ITALY, // 4
  LEAGUES_IDS.NEDERLANDS, // 5
];

export { TEAMS, LEAGUES };
