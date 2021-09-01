const { Batters } = require('../models');
//all batters

const batterSeed = [
  {
    "name": "Shohei Ohtani",
    "team": "LAA",
    "games_played": 121,
    "hits": 115,
    "average": 270,
    "home_runs": 40,
    "rbi": 88
  },
  {
    "name": "Vladimir Guerrero Jr.",
    "team": "TOR",
    "games_played": 123,
    "hits": 140,
    "average": 308,
    "home_runs": 36,
    "rbi": 90
  },
  {
    "name": "Fernando Tatis Jr.",
    "team": "SD",
    "games_played": 95,
    "hits": 99,
    "average": 287,
    "home_runs": 34,
    "rbi": 76
  },
  {
    "name": "Salvador Perez",
    "team": "KC",
    "games_played": 124,
    "hits": 130,
    "average": 273,
    "home_runs": 33,
    "rbi": 81
  },
  {
    "name": "Matt Olson",
    "team": "OAK",
    "games_played": 121,
    "hits": 122,
    "average": 278,
    "home_runs": 32,
    "rbi": 82
  },
  {
    "name": "Marcus Semien",
    "team": "TOR",
    "games_played": 124,
    "hits": 133,
    "average": 268,
    "home_runs": 30,
    "rbi": 73
  },
  {
    "name": "Kyle Seager",
    "team": "SEA",
    "games_played": 125,
    "hits": 102,
    "average": 217,
    "home_runs": 29,
    "rbi": 82
  },
  {
    "name": "Mitch Haniger",
    "team": "SEA",
    "games_played": 122,
    "hits": 121,
    "average": 253,
    "home_runs": 29,
    "rbi": 73
  },
  {
    "name": "Jose Ramirez",
    "team": "CLE",
    "games_played": 114,
    "hits": 108,
    "average": 257,
    "home_runs": 29,
    "rbi": 79
  },
  {
    "name": "Joey Gallo",
    "team": "TEX",
    "games_played": 119,
    "hits": 81,
    "average": 206,
    "home_runs": 29,
    "rbi": 63
  },
  {
    "name": "Rafael Devers",
    "team": "BOS",
    "games_played": 121,
    "hits": 125,
    "average": 277,
    "home_runs": 29,
    "rbi": 91
  },
  {
    "name": "Brandon Lowe",
    "team": "TB",
    "games_played": 118,
    "hits": 98,
    "average": 235,
    "home_runs": 29,
    "rbi": 75
  },
  {
    "name": "Joey Votto",
    "team": "CIN",
    "games_played": 97,
    "hits": 98,
    "average": 281,
    "home_runs": 28,
    "rbi": 81
  },
  {
    "name": "Max Muncy",
    "team": "LAD",
    "games_played": 109,
    "hits": 99,
    "average": 265,
    "home_runs": 28,
    "rbi": 76
  },
  {
    "name": "Pete Alonso",
    "team": "NYM",
    "games_played": 115,
    "hits": 109,
    "average": 260,
    "home_runs": 28,
    "rbi": 73
  },
  {
    "name": "Freddie Freeman",
    "team": "ATL",
    "games_played": 125,
    "hits": 139,
    "average": 296,
    "home_runs": 27,
    "rbi": 70
  },
  {
    "name": "Adam Duvall",
    "team": "MIA",
    "games_played": 113,
    "hits": 89,
    "average": 224,
    "home_runs": 27,
    "rbi": 86
  },
  {
    "name": "Aaron Judge",
    "team": "NYY",
    "games_played": 112,
    "hits": 118,
    "average": 285,
    "home_runs": 27,
    "rbi": 65
  },
  {
    "name": "Austin Riley",
    "team": "ATL",
    "games_played": 125,
    "hits": 136,
    "average": 301,
    "home_runs": 27,
    "rbi": 77
  },
  {
    "name": "Adolis Garcia",
    "team": "TEX",
    "games_played": 114,
    "hits": 109,
    "average": 247,
    "home_runs": 27,
    "rbi": 71
  },
  {
    "name": "Nelson Cruz",
    "team": "MIN/TB",
    "games_played": 110,
    "hits": 109,
    "average": 275,
    "home_runs": 26,
    "rbi": 70
  },
  {
    "name": "Mike Zunino",
    "team": "TB",
    "games_played": 85,
    "hits": 54,
    "average": 209,
    "home_runs": 26,
    "rbi": 48
  },
  {
    "name": "Jose Abreu",
    "team": "CHW",
    "games_played": 120,
    "hits": 115,
    "average": 257,
    "home_runs": 26,
    "rbi": 96
  },
  {
    "name": "Rhys Hoskins",
    "team": "PHI",
    "games_played": 106,
    "hits": 95,
    "average": 247,
    "home_runs": 26,
    "rbi": 70
  },
  {
    "name": "Nolan Arenado",
    "team": "STL",
    "games_played": 121,
    "hits": 120,
    "average": 257,
    "home_runs": 25,
    "rbi": 82
  },
  {
    "name": "Jose Altuve",
    "team": "HOU",
    "games_played": 113,
    "hits": 130,
    "average": 277,
    "home_runs": 25,
    "rbi": 67
  },
  {
    "name": "Hunter Renfroe",
    "team": "BOS",
    "games_played": 115,
    "hits": 103,
    "average": 256,
    "home_runs": 25,
    "rbi": 77
  },
  {
    "name": "Kyle Schwarber",
    "team": "WSH",
    "games_played": 80,
    "hits": 75,
    "average": 260,
    "home_runs": 25,
    "rbi": 53
  },
  {
    "name": "Dansby Swanson",
    "team": "ATL",
    "games_played": 126,
    "hits": 127,
    "average": 267,
    "home_runs": 25,
    "rbi": 77
  },
  {
    "name": "Yordan Alvarez",
    "team": "HOU",
    "games_played": 110,
    "hits": 116,
    "average": 282,
    "home_runs": 25,
    "rbi": 85
  },
  {
    "name": "Eduardo Escobar",
    "team": "ARI",
    "games_played": 119,
    "hits": 114,
    "average": 252,
    "home_runs": 24,
    "rbi": 73
  },
  {
    "name": "Avisail Garcia",
    "team": "MIL",
    "games_played": 111,
    "hits": 105,
    "average": 274,
    "home_runs": 24,
    "rbi": 75
  },
  {
    "name": "Javier Baez",
    "team": "CHC",
    "games_played": 107,
    "hits": 91,
    "average": 241,
    "home_runs": 24,
    "rbi": 69
  },
  {
    "name": "Jesse Winker",
    "team": "CIN",
    "games_played": 109,
    "hits": 129,
    "average": 307,
    "home_runs": 24,
    "rbi": 71
  },
  {
    "name": "Ronald Acuna Jr.",
    "team": "ATL",
    "games_played": 82,
    "hits": 84,
    "average": 283,
    "home_runs": 24,
    "rbi": 52
  },
  {
    "name": "Bryce Harper",
    "team": "PHI",
    "games_played": 104,
    "hits": 105,
    "average": 290,
    "home_runs": 23,
    "rbi": 52
  },
  {
    "name": "J.D. Martinez",
    "team": "BOS",
    "games_played": 118,
    "hits": 129,
    "average": 286,
    "home_runs": 23,
    "rbi": 79
  },
  {
    "name": "Eugenio Suarez",
    "team": "CIN",
    "games_played": 116,
    "hits": 72,
    "average": 171,
    "home_runs": 23,
    "rbi": 66
  },
  {
    "name": "Jorge Polanco",
    "team": "MIN",
    "games_played": 117,
    "hits": 124,
    "average": 274,
    "home_runs": 23,
    "rbi": 74
  },
  {
    "name": "Ryan Mountcastle",
    "team": "BAL",
    "games_played": 108,
    "hits": 104,
    "average": 264,
    "home_runs": 23,
    "rbi": 67
  },
  {
    "name": "Giancarlo Stanton",
    "team": "NYY",
    "games_played": 105,
    "hits": 101,
    "average": 267,
    "home_runs": 22,
    "rbi": 65
  },
  {
    "name": "Manny Machado",
    "team": "SD",
    "games_played": 119,
    "hits": 119,
    "average": 273,
    "home_runs": 22,
    "rbi": 84
  },
  {
    "name": "Nick Castellanos",
    "team": "CIN",
    "games_played": 105,
    "hits": 128,
    "average": 318,
    "home_runs": 22,
    "rbi": 70
  },
  {
    "name": "Jesus Aguilar",
    "team": "MIA",
    "games_played": 120,
    "hits": 109,
    "average": 264,
    "home_runs": 22,
    "rbi": 88
  },
  {
    "name": "Kris Bryant",
    "team": "CHC",
    "games_played": 112,
    "hits": 107,
    "average": 268,
    "home_runs": 22,
    "rbi": 61
  },
  {
    "name": "Franmil Reyes",
    "team": "CLE",
    "games_played": 80,
    "hits": 74,
    "average": 248,
    "home_runs": 22,
    "rbi": 61
  },
  {
    "name": "Teoscar Hernandez",
    "team": "TOR",
    "games_played": 105,
    "hits": 124,
    "average": 305,
    "home_runs": 22,
    "rbi": 84
  },
  {
    "name": "Willy Adames",
    "team": "TB/MIL",
    "games_played": 122,
    "hits": 114,
    "average": 265,
    "home_runs": 22,
    "rbi": 65
  },
  {
    "name": "Ozzie Albies",
    "team": "ATL",
    "games_played": 124,
    "hits": 127,
    "average": 257,
    "home_runs": 22,
    "rbi": 84
  },
  {
    "name": "Kyle Tucker",
    "team": "HOU",
    "games_played": 105,
    "hits": 103,
    "average": 272,
    "home_runs": 22,
    "rbi": 71
  },
  {
    "name": "Jared Walsh",
    "team": "LAA",
    "games_played": 110,
    "hits": 108,
    "average": 264,
    "home_runs": 22,
    "rbi": 72
  },
  {
    "name": "Andrew McCutchen",
    "team": "PHI",
    "games_played": 109,
    "hits": 81,
    "average": 220,
    "home_runs": 21,
    "rbi": 60
  },
  {
    "name": "Justin Turner",
    "team": "LAD",
    "games_played": 115,
    "hits": 116,
    "average": 286,
    "home_runs": 21,
    "rbi": 70
  },
  {
    "name": "Miguel Sano",
    "team": "MIN",
    "games_played": 99,
    "hits": 74,
    "average": 217,
    "home_runs": 21,
    "rbi": 56
  },
  {
    "name": "Randal Grichuk",
    "team": "TOR",
    "games_played": 120,
    "hits": 106,
    "average": 247,
    "home_runs": 21,
    "rbi": 74
  },
  {
    "name": "C.J. Cron",
    "team": "COL",
    "games_played": 106,
    "hits": 94,
    "average": 276,
    "home_runs": 21,
    "rbi": 71
  },
  {
    "name": "Austin Meadows",
    "team": "TB",
    "games_played": 115,
    "hits": 101,
    "average": 236,
    "home_runs": 21,
    "rbi": 88
  },
  {
    "name": "Tyler O'Neill",
    "team": "STL",
    "games_played": 100,
    "hits": 95,
    "average": 275,
    "home_runs": 21,
    "rbi": 48
  },
  {
    "name": "Cedric Mullins",
    "team": "BAL",
    "games_played": 121,
    "hits": 143,
    "average": 306,
    "home_runs": 21,
    "rbi": 42
  },
  {
    "name": "Bryan Reynolds",
    "team": "PIT",
    "games_played": 123,
    "hits": 135,
    "average": 303,
    "home_runs": 21,
    "rbi": 75
  },
  {
    "name": "Cesar Hernandez",
    "team": "CLE/CHW",
    "games_played": 119,
    "hits": 105,
    "average": 227,
    "home_runs": 20,
    "rbi": 51
  },
  {
    "name": "Xander Bogaerts",
    "team": "BOS",
    "games_played": 119,
    "hits": 132,
    "average": 302,
    "home_runs": 20,
    "rbi": 69
  },
  {
    "name": "Josh Bell",
    "team": "WSH",
    "games_played": 107,
    "hits": 88,
    "average": 242,
    "home_runs": 20,
    "rbi": 66
  },
  {
    "name": "Patrick Wisdom",
    "team": "CHC",
    "games_played": 78,
    "hits": 60,
    "average": 254,
    "home_runs": 20,
    "rbi": 41
  },
  {
    "name": "Mike Yastrzemski",
    "team": "SF",
    "games_played": 107,
    "hits": 82,
    "average": 220,
    "home_runs": 20,
    "rbi": 50
  },
  {
    "name": "Trey Mancini",
    "team": "BAL",
    "games_played": 118,
    "hits": 116,
    "average": 256,
    "home_runs": 20,
    "rbi": 62
  },
  {
    "name": "Juan Soto",
    "team": "WSH",
    "games_played": 114,
    "hits": 114,
    "average": 303,
    "home_runs": 20,
    "rbi": 67
  },
  {
    "name": "Bo Bichette",
    "team": "TOR",
    "games_played": 121,
    "hits": 139,
    "average": 285,
    "home_runs": 20,
    "rbi": 77
  },
  {
    "name": "Brandon Crawford",
    "team": "SF",
    "games_played": 105,
    "hits": 108,
    "average": 300,
    "home_runs": 19,
    "rbi": 71
  },
  {
    "name": "Brandon Belt",
    "team": "SF",
    "games_played": 73,
    "hits": 55,
    "average": 247,
    "home_runs": 19,
    "rbi": 40
  },
  {
    "name": "Paul Goldschmidt",
    "team": "STL",
    "games_played": 122,
    "hits": 133,
    "average": 281,
    "home_runs": 19,
    "rbi": 71
  },
  {
    "name": "Robbie Grossman",
    "team": "DET",
    "games_played": 122,
    "hits": 103,
    "average": 238,
    "home_runs": 19,
    "rbi": 57
  },
  {
    "name": "Carlos Correa",
    "team": "HOU",
    "games_played": 116,
    "hits": 120,
    "average": 278,
    "home_runs": 19,
    "rbi": 68
  },
  {
    "name": "Eric Haase",
    "team": "DET",
    "games_played": 70,
    "hits": 60,
    "average": 238,
    "home_runs": 19,
    "rbi": 49
  },
  {
    "name": "Trea Turner",
    "team": "WSH",
    "games_played": 112,
    "hits": 145,
    "average": 322,
    "home_runs": 19,
    "rbi": 54
  },
  {
    "name": "Matt Chapman",
    "team": "OAK",
    "games_played": 122,
    "hits": 95,
    "average": 221,
    "home_runs": 19,
    "rbi": 57
  },
  {
    "name": "Jake Cronenworth",
    "team": "SD",
    "games_played": 123,
    "hits": 128,
    "average": 276,
    "home_runs": 19,
    "rbi": 61
  },
  {
    "name": "Will Smith",
    "team": "LAD",
    "games_played": 103,
    "hits": 84,
    "average": 258,
    "home_runs": 19,
    "rbi": 60
  },
  {
    "name": "Josh Donaldson",
    "team": "MIN",
    "games_played": 99,
    "hits": 81,
    "average": 248,
    "home_runs": 18,
    "rbi": 52
  },
  {
    "name": "Jonathan Schoop",
    "team": "DET",
    "games_played": 122,
    "hits": 136,
    "average": 281,
    "home_runs": 18,
    "rbi": 69
  },
  {
    "name": "Jorge Soler",
    "team": "KC",
    "games_played": 116,
    "hits": 79,
    "average": 204,
    "home_runs": 18,
    "rbi": 48
  },
  {
    "name": "Tyler Naquin",
    "team": "CIN",
    "games_played": 114,
    "hits": 99,
    "average": 269,
    "home_runs": 18,
    "rbi": 66
  },
  {
    "name": "Chris Taylor",
    "team": "LAD",
    "games_played": 120,
    "hits": 120,
    "average": 280,
    "home_runs": 18,
    "rbi": 66
  },
  {
    "name": "Ryan McMahon",
    "team": "COL",
    "games_played": 117,
    "hits": 109,
    "average": 264,
    "home_runs": 18,
    "rbi": 63
  },
  {
    "name": "Justin Upton",
    "team": "LAA",
    "games_played": 86,
    "hits": 67,
    "average": 217,
    "home_runs": 17,
    "rbi": 40
  },
  {
    "name": "Carlos Santana",
    "team": "KC",
    "games_played": 124,
    "hits": 102,
    "average": 228,
    "home_runs": 17,
    "rbi": 59
  },
  {
    "name": "Anthony Rizzo",
    "team": "CHC",
    "games_played": 106,
    "hits": 90,
    "average": 241,
    "home_runs": 17,
    "rbi": 49
  },
  {
    "name": "Gary Sanchez",
    "team": "NYY",
    "games_played": 89,
    "hits": 65,
    "average": 219,
    "home_runs": 17,
    "rbi": 42
  },
  {
    "name": "Willson Contreras",
    "team": "CHC",
    "games_played": 104,
    "hits": 78,
    "average": 226,
    "home_runs": 17,
    "rbi": 40
  },
  {
    "name": "Mookie Betts",
    "team": "LAD",
    "games_played": 87,
    "hits": 93,
    "average": 277,
    "home_runs": 17,
    "rbi": 44
  },
  {
    "name": "LaMonte Wade Jr.",
    "team": "SF",
    "games_played": 74,
    "hits": 57,
    "average": 251,
    "home_runs": 17,
    "rbi": 43
  },
  {
    "name": "Enrique Hernandez",
    "team": "BOS",
    "games_played": 110,
    "hits": 104,
    "average": 254,
    "home_runs": 16,
    "rbi": 50
  },
  {
    "name": "Max Kepler",
    "team": "MIN",
    "games_played": 89,
    "hits": 66,
    "average": 204,
    "home_runs": 16,
    "rbi": 45
  },
  {
    "name": "George Springer",
    "team": "TOR",
    "games_played": 49,
    "hits": 49,
    "average": 269,
    "home_runs": 16,
    "rbi": 35
  },
  {
    "name": "Trevor Story",
    "team": "COL",
    "games_played": 110,
    "hits": 101,
    "average": 251,
    "home_runs": 16,
    "rbi": 58
  },
  {
    "name": "Paul DeJong",
    "team": "STL",
    "games_played": 90,
    "hits": 60,
    "average": 202,
    "home_runs": 16,
    "rbi": 40
  },
  {
    "name": "Luis Urias",
    "team": "MIL",
    "games_played": 117,
    "hits": 94,
    "average": 248,
    "home_runs": 16,
    "rbi": 55
  },
  {
    "name": "Ty France",
    "team": "SEA",
    "games_played": 117,
    "hits": 128,
    "average": 291,
    "home_runs": 16,
    "rbi": 59
  },
  {
    "name": "Seth Brown",
    "team": "OAK",
    "games_played": 94,
    "hits": 47,
    "average": 203,
    "home_runs": 16,
    "rbi": 39
  },
  {
    "name": "Randy Arozarena",
    "team": "TB",
    "games_played": 111,
    "hits": 116,
    "average": 275,
    "home_runs": 16,
    "rbi": 54
  },
  {
    "name": "Jonathan India",
    "team": "CIN",
    "games_played": 118,
    "hits": 110,
    "average": 275,
    "home_runs": 16,
    "rbi": 56
  },
  {
    "name": "Albert Pujols",
    "team": "LAA/LAD",
    "games_played": 87,
    "hits": 59,
    "average": 242,
    "home_runs": 15,
    "rbi": 45
  },
  {
    "name": "Buster Posey",
    "team": "SF",
    "games_played": 86,
    "hits": 91,
    "average": 314,
    "home_runs": 15,
    "rbi": 39
  },
  {
    "name": "Wilmer Flores",
    "team": "SF",
    "games_played": 112,
    "hits": 81,
    "average": 250,
    "home_runs": 15,
    "rbi": 44
  },
  {
    "name": "AJ Pollock",
    "team": "LAD",
    "games_played": 97,
    "hits": 99,
    "average": 307,
    "home_runs": 15,
    "rbi": 53
  },
  {
    "name": "Wil Myers",
    "team": "SD",
    "games_played": 116,
    "hits": 92,
    "average": 261,
    "home_runs": 15,
    "rbi": 52
  },
  {
    "name": "Joc Pederson",
    "team": "CHC/ATL",
    "games_played": 108,
    "hits": 87,
    "average": 238,
    "home_runs": 15,
    "rbi": 54
  },
  {
    "name": "Rougned Odor",
    "team": "NYY",
    "games_played": 89,
    "hits": 63,
    "average": 214,
    "home_runs": 15,
    "rbi": 39
  },
  {
    "name": "Andrew Vaughn",
    "team": "CHW",
    "games_played": 109,
    "hits": 92,
    "average": 260,
    "home_runs": 15,
    "rbi": 43
  },
  {
    "name": "Miguel Cabrera",
    "team": "DET",
    "games_played": 100,
    "hits": 91,
    "average": 249,
    "home_runs": 14,
    "rbi": 57
  },
  {
    "name": "Yasmani Grandal",
    "team": "CHW",
    "games_played": 63,
    "hits": 34,
    "average": 188,
    "home_runs": 14,
    "rbi": 38
  },
  {
    "name": "Darin Ruf",
    "team": "SF",
    "games_played": 92,
    "hits": 52,
    "average": 272,
    "home_runs": 14,
    "rbi": 33
  },
  {
    "name": "Jonathan Villar",
    "team": "NYM",
    "games_played": 105,
    "hits": 79,
    "average": 244,
    "home_runs": 14,
    "rbi": 32
  },
  {
    "name": "J.T. Realmuto",
    "team": "PHI",
    "games_played": 102,
    "hits": 94,
    "average": 263,
    "home_runs": 14,
    "rbi": 56
  },
  {
    "name": "Tim Anderson",
    "team": "CHW",
    "games_played": 104,
    "hits": 135,
    "average": 303,
    "home_runs": 14,
    "rbi": 51
  },
  {
    "name": "Sean Murphy",
    "team": "OAK",
    "games_played": 101,
    "hits": 74,
    "average": 224,
    "home_runs": 14,
    "rbi": 54
  },
  {
    "name": "Elias Diaz",
    "team": "COL",
    "games_played": 78,
    "hits": 57,
    "average": 229,
    "home_runs": 14,
    "rbi": 33
  },
  {
    "name": "Luis Torrens",
    "team": "SEA",
    "games_played": 76,
    "hits": 54,
    "average": 215,
    "home_runs": 14,
    "rbi": 34
  },
  {
    "name": "Ian Happ",
    "team": "CHC",
    "games_played": 114,
    "hits": 66,
    "average": 195,
    "home_runs": 14,
    "rbi": 35
  },
  {
    "name": "Ramon Laureano",
    "team": "OAK",
    "games_played": 88,
    "hits": 84,
    "average": 246,
    "home_runs": 14,
    "rbi": 39
  },
  {
    "name": "Lourdes Gurriel Jr.",
    "team": "TOR",
    "games_played": 109,
    "hits": 106,
    "average": 272,
    "home_runs": 14,
    "rbi": 54
  },
  {
    "name": "Bobby Dalbec",
    "team": "BOS",
    "games_played": 103,
    "hits": 73,
    "average": 227,
    "home_runs": 14,
    "rbi": 52
  },
  {
    "name": "Jazz Chisholm Jr.",
    "team": "MIA",
    "games_played": 89,
    "hits": 83,
    "average": 255,
    "home_runs": 14,
    "rbi": 43
  },
  {
    "name": "Jed Lowrie",
    "team": "OAK",
    "games_played": 117,
    "hits": 103,
    "average": 254,
    "home_runs": 13,
    "rbi": 62
  },
  {
    "name": "Tommy Pham",
    "team": "SD",
    "games_played": 122,
    "hits": 95,
    "average": 239,
    "home_runs": 13,
    "rbi": 40
  },
  {
    "name": "Alex Dickerson",
    "team": "SF",
    "games_played": 98,
    "hits": 62,
    "average": 241,
    "home_runs": 13,
    "rbi": 38
  },
  {
    "name": "Mitch Garver",
    "team": "MIN",
    "games_played": 61,
    "hits": 44,
    "average": 242,
    "home_runs": 13,
    "rbi": 29
  },
  {
    "name": "Trent Grisham",
    "team": "SD",
    "games_played": 98,
    "hits": 87,
    "average": 254,
    "home_runs": 13,
    "rbi": 51
  },
  {
    "name": "Yuli Gurriel",
    "team": "HOU",
    "games_played": 112,
    "hits": 128,
    "average": 317,
    "home_runs": 13,
    "rbi": 69
  },
  {
    "name": "Anthony Santander",
    "team": "BAL",
    "games_played": 83,
    "hits": 76,
    "average": 250,
    "home_runs": 13,
    "rbi": 38
  },
  {
    "name": "Austin Hays",
    "team": "BAL",
    "games_played": 94,
    "hits": 82,
    "average": 234,
    "home_runs": 13,
    "rbi": 43
  },
  {
    "name": "Nathaniel Lowe",
    "team": "TEX",
    "games_played": 121,
    "hits": 111,
    "average": 258,
    "home_runs": 13,
    "rbi": 58
  },
  {
    "name": "Ryan Zimmerman",
    "team": "WSH",
    "games_played": 85,
    "hits": 50,
    "average": 240,
    "home_runs": 12,
    "rbi": 42
  },
  {
    "name": "Mark Canha",
    "team": "OAK",
    "games_played": 107,
    "hits": 93,
    "average": 235,
    "home_runs": 12,
    "rbi": 43
  },
  {
    "name": "Yan Gomes",
    "team": "WSH",
    "games_played": 77,
    "hits": 71,
    "average": 267,
    "home_runs": 12,
    "rbi": 45
  },
  {
    "name": "Brad Miller",
    "team": "PHI",
    "games_played": 104,
    "hits": 52,
    "average": 218,
    "home_runs": 12,
    "rbi": 34
  },
  {
    "name": "Alex Verdugo",
    "team": "BOS",
    "games_played": 117,
    "hits": 123,
    "average": 286,
    "home_runs": 12,
    "rbi": 48
  },
  {
    "name": "Andrew Benintendi",
    "team": "KC",
    "games_played": 98,
    "hits": 94,
    "average": 263,
    "home_runs": 12,
    "rbi": 43
  },
  {
    "name": "Dylan Carlson",
    "team": "STL",
    "games_played": 113,
    "hits": 110,
    "average": 261,
    "home_runs": 12,
    "rbi": 46
  },
  {
    "name": "Max Stassi",
    "team": "LAA",
    "games_played": 64,
    "hits": 57,
    "average": 271,
    "home_runs": 11,
    "rbi": 29
  },
  {
    "name": "Kolten Wong",
    "team": "MIL",
    "games_played": 85,
    "hits": 94,
    "average": 290,
    "home_runs": 11,
    "rbi": 38
  },
  {
    "name": "Francisco Lindor",
    "team": "NYM",
    "games_played": 88,
    "hits": 71,
    "average": 225,
    "home_runs": 11,
    "rbi": 36
  },
  {
    "name": "Maikel Franco",
    "team": "BAL",
    "games_played": 104,
    "hits": 79,
    "average": 210,
    "home_runs": 11,
    "rbi": 47
  },
  {
    "name": "Gio Urshela",
    "team": "NYY",
    "games_played": 84,
    "hits": 85,
    "average": 274,
    "home_runs": 11,
    "rbi": 41
  },
  {
    "name": "Odubel Herrera",
    "team": "PHI",
    "games_played": 90,
    "hits": 81,
    "average": 256,
    "home_runs": 11,
    "rbi": 39
  },
  {
    "name": "Gregory Polanco",
    "team": "PIT",
    "games_played": 104,
    "hits": 65,
    "average": 199,
    "home_runs": 11,
    "rbi": 34
  },
  {
    "name": "Dominic Smith",
    "team": "NYM",
    "games_played": 119,
    "hits": 97,
    "average": 242,
    "home_runs": 11,
    "rbi": 52
  },
  {
    "name": "Kyle Farmer",
    "team": "CIN",
    "games_played": 119,
    "hits": 99,
    "average": 262,
    "home_runs": 11,
    "rbi": 47
  },
  {
    "name": "Bobby Bradley",
    "team": "CLE",
    "games_played": 46,
    "hits": 32,
    "average": 213,
    "home_runs": 11,
    "rbi": 25
  },
  {
    "name": "Yoan Moncada",
    "team": "CHW",
    "games_played": 116,
    "hits": 108,
    "average": 262,
    "home_runs": 11,
    "rbi": 51
  },
  {
    "name": "Omar Narvaez",
    "team": "MIL",
    "games_played": 95,
    "hits": 86,
    "average": 292,
    "home_runs": 11,
    "rbi": 42
  },
  {
    "name": "Chas McCormick",
    "team": "HOU",
    "games_played": 84,
    "hits": 57,
    "average": 260,
    "home_runs": 11,
    "rbi": 42
  },
  {
    "name": "Josh Rojas",
    "team": "ARI",
    "games_played": 107,
    "hits": 104,
    "average": 283,
    "home_runs": 11,
    "rbi": 36
  },
  {
    "name": "Ryan Jeffers",
    "team": "MIN",
    "games_played": 58,
    "hits": 39,
    "average": 212,
    "home_runs": 11,
    "rbi": 29
  },
  {
    "name": "Evan Longoria",
    "team": "SF",
    "games_played": 55,
    "hits": 50,
    "average": 289,
    "home_runs": 10,
    "rbi": 31
  },
  {
    "name": "Mitch Moreland",
    "team": "OAK",
    "games_played": 80,
    "hits": 52,
    "average": 230,
    "home_runs": 10,
    "rbi": 30
  },
  {
    "name": "Eric Hosmer",
    "team": "SD",
    "games_played": 117,
    "hits": 112,
    "average": 277,
    "home_runs": 10,
    "rbi": 53
  },
  {
    "name": "Didi Gregorius",
    "team": "PHI",
    "games_played": 73,
    "hits": 57,
    "average": 215,
    "home_runs": 10,
    "rbi": 37
  },
  {
    "name": "Michael A. Taylor",
    "team": "KC",
    "games_played": 114,
    "hits": 91,
    "average": 241,
    "home_runs": 10,
    "rbi": 43
  },
  {
    "name": "Jeimer Candelario",
    "team": "DET",
    "games_played": 117,
    "hits": 120,
    "average": 274,
    "home_runs": 10,
    "rbi": 47
  },
  {
    "name": "Byron Buxton",
    "team": "MIN",
    "games_played": 27,
    "hits": 38,
    "average": 369,
    "home_runs": 10,
    "rbi": 19
  },
  {
    "name": "Tyrone Taylor",
    "team": "MIL",
    "games_played": 82,
    "hits": 52,
    "average": 245,
    "home_runs": 10,
    "rbi": 37
  },
  {
    "name": "Kevin Pillar",
    "team": "NYM",
    "games_played": 94,
    "hits": 51,
    "average": 207,
    "home_runs": 10,
    "rbi": 29
  },
  {
    "name": "Hunter Dozier",
    "team": "KC",
    "games_played": 108,
    "hits": 77,
    "average": 208,
    "home_runs": 10,
    "rbi": 37
  },
  {
    "name": "Brett Phillips",
    "team": "TB",
    "games_played": 98,
    "hits": 46,
    "average": 218,
    "home_runs": 10,
    "rbi": 35
  },
  {
    "name": "Rowdy Tellez",
    "team": "TOR/MIL",
    "games_played": 87,
    "hits": 57,
    "average": 242,
    "home_runs": 10,
    "rbi": 28
  },
  {
    "name": "DJ Stewart",
    "team": "BAL",
    "games_played": 83,
    "hits": 46,
    "average": 197,
    "home_runs": 10,
    "rbi": 27
  },
  {
    "name": "Dylan Moore",
    "team": "SEA",
    "games_played": 97,
    "hits": 49,
    "average": 178,
    "home_runs": 10,
    "rbi": 37
  },
  {
    "name": "Akil Baddoo",
    "team": "DET",
    "games_played": 94,
    "hits": 80,
    "average": 262,
    "home_runs": 10,
    "rbi": 45
  },
  {
    "name": "Freddy Galvis",
    "team": "BAL",
    "games_played": 72,
    "hits": 62,
    "average": 249,
    "home_runs": 9,
    "rbi": 26
  },
  {
    "name": "Manny Pina",
    "team": "MIL",
    "games_played": 61,
    "hits": 26,
    "average": 181,
    "home_runs": 9,
    "rbi": 26
  },
  {
    "name": "Martin Maldonado",
    "team": "HOU",
    "games_played": 92,
    "hits": 51,
    "average": 177,
    "home_runs": 9,
    "rbi": 29
  },
  {
    "name": "DJ LeMahieu",
    "team": "NYY",
    "games_played": 119,
    "hits": 128,
    "average": 268,
    "home_runs": 9,
    "rbi": 51
  },
  {
    "name": "Starling Marte",
    "team": "MIA",
    "games_played": 87,
    "hits": 107,
    "average": 320,
    "home_runs": 9,
    "rbi": 39
  },
  {
    "name": "Charlie Blackmon",
    "team": "COL",
    "games_played": 117,
    "hits": 111,
    "average": 276,
    "home_runs": 9,
    "rbi": 60
  },
  {
    "name": "Ji-Man Choi",
    "team": "TB",
    "games_played": 64,
    "hits": 50,
    "average": 250,
    "home_runs": 9,
    "rbi": 38
  },
  {
    "name": "James McCann",
    "team": "NYM",
    "games_played": 99,
    "hits": 74,
    "average": 240,
    "home_runs": 9,
    "rbi": 35
  },
  {
    "name": "Billy McKinney",
    "team": "MIL/NYM/LAD",
    "games_played": 105,
    "hits": 50,
    "average": 202,
    "home_runs": 9,
    "rbi": 26
  },
  {
    "name": "Tom Murphy",
    "team": "SEA",
    "games_played": 74,
    "hits": 44,
    "average": 206,
    "home_runs": 9,
    "rbi": 24
  },
  {
    "name": "Pedro Severino",
    "team": "BAL",
    "games_played": 87,
    "hits": 67,
    "average": 233,
    "home_runs": 9,
    "rbi": 30
  },
  {
    "name": "Garrett Cooper",
    "team": "MIA",
    "games_played": 71,
    "hits": 61,
    "average": 284,
    "home_runs": 9,
    "rbi": 33
  },
  {
    "name": "Yandy Diaz",
    "team": "TB",
    "games_played": 102,
    "hits": 90,
    "average": 252,
    "home_runs": 9,
    "rbi": 40
  },
  {
    "name": "Manuel Margot",
    "team": "TB",
    "games_played": 94,
    "hits": 85,
    "average": 255,
    "home_runs": 9,
    "rbi": 51
  },
  {
    "name": "Cody Bellinger",
    "team": "LAD",
    "games_played": 67,
    "hits": 41,
    "average": 172,
    "home_runs": 9,
    "rbi": 31
  },
  {
    "name": "Willi Castro",
    "team": "DET",
    "games_played": 100,
    "hits": 75,
    "average": 218,
    "home_runs": 9,
    "rbi": 37
  },
  {
    "name": "Tyler Stephenson",
    "team": "CIN",
    "games_played": 102,
    "hits": 78,
    "average": 289,
    "home_runs": 9,
    "rbi": 40
  },
  {
    "name": "Harrison Bader",
    "team": "STL",
    "games_played": 65,
    "hits": 59,
    "average": 254,
    "home_runs": 9,
    "rbi": 30
  },
  {
    "name": "Brendan Rodgers",
    "team": "COL",
    "games_played": 68,
    "hits": 69,
    "average": 283,
    "home_runs": 9,
    "rbi": 29
  },
  {
    "name": "Ryan O'Hearn",
    "team": "KC",
    "games_played": 64,
    "hits": 43,
    "average": 226,
    "home_runs": 9,
    "rbi": 28
  },
  {
    "name": "Austin Slater",
    "team": "SF",
    "games_played": 107,
    "hits": 54,
    "average": 226,
    "home_runs": 9,
    "rbi": 26
  },
  {
    "name": "Nick Solak",
    "team": "TEX",
    "games_played": 95,
    "hits": 79,
    "average": 227,
    "home_runs": 9,
    "rbi": 35
  },
  {
    "name": "Abraham Toro",
    "team": "HOU/SEA",
    "games_played": 61,
    "hits": 54,
    "average": 262,
    "home_runs": 9,
    "rbi": 30
  },
  {
    "name": "Pavin Smith",
    "team": "ARI",
    "games_played": 113,
    "hits": 111,
    "average": 269,
    "home_runs": 9,
    "rbi": 41
  },
  {
    "name": "Daulton Varsho",
    "team": "ARI",
    "games_played": 64,
    "hits": 39,
    "average": 232,
    "home_runs": 9,
    "rbi": 25
  },
  {
    "name": "Yadier Molina",
    "team": "STL",
    "games_played": 95,
    "hits": 89,
    "average": 259,
    "home_runs": 8,
    "rbi": 51
  },
  {
    "name": "Michael Brantley",
    "team": "HOU",
    "games_played": 104,
    "hits": 127,
    "average": 314,
    "home_runs": 8,
    "rbi": 42
  },
  {
    "name": "Wilson Ramos",
    "team": "DET/CLE",
    "games_played": 42,
    "hits": 30,
    "average": 208,
    "home_runs": 8,
    "rbi": 18
  },
  {
    "name": "Jose Iglesias",
    "team": "LAA",
    "games_played": 112,
    "hits": 109,
    "average": 261,
    "home_runs": 8,
    "rbi": 41
  },
  {
    "name": "Kyle Higashioka",
    "team": "NYY",
    "games_played": 53,
    "hits": 26,
    "average": 176,
    "home_runs": 8,
    "rbi": 20
  },
  {
    "name": "Mike Trout",
    "team": "LAA",
    "games_played": 36,
    "hits": 39,
    "average": 333,
    "home_runs": 8,
    "rbi": 18
  },
  {
    "name": "Jean Segura",
    "team": "PHI",
    "games_played": 97,
    "hits": 109,
    "average": 291,
    "home_runs": 8,
    "rbi": 41
  },
  {
    "name": "Christian Yelich",
    "team": "MIL",
    "games_played": 83,
    "hits": 69,
    "average": 248,
    "home_runs": 8,
    "rbi": 40
  },
  {
    "name": "Whit Merrifield",
    "team": "KC",
    "games_played": 125,
    "hits": 140,
    "average": 278,
    "home_runs": 8,
    "rbi": 61
  },
  {
    "name": "Carson Kelly",
    "team": "ARI",
    "games_played": 69,
    "hits": 53,
    "average": 255,
    "home_runs": 8,
    "rbi": 30
  },
  {
    "name": "Travis Shaw",
    "team": "MIL",
    "games_played": 60,
    "hits": 36,
    "average": 194,
    "home_runs": 8,
    "rbi": 33
  },
  {
    "name": "Amed Rosario",
    "team": "CLE",
    "games_played": 114,
    "hits": 127,
    "average": 289,
    "home_runs": 8,
    "rbi": 43
  },
  {
    "name": "Michael Conforto",
    "team": "NYM",
    "games_played": 91,
    "hits": 62,
    "average": 217,
    "home_runs": 8,
    "rbi": 30
  },
  {
    "name": "Aristides Aquino",
    "team": "CIN",
    "games_played": 58,
    "hits": 25,
    "average": 200,
    "home_runs": 8,
    "rbi": 17
  },
  {
    "name": "Dom Nunez",
    "team": "COL",
    "games_played": 65,
    "hits": 33,
    "average": 179,
    "home_runs": 8,
    "rbi": 28
  },
  {
    "name": "Jonah Heim",
    "team": "TEX",
    "games_played": 68,
    "hits": 45,
    "average": 208,
    "home_runs": 8,
    "rbi": 23
  },
  {
    "name": "Jacob Stallings",
    "team": "PIT",
    "games_played": 93,
    "hits": 71,
    "average": 233,
    "home_runs": 8,
    "rbi": 46
  },
  {
    "name": "Taylor Ward",
    "team": "LAA",
    "games_played": 63,
    "hits": 49,
    "average": 240,
    "home_runs": 8,
    "rbi": 31
  },
  {
    "name": "Sam Hilliard",
    "team": "COL",
    "games_played": 50,
    "hits": 25,
    "average": 203,
    "home_runs": 8,
    "rbi": 19
  },
  {
    "name": "Taylor Trammell",
    "team": "SEA",
    "games_played": 51,
    "hits": 25,
    "average": 160,
    "home_runs": 8,
    "rbi": 18
  },
  {
    "name": "Jake Fraley",
    "team": "SEA",
    "games_played": 60,
    "hits": 36,
    "average": 208,
    "home_runs": 8,
    "rbi": 27
  },
  {
    "name": "Garrett Hampson",
    "team": "COL",
    "games_played": 116,
    "hits": 86,
    "average": 238,
    "home_runs": 8,
    "rbi": 25
  },
  {
    "name": "Alex Kirilloff",
    "team": "MIN",
    "games_played": 59,
    "hits": 54,
    "average": 251,
    "home_runs": 8,
    "rbi": 34
  },
  {
    "name": "Asdrubal Cabrera",
    "team": "ARI",
    "games_played": 88,
    "hits": 67,
    "average": 242,
    "home_runs": 7,
    "rbi": 39
  },
  {
    "name": "Josh Harrison",
    "team": "WSH",
    "games_played": 106,
    "hits": 108,
    "average": 288,
    "home_runs": 7,
    "rbi": 43
  },
  {
    "name": "Tucker Barnhart",
    "team": "CIN",
    "games_played": 92,
    "hits": 74,
    "average": 265,
    "home_runs": 7,
    "rbi": 42
  },
  {
    "name": "Marcell Ozuna",
    "team": "ATL",
    "games_played": 48,
    "hits": 40,
    "average": 213,
    "home_runs": 7,
    "rbi": 26
  },
  {
    "name": "Rafael Ortega",
    "team": "CHC",
    "games_played": 70,
    "hits": 55,
    "average": 306,
    "home_runs": 7,
    "rbi": 21
  },
  {
    "name": "Eddie Rosario",
    "team": "CLE",
    "games_played": 78,
    "hits": 72,
    "average": 254,
    "home_runs": 7,
    "rbi": 46
  },
  {
    "name": "Brian Goodwin",
    "team": "CHW",
    "games_played": 57,
    "hits": 44,
    "average": 232,
    "home_runs": 7,
    "rbi": 22
  },
  {
    "name": "Ketel Marte",
    "team": "ARI",
    "games_played": 57,
    "hits": 75,
    "average": 354,
    "home_runs": 7,
    "rbi": 32
  },
  {
    "name": "Michael Perez",
    "team": "PIT",
    "games_played": 52,
    "hits": 23,
    "average": 150,
    "home_runs": 7,
    "rbi": 16
  },
  {
    "name": "Lewis Brinson",
    "team": "MIA",
    "games_played": 59,
    "hits": 42,
    "average": 247,
    "home_runs": 7,
    "rbi": 25
  },
  {
    "name": "Daniel Vogelbach",
    "team": "MIL",
    "games_played": 67,
    "hits": 37,
    "average": 216,
    "home_runs": 7,
    "rbi": 16
  },
  {
    "name": "Joey Wendle",
    "team": "TB",
    "games_played": 104,
    "hits": 95,
    "average": 271,
    "home_runs": 7,
    "rbi": 42
  },
  {
    "name": "Aledmys Diaz",
    "team": "HOU",
    "games_played": 58,
    "hits": 66,
    "average": 306,
    "home_runs": 7,
    "rbi": 37
  },
  {
    "name": "Isiah Kiner-Falefa",
    "team": "TEX",
    "games_played": 124,
    "hits": 132,
    "average": 265,
    "home_runs": 7,
    "rbi": 40
  },
  {
    "name": "Adam Engel",
    "team": "CHW",
    "games_played": 33,
    "hits": 26,
    "average": 248,
    "home_runs": 7,
    "rbi": 18
  },
  {
    "name": "Joshua Fuentes",
    "team": "COL",
    "games_played": 90,
    "hits": 60,
    "average": 228,
    "home_runs": 7,
    "rbi": 32
  },
  {
    "name": "Alex Bregman",
    "team": "HOU",
    "games_played": 59,
    "hits": 63,
    "average": 275,
    "home_runs": 7,
    "rbi": 34
  },
  {
    "name": "Josh Naylor",
    "team": "CLE",
    "games_played": 69,
    "hits": 59,
    "average": 253,
    "home_runs": 7,
    "rbi": 21
  },
  {
    "name": "Luke Voit",
    "team": "NYY",
    "games_played": 44,
    "hits": 42,
    "average": 266,
    "home_runs": 7,
    "rbi": 28
  },
  {
    "name": "David Bote",
    "team": "CHC",
    "games_played": 76,
    "hits": 46,
    "average": 196,
    "home_runs": 7,
    "rbi": 31
  },
  {
    "name": "Connor Joe",
    "team": "COL",
    "games_played": 53,
    "hits": 43,
    "average": 293,
    "home_runs": 7,
    "rbi": 29
  },
  {
    "name": "Steven Duggar",
    "team": "SF",
    "games_played": 83,
    "hits": 58,
    "average": 267,
    "home_runs": 7,
    "rbi": 28
  },
  {
    "name": "Yermin Mercedes",
    "team": "CHW",
    "games_played": 68,
    "hits": 65,
    "average": 271,
    "home_runs": 7,
    "rbi": 37
  },
  {
    "name": "Jack Mayfield",
    "team": "LAA/SEA",
    "games_played": 52,
    "hits": 30,
    "average": 208,
    "home_runs": 7,
    "rbi": 18
  },
  {
    "name": "Jordan Luplow",
    "team": "CLE/TB",
    "games_played": 45,
    "hits": 19,
    "average": 161,
    "home_runs": 7,
    "rbi": 20
  },
  {
    "name": "Cavan Biggio",
    "team": "TOR",
    "games_played": 77,
    "hits": 53,
    "average": 215,
    "home_runs": 7,
    "rbi": 26
  },
  {
    "name": "Zach McKinstry",
    "team": "LAD",
    "games_played": 59,
    "hits": 34,
    "average": 217,
    "home_runs": 7,
    "rbi": 29
  },
  {
    "name": "William Contreras",
    "team": "ATL",
    "games_played": 46,
    "hits": 29,
    "average": 196,
    "home_runs": 7,
    "rbi": 21
  },
  {
    "name": "Tommy Edman",
    "team": "STL",
    "games_played": 122,
    "hits": 125,
    "average": 257,
    "home_runs": 7,
    "rbi": 36
  },
  {
    "name": "Ramon Urias",
    "team": "BAL",
    "games_played": 66,
    "hits": 56,
    "average": 272,
    "home_runs": 7,
    "rbi": 31
  },
  {
    "name": "Alec Bohm",
    "team": "PHI",
    "games_played": 111,
    "hits": 91,
    "average": 245,
    "home_runs": 7,
    "rbi": 47
  },
  {
    "name": "Trevor Larnach",
    "team": "MIN",
    "games_played": 79,
    "hits": 58,
    "average": 223,
    "home_runs": 7,
    "rbi": 28
  },
  {
    "name": "Jason Heyward",
    "team": "CHC",
    "games_played": 90,
    "hits": 55,
    "average": 197,
    "home_runs": 6,
    "rbi": 23
  },
  {
    "name": "Donovan Solano",
    "team": "SF",
    "games_played": 90,
    "hits": 79,
    "average": 275,
    "home_runs": 6,
    "rbi": 30
  },
  {
    "name": "Miguel Rojas",
    "team": "MIA",
    "games_played": 102,
    "hits": 105,
    "average": 272,
    "home_runs": 6,
    "rbi": 32
  },
  {
    "name": "Ronald Torreyes",
    "team": "PHI",
    "games_played": 78,
    "hits": 60,
    "average": 256,
    "home_runs": 6,
    "rbi": 32
  },
  {
    "name": "Ben Gamel",
    "team": "CLE/PIT",
    "games_played": 90,
    "hits": 63,
    "average": 257,
    "home_runs": 6,
    "rbi": 19
  },
  {
    "name": "Adam Eaton",
    "team": "CHW/LAA",
    "games_played": 83,
    "hits": 51,
    "average": 201,
    "home_runs": 6,
    "rbi": 30
  },
  {
    "name": "Anthony Rendon",
    "team": "LAA",
    "games_played": 58,
    "hits": 52,
    "average": 240,
    "home_runs": 6,
    "rbi": 34
  },
  {
    "name": "Roberto Perez",
    "team": "CLE",
    "games_played": 34,
    "hits": 15,
    "average": 136,
    "home_runs": 6,
    "rbi": 15
  },
  {
    "name": "Jackie Bradley Jr.",
    "team": "MIL",
    "games_played": 105,
    "hits": 57,
    "average": 174,
    "home_runs": 6,
    "rbi": 29
  },
  {
    "name": "Jose Peraza",
    "team": "NYM",
    "games_played": 52,
    "hits": 26,
    "average": 205,
    "home_runs": 6,
    "rbi": 19
  },
  {
    "name": "Niko Goodrum",
    "team": "DET",
    "games_played": 65,
    "hits": 47,
    "average": 224,
    "home_runs": 6,
    "rbi": 21
  },
  {
    "name": "Corey Seager",
    "team": "LAD",
    "games_played": 59,
    "hits": 63,
    "average": 280,
    "home_runs": 6,
    "rbi": 32
  },
  {
    "name": "Jake Lamb",
    "team": "CHW",
    "games_played": 41,
    "hits": 23,
    "average": 211,
    "home_runs": 6,
    "rbi": 13
  },
  {
    "name": "Christian Walker",
    "team": "ARI",
    "games_played": 84,
    "hits": 70,
    "average": 233,
    "home_runs": 6,
    "rbi": 35
  },
  {
    "name": "Christian Arroyo",
    "team": "BOS",
    "games_played": 52,
    "hits": 42,
    "average": 269,
    "home_runs": 6,
    "rbi": 25
  },
  {
    "name": "Colin Moran",
    "team": "PIT",
    "games_played": 65,
    "hits": 57,
    "average": 277,
    "home_runs": 6,
    "rbi": 30
  },
  {
    "name": "J.P. Crawford",
    "team": "SEA",
    "games_played": 125,
    "hits": 125,
    "average": 265,
    "home_runs": 6,
    "rbi": 38
  },
  {
    "name": "Victor Caratini",
    "team": "SD",
    "games_played": 96,
    "hits": 57,
    "average": 225,
    "home_runs": 6,
    "rbi": 33
  },
  {
    "name": "Harold Ramirez",
    "team": "CLE",
    "games_played": 77,
    "hits": 69,
    "average": 263,
    "home_runs": 6,
    "rbi": 31
  },
  {
    "name": "David Peralta",
    "team": "ARI",
    "games_played": 117,
    "hits": 98,
    "average": 250,
    "home_runs": 6,
    "rbi": 50
  },
  {
    "name": "Miguel Andujar",
    "team": "NYY",
    "games_played": 45,
    "hits": 39,
    "average": 253,
    "home_runs": 6,
    "rbi": 12
  },
  {
    "name": "Brian Anderson",
    "team": "MIA",
    "games_played": 61,
    "hits": 51,
    "average": 236,
    "home_runs": 6,
    "rbi": 25
  },
  {
    "name": "Gleyber Torres",
    "team": "NYY",
    "games_played": 99,
    "hits": 91,
    "average": 253,
    "home_runs": 6,
    "rbi": 42
  },
  {
    "name": "Eloy Jimenez",
    "team": "CHW",
    "games_played": 24,
    "hits": 29,
    "average": 302,
    "home_runs": 6,
    "rbi": 24
  },
  {
    "name": "Jeff McNeil",
    "team": "NYM",
    "games_played": 87,
    "hits": 72,
    "average": 247,
    "home_runs": 6,
    "rbi": 30
  },
  {
    "name": "Willians Astudillo",
    "team": "MIN",
    "games_played": 58,
    "hits": 43,
    "average": 257,
    "home_runs": 6,
    "rbi": 18
  },
  {
    "name": "Zack Short",
    "team": "DET",
    "games_played": 49,
    "hits": 20,
    "average": 147,
    "home_runs": 6,
    "rbi": 19
  },
  {
    "name": "Andrew Young",
    "team": "ARI",
    "games_played": 45,
    "hits": 13,
    "average": 228,
    "home_runs": 6,
    "rbi": 14
  },
  {
    "name": "Jake Rogers",
    "team": "DET",
    "games_played": 38,
    "hits": 27,
    "average": 239,
    "home_runs": 6,
    "rbi": 17
  },
  {
    "name": "Eli White",
    "team": "TEX",
    "games_played": 64,
    "hits": 35,
    "average": 177,
    "home_runs": 6,
    "rbi": 15
  },
  {
    "name": "Gavin Lux",
    "team": "LAD",
    "games_played": 84,
    "hits": 63,
    "average": 222,
    "home_runs": 6,
    "rbi": 37
  },
  {
    "name": "Gavin Sheets",
    "team": "CHW",
    "games_played": 29,
    "hits": 20,
    "average": 225,
    "home_runs": 6,
    "rbi": 16
  },
  {
    "name": "Yadiel Hernandez",
    "team": "WSH",
    "games_played": 80,
    "hits": 48,
    "average": 304,
    "home_runs": 6,
    "rbi": 19
  },
  {
    "name": "Brent Rooker",
    "team": "MIN",
    "games_played": 34,
    "hits": 24,
    "average": 195,
    "home_runs": 6,
    "rbi": 10
  },
  {
    "name": "Wander Franco",
    "team": "TB",
    "games_played": 48,
    "hits": 51,
    "average": 266,
    "home_runs": 6,
    "rbi": 29
  },
  {
    "name": "Jarred Kelenic",
    "team": "SEA",
    "games_played": 58,
    "hits": 31,
    "average": 150,
    "home_runs": 6,
    "rbi": 22
  },
  {
    "name": "Ha-Seong Kim",
    "team": "SD",
    "games_played": 98,
    "hits": 46,
    "average": 204,
    "home_runs": 6,
    "rbi": 29
  },
  {
    "name": "Brett Gardner",
    "team": "NYY",
    "games_played": 107,
    "hits": 59,
    "average": 213,
    "home_runs": 5,
    "rbi": 24
  },
  {
    "name": "Lorenzo Cain",
    "team": "MIL",
    "games_played": 51,
    "hits": 43,
    "average": 246,
    "home_runs": 5,
    "rbi": 23
  },
  {
    "name": "Mike Moustakas",
    "team": "CIN",
    "games_played": 44,
    "hits": 28,
    "average": 215,
    "home_runs": 5,
    "rbi": 17
  },
  {
    "name": "Stephen Vogt",
    "team": "ARI/ATL",
    "games_played": 72,
    "hits": 38,
    "average": 197,
    "home_runs": 5,
    "rbi": 23
  },
  {
    "name": "Jake Marisnick",
    "team": "CHC",
    "games_played": 76,
    "hits": 31,
    "average": 212,
    "home_runs": 5,
    "rbi": 23
  },
  {
    "name": "Phil Gosselin",
    "team": "LAA",
    "games_played": 73,
    "hits": 63,
    "average": 280,
    "home_runs": 5,
    "rbi": 32
  },
  {
    "name": "Christian Vazquez",
    "team": "BOS",
    "games_played": 108,
    "hits": 93,
    "average": 255,
    "home_runs": 5,
    "rbi": 38
  },
  {
    "name": "Abraham Almonte",
    "team": "ATL",
    "games_played": 63,
    "hits": 32,
    "average": 218,
    "home_runs": 5,
    "rbi": 19
  },
  {
    "name": "Corey Dickerson",
    "team": "MIA/TOR",
    "games_played": 80,
    "hits": 66,
    "average": 257,
    "home_runs": 5,
    "rbi": 23
  },
  {
    "name": "Curt Casali",
    "team": "SF",
    "games_played": 58,
    "hits": 35,
    "average": 223,
    "home_runs": 5,
    "rbi": 23
  },
  {
    "name": "Austin Hedges",
    "team": "CLE",
    "games_played": 64,
    "hits": 36,
    "average": 176,
    "home_runs": 5,
    "rbi": 22
  },
  {
    "name": "Phillip Evans",
    "team": "PIT",
    "games_played": 72,
    "hits": 43,
    "average": 208,
    "home_runs": 5,
    "rbi": 16
  },
  {
    "name": "Jace Peterson",
    "team": "MIL",
    "games_played": 65,
    "hits": 43,
    "average": 265,
    "home_runs": 5,
    "rbi": 26
  },
  {
    "name": "Stephen Piscotty",
    "team": "OAK",
    "games_played": 72,
    "hits": 38,
    "average": 220,
    "home_runs": 5,
    "rbi": 16
  },
  {
    "name": "Clint Frazier",
    "team": "NYY",
    "games_played": 66,
    "hits": 34,
    "average": 186,
    "home_runs": 5,
    "rbi": 15
  },
  {
    "name": "Francisco Mejia",
    "team": "TB",
    "games_played": 67,
    "hits": 52,
    "average": 263,
    "home_runs": 5,
    "rbi": 28
  },
  {
    "name": "Raimel Tapia",
    "team": "COL",
    "games_played": 105,
    "hits": 114,
    "average": 288,
    "home_runs": 5,
    "rbi": 45
  },
  {
    "name": "Bradley Zimmer",
    "team": "CLE",
    "games_played": 67,
    "hits": 47,
    "average": 240,
    "home_runs": 5,
    "rbi": 24
  },
  {
    "name": "J.D. Davis",
    "team": "NYM",
    "games_played": 52,
    "hits": 43,
    "average": 295,
    "home_runs": 5,
    "rbi": 21
  },
  {
    "name": "Frank Schwindel",
    "team": "OAK/CHC",
    "games_played": 29,
    "hits": 29,
    "average": 315,
    "home_runs": 5,
    "rbi": 18
  },
  {
    "name": "Andy Ibanez",
    "team": "TEX",
    "games_played": 58,
    "hits": 46,
    "average": 249,
    "home_runs": 5,
    "rbi": 18
  },
  {
    "name": "Danny Jansen",
    "team": "TOR",
    "games_played": 49,
    "hits": 22,
    "average": 176,
    "home_runs": 5,
    "rbi": 10
  },
  {
    "name": "KeBryan Hayes",
    "team": "PIT",
    "games_played": 72,
    "hits": 66,
    "average": 250,
    "home_runs": 5,
    "rbi": 28
  },
  {
    "name": "Guillermo Heredia",
    "team": "ATL",
    "games_played": 96,
    "hits": 63,
    "average": 221,
    "home_runs": 5,
    "rbi": 25
  },
  {
    "name": "Willie Calhoun",
    "team": "TEX",
    "games_played": 59,
    "hits": 52,
    "average": 254,
    "home_runs": 5,
    "rbi": 19
  },
  {
    "name": "Mauricio Dubon",
    "team": "SF",
    "games_played": 66,
    "hits": 37,
    "average": 234,
    "home_runs": 5,
    "rbi": 20
  },
  {
    "name": "Kyle Garlick",
    "team": "MIN",
    "games_played": 36,
    "hits": 23,
    "average": 232,
    "home_runs": 5,
    "rbi": 10
  },
  {
    "name": "Kyle Lewis",
    "team": "SEA",
    "games_played": 36,
    "hits": 32,
    "average": 246,
    "home_runs": 5,
    "rbi": 11
  },
  {
    "name": "DJ Peters",
    "team": "LAD/TEX",
    "games_played": 37,
    "hits": 17,
    "average": 173,
    "home_runs": 5,
    "rbi": 17
  },
  {
    "name": "Matt Beaty",
    "team": "LAD",
    "games_played": 104,
    "hits": 49,
    "average": 263,
    "home_runs": 5,
    "rbi": 34
  },
  {
    "name": "Seby Zavala",
    "team": "CHW",
    "games_played": 28,
    "hits": 16,
    "average": 216,
    "home_runs": 5,
    "rbi": 14
  },
  {
    "name": "Mike Brosseau",
    "team": "TB",
    "games_played": 57,
    "hits": 28,
    "average": 187,
    "home_runs": 5,
    "rbi": 18
  },
  {
    "name": "Rodolfo Castro",
    "team": "PIT",
    "games_played": 31,
    "hits": 17,
    "average": 198,
    "home_runs": 5,
    "rbi": 8
  },
  {
    "name": "Kurt Suzuki",
    "team": "LAA",
    "games_played": 56,
    "hits": 39,
    "average": 227,
    "home_runs": 4,
    "rbi": 12
  },
  {
    "name": "Pablo Sandoval",
    "team": "ATL",
    "games_played": 69,
    "hits": 13,
    "average": 178,
    "home_runs": 4,
    "rbi": 11
  },
  {
    "name": "Travis dArnaud",
    "team": "ATL",
    "games_played": 30,
    "hits": 26,
    "average": 236,
    "home_runs": 4,
    "rbi": 17
  },
  {
    "name": "Charlie Culberson",
    "team": "TEX",
    "games_played": 77,
    "hits": 53,
    "average": 250,
    "home_runs": 4,
    "rbi": 18
  },
  {
    "name": "Jason Castro",
    "team": "HOU",
    "games_played": 54,
    "hits": 24,
    "average": 190,
    "home_runs": 4,
    "rbi": 13
  },
  {
    "name": "Robinson Chirinos",
    "team": "CHC",
    "games_played": 31,
    "hits": 15,
    "average": 246,
    "home_runs": 4,
    "rbi": 7
  },
  {
    "name": "Ehire Adrianza",
    "team": "ATL",
    "games_played": 86,
    "hits": 36,
    "average": 242,
    "home_runs": 4,
    "rbi": 24
  },
  {
    "name": "Aaron Hicks",
    "team": "NYY",
    "games_played": 32,
    "hits": 21,
    "average": 194,
    "home_runs": 4,
    "rbi": 14
  },
  {
    "name": "Danny Santana",
    "team": "BOS",
    "games_played": 33,
    "hits": 18,
    "average": 171,
    "home_runs": 4,
    "rbi": 13
  },
  {
    "name": "Kevin Kiermaier",
    "team": "TB",
    "games_played": 90,
    "hits": 65,
    "average": 243,
    "home_runs": 4,
    "rbi": 30
  },
  {
    "name": "Brandon Nimmo",
    "team": "NYM",
    "games_played": 67,
    "hits": 66,
    "average": 287,
    "home_runs": 4,
    "rbi": 20
  },
  {
    "name": "John Hicks",
    "team": "TEX",
    "games_played": 10,
    "hits": 8,
    "average": 258,
    "home_runs": 4,
    "rbi": 7
  },
  {
    "name": "Brandon Drury",
    "team": "NYM",
    "games_played": 46,
    "hits": 23,
    "average": 291,
    "home_runs": 4,
    "rbi": 14
  },
  {
    "name": "Jon Berti",
    "team": "MIA",
    "games_played": 85,
    "hits": 49,
    "average": 210,
    "home_runs": 4,
    "rbi": 19
  },
  {
    "name": "David Dahl",
    "team": "TEX",
    "games_played": 63,
    "hits": 43,
    "average": 210,
    "home_runs": 4,
    "rbi": 18
  },
  {
    "name": "Renato Nunez",
    "team": "DET",
    "games_played": 14,
    "hits": 10,
    "average": 189,
    "home_runs": 4,
    "rbi": 7
  },
  {
    "name": "Adalberto Mondesi",
    "team": "KC",
    "games_played": 10,
    "hits": 13,
    "average": 361,
    "home_runs": 4,
    "rbi": 9
  },
  {
    "name": "Austin Barnes",
    "team": "LAD",
    "games_played": 61,
    "hits": 35,
    "average": 217,
    "home_runs": 4,
    "rbi": 17
  },
  {
    "name": "Josh VanMeter",
    "team": "ARI",
    "games_played": 83,
    "hits": 42,
    "average": 219,
    "home_runs": 4,
    "rbi": 27
  },
  {
    "name": "Pat Valaika",
    "team": "BAL",
    "games_played": 71,
    "hits": 37,
    "average": 192,
    "home_runs": 4,
    "rbi": 21
  },
  {
    "name": "Adam Frazier",
    "team": "PIT/SD",
    "games_played": 122,
    "hits": 146,
    "average": 307,
    "home_runs": 4,
    "rbi": 34
  },
  {
    "name": "Justin Williams",
    "team": "STL",
    "games_played": 51,
    "hits": 19,
    "average": 160,
    "home_runs": 4,
    "rbi": 11
  },
  {
    "name": "Yu Chang",
    "team": "CLE",
    "games_played": 62,
    "hits": 30,
    "average": 197,
    "home_runs": 4,
    "rbi": 19
  },
  {
    "name": "Jason Martin",
    "team": "TEX",
    "games_played": 46,
    "hits": 18,
    "average": 165,
    "home_runs": 4,
    "rbi": 10
  },
  {
    "name": "Mike Tauchman",
    "team": "NYY/SF",
    "games_played": 75,
    "hits": 30,
    "average": 181,
    "home_runs": 4,
    "rbi": 15
  },
  {
    "name": "Tony Kemp",
    "team": "OAK",
    "games_played": 101,
    "hits": 59,
    "average": 247,
    "home_runs": 4,
    "rbi": 21
  },
  {
    "name": "Isan Diaz",
    "team": "MIA",
    "games_played": 70,
    "hits": 39,
    "average": 203,
    "home_runs": 4,
    "rbi": 15
  },
  {
    "name": "Kevin Newman",
    "team": "PIT",
    "games_played": 115,
    "hits": 92,
    "average": 227,
    "home_runs": 4,
    "rbi": 27
  },
  {
    "name": "Zack Collins",
    "team": "CHW",
    "games_played": 72,
    "hits": 36,
    "average": 202,
    "home_runs": 4,
    "rbi": 24
  },
  {
    "name": "Edward Olivares",
    "team": "KC",
    "games_played": 20,
    "hits": 14,
    "average": 246,
    "home_runs": 4,
    "rbi": 6
  },
  {
    "name": "Shed Long Jr.",
    "team": "SEA",
    "games_played": 34,
    "hits": 22,
    "average": 198,
    "home_runs": 4,
    "rbi": 17
  },
  {
    "name": "Keston Hiura",
    "team": "MIL",
    "games_played": 59,
    "hits": 28,
    "average": 166,
    "home_runs": 4,
    "rbi": 18
  },
  {
    "name": "Jesus Sanchez",
    "team": "MIA",
    "games_played": 31,
    "hits": 27,
    "average": 252,
    "home_runs": 4,
    "rbi": 12
  },
  {
    "name": "Daniel Johnson",
    "team": "CLE",
    "games_played": 21,
    "hits": 14,
    "average": 255,
    "home_runs": 4,
    "rbi": 5
  },
  {
    "name": "Carter Kieboom",
    "team": "WSH",
    "games_played": 28,
    "hits": 22,
    "average": 247,
    "home_runs": 4,
    "rbi": 13
  },
  {
    "name": "Jose Rojas",
    "team": "LAA",
    "games_played": 46,
    "hits": 27,
    "average": 211,
    "home_runs": 4,
    "rbi": 10
  },
  {
    "name": "Elvis Andrus",
    "team": "OAK",
    "games_played": 121,
    "hits": 96,
    "average": 230,
    "home_runs": 3,
    "rbi": 28
  },
  {
    "name": "Starlin Castro",
    "team": "WSH",
    "games_played": 87,
    "hits": 89,
    "average": 283,
    "home_runs": 3,
    "rbi": 38
  },
  {
    "name": "Leury Garcia",
    "team": "CHW",
    "games_played": 95,
    "hits": 73,
    "average": 242,
    "home_runs": 3,
    "rbi": 40
  },
  {
    "name": "Matt Carpenter",
    "team": "STL",
    "games_played": 101,
    "hits": 32,
    "average": 186,
    "home_runs": 3,
    "rbi": 21
  },
  {
    "name": "Jurickson Profar",
    "team": "SD",
    "games_played": 103,
    "hits": 66,
    "average": 243,
    "home_runs": 3,
    "rbi": 26
  },
  {
    "name": "Juan Lagares",
    "team": "LAA",
    "games_played": 82,
    "hits": 56,
    "average": 239,
    "home_runs": 3,
    "rbi": 28
  },
  {
    "name": "Kole Calhoun",
    "team": "ARI",
    "games_played": 36,
    "hits": 31,
    "average": 238,
    "home_runs": 3,
    "rbi": 10
  },
  {
    "name": "Andrelton Simmons",
    "team": "MIN",
    "games_played": 104,
    "hits": 74,
    "average": 218,
    "home_runs": 3,
    "rbi": 26
  },
  {
    "name": "Jorge Alfaro",
    "team": "MIA",
    "games_played": 79,
    "hits": 58,
    "average": 236,
    "home_runs": 3,
    "rbi": 21
  },
  {
    "name": "Joe Panik",
    "team": "TOR/MIA",
    "games_played": 73,
    "hits": 41,
    "average": 216,
    "home_runs": 3,
    "rbi": 15
  },
  {
    "name": "Sandy Leon",
    "team": "MIA",
    "games_played": 65,
    "hits": 32,
    "average": 183,
    "home_runs": 3,
    "rbi": 13
  },
  {
    "name": "Nick Ahmed",
    "team": "ARI",
    "games_played": 111,
    "hits": 81,
    "average": 219,
    "home_runs": 3,
    "rbi": 29
  },
  {
    "name": "Nomar Mazara",
    "team": "DET",
    "games_played": 50,
    "hits": 35,
    "average": 212,
    "home_runs": 3,
    "rbi": 19
  },
  {
    "name": "Rio Ruiz",
    "team": "BAL/COL",
    "games_played": 38,
    "hits": 17,
    "average": 173,
    "home_runs": 3,
    "rbi": 6
  },
  {
    "name": "Sergio Alcantara",
    "team": "CHC",
    "games_played": 58,
    "hits": 24,
    "average": 188,
    "home_runs": 3,
    "rbi": 8
  },
  {
    "name": "Wilmer Difo",
    "team": "PIT",
    "games_played": 84,
    "hits": 41,
    "average": 255,
    "home_runs": 3,
    "rbi": 16
  },
  {
    "name": "Alex Jackson",
    "team": "ATL/MIA",
    "games_played": 29,
    "hits": 10,
    "average": 120,
    "home_runs": 3,
    "rbi": 8
  },
  {
    "name": "Aramis Garcia",
    "team": "OAK",
    "games_played": 32,
    "hits": 18,
    "average": 205,
    "home_runs": 3,
    "rbi": 7
  },
  {
    "name": "Chad Pinder",
    "team": "OAK",
    "games_played": 50,
    "hits": 29,
    "average": 207,
    "home_runs": 3,
    "rbi": 13
  },
  {
    "name": "Edmundo Sosa",
    "team": "STL",
    "games_played": 85,
    "hits": 51,
    "average": 259,
    "home_runs": 3,
    "rbi": 11
  },
  {
    "name": "Michael Chavis",
    "team": "BOS/PIT",
    "games_played": 33,
    "hits": 17,
    "average": 195,
    "home_runs": 3,
    "rbi": 7
  },
  {
    "name": "Jose Marmolejos",
    "team": "SEA",
    "games_played": 31,
    "hits": 11,
    "average": 139,
    "home_runs": 3,
    "rbi": 9
  },
  {
    "name": "Jacob Nottingham",
    "team": "MIL/SEA",
    "games_played": 15,
    "hits": 6,
    "average": 150,
    "home_runs": 3,
    "rbi": 6
  },
  {
    "name": "Daz Cameron",
    "team": "DET",
    "games_played": 22,
    "hits": 14,
    "average": 194,
    "home_runs": 3,
    "rbi": 11
  },
  {
    "name": "Jake Bauers",
    "team": "CLE/SEA",
    "games_played": 91,
    "hits": 54,
    "average": 223,
    "home_runs": 3,
    "rbi": 16
  },
  {
    "name": "Andrew Stevenson",
    "team": "WSH",
    "games_played": 80,
    "hits": 32,
    "average": 215,
    "home_runs": 3,
    "rbi": 15
  },
  {
    "name": "Jason Vosler",
    "team": "SF",
    "games_played": 40,
    "hits": 13,
    "average": 183,
    "home_runs": 3,
    "rbi": 9
  },
  {
    "name": "Victor Reyes",
    "team": "DET",
    "games_played": 53,
    "hits": 33,
    "average": 220,
    "home_runs": 3,
    "rbi": 12
  },
  {
    "name": "Jose Trevino",
    "team": "TEX",
    "games_played": 67,
    "hits": 46,
    "average": 220,
    "home_runs": 3,
    "rbi": 19
  },
  {
    "name": "Tomas Nido",
    "team": "NYM",
    "games_played": 51,
    "hits": 31,
    "average": 231,
    "home_runs": 3,
    "rbi": 13
  },
  {
    "name": "Thairo Estrada",
    "team": "SF",
    "games_played": 33,
    "hits": 24,
    "average": 300,
    "home_runs": 3,
    "rbi": 14
  },
  {
    "name": "Mike Ford",
    "team": "NYY",
    "games_played": 22,
    "hits": 8,
    "average": 133,
    "home_runs": 3,
    "rbi": 5
  },
  {
    "name": "Myles Straw",
    "team": "HOU",
    "games_played": 121,
    "hits": 113,
    "average": 270,
    "home_runs": 3,
    "rbi": 41
  },
  {
    "name": "Luis Robert",
    "team": "CHW",
    "games_played": 37,
    "hits": 49,
    "average": 338,
    "home_runs": 3,
    "rbi": 15
  },
  {
    "name": "Sheldon Neuse",
    "team": "LAD",
    "games_played": 33,
    "hits": 11,
    "average": 169,
    "home_runs": 3,
    "rbi": 4
  },
  {
    "name": "Lewin Diaz",
    "team": "MIA",
    "games_played": 15,
    "hits": 4,
    "average": 133,
    "home_runs": 3,
    "rbi": 5
  },
  {
    "name": "Luis Garcia",
    "team": "WSH",
    "games_played": 35,
    "hits": 21,
    "average": 208,
    "home_runs": 3,
    "rbi": 7
  },
  {
    "name": "Jake Meyers",
    "team": "HOU",
    "games_played": 17,
    "hits": 16,
    "average": 308,
    "home_runs": 3,
    "rbi": 11
  },
  {
    "name": "Alejandro Kirk",
    "team": "TOR",
    "games_played": 35,
    "hits": 25,
    "average": 278,
    "home_runs": 3,
    "rbi": 14
  },
  {
    "name": "Yoshi Tsutsugo",
    "team": "TB/LAD/PIT",
    "games_played": 46,
    "hits": 22,
    "average": 182,
    "home_runs": 3,
    "rbi": 11
  },
  {
    "name": "Lars Nootbaar",
    "team": "STL",
    "games_played": 27,
    "hits": 16,
    "average": 250,
    "home_runs": 3,
    "rbi": 9
  },
  {
    "name": "Rene Rivera",
    "team": "CLE/WSH",
    "games_played": 25,
    "hits": 16,
    "average": 232,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Matt Joyce",
    "team": "PHI",
    "games_played": 36,
    "hits": 5,
    "average": 100,
    "home_runs": 2,
    "rbi": 6
  },
  {
    "name": "Gerardo Parra",
    "team": "WSH",
    "games_played": 43,
    "hits": 21,
    "average": 239,
    "home_runs": 2,
    "rbi": 10
  },
  {
    "name": "Josh Reddick",
    "team": "ARI",
    "games_played": 54,
    "hits": 39,
    "average": 258,
    "home_runs": 2,
    "rbi": 21
  },
  {
    "name": "Marwin Gonzalez",
    "team": "BOS",
    "games_played": 77,
    "hits": 49,
    "average": 202,
    "home_runs": 2,
    "rbi": 20
  },
  {
    "name": "Brock Holt",
    "team": "TEX",
    "games_played": 67,
    "hits": 43,
    "average": 208,
    "home_runs": 2,
    "rbi": 19
  },
  {
    "name": "Billy Hamilton",
    "team": "CHW",
    "games_played": 57,
    "hits": 24,
    "average": 226,
    "home_runs": 2,
    "rbi": 11
  },
  {
    "name": "Ryan LaMarre",
    "team": "NYY",
    "games_played": 9,
    "hits": 4,
    "average": 190,
    "home_runs": 2,
    "rbi": 4
  },
  {
    "name": "Ender Inciarte",
    "team": "ATL",
    "games_played": 52,
    "hits": 17,
    "average": 215,
    "home_runs": 2,
    "rbi": 10
  },
  {
    "name": "Khris Davis",
    "team": "TEX",
    "games_played": 22,
    "hits": 8,
    "average": 157,
    "home_runs": 2,
    "rbi": 5
  },
  {
    "name": "Adrian Houser",
    "team": "MIL",
    "games_played": 22,
    "hits": 3,
    "average": "086",
    "home_runs": 2,
    "rbi": 2
  },
  {
    "name": "Tommy La Stella",
    "team": "SF",
    "games_played": 43,
    "hits": 30,
    "average": 250,
    "home_runs": 2,
    "rbi": 11
  },
  {
    "name": "Orlando Arcia",
    "team": "MIL/ATL",
    "games_played": 21,
    "hits": 11,
    "average": 183,
    "home_runs": 2,
    "rbi": 10
  },
  {
    "name": "Erik Gonzalez",
    "team": "PIT",
    "games_played": 71,
    "hits": 51,
    "average": 232,
    "home_runs": 2,
    "rbi": 21
  },
  {
    "name": "Daniel Robertson",
    "team": "MIL",
    "games_played": 50,
    "hits": 12,
    "average": 164,
    "home_runs": 2,
    "rbi": 4
  },
  {
    "name": "Andrew Knapp",
    "team": "PHI",
    "games_played": 53,
    "hits": 19,
    "average": 153,
    "home_runs": 2,
    "rbi": 11
  },
  {
    "name": "Rob Refsnyder",
    "team": "MIN",
    "games_played": 35,
    "hits": 25,
    "average": 275,
    "home_runs": 2,
    "rbi": 10
  },
  {
    "name": "Jake Cave",
    "team": "MIN",
    "games_played": 54,
    "hits": 24,
    "average": 188,
    "home_runs": 2,
    "rbi": 5
  },
  {
    "name": "Jorge Mateo",
    "team": "SD",
    "games_played": 74,
    "hits": 39,
    "average": 267,
    "home_runs": 2,
    "rbi": 8
  },
  {
    "name": "Brian O'Grady",
    "team": "SD",
    "games_played": 31,
    "hits": 8,
    "average": 160,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Yonathan Daza",
    "team": "COL",
    "games_played": 92,
    "hits": 77,
    "average": 283,
    "home_runs": 2,
    "rbi": 29
  },
  {
    "name": "Webster Rivas",
    "team": "SD",
    "games_played": 21,
    "hits": 13,
    "average": 220,
    "home_runs": 2,
    "rbi": 4
  },
  {
    "name": "JaCoby Jones",
    "team": "DET",
    "games_played": 36,
    "hits": 17,
    "average": 170,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Victor Robles",
    "team": "WSH",
    "games_played": 103,
    "hits": 63,
    "average": 207,
    "home_runs": 2,
    "rbi": 19
  },
  {
    "name": "David Fletcher",
    "team": "LAA",
    "games_played": 122,
    "hits": 147,
    "average": 298,
    "home_runs": 2,
    "rbi": 42
  },
  {
    "name": "Oscar Mercado",
    "team": "CLE",
    "games_played": 43,
    "hits": 29,
    "average": 221,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Austin Wynns",
    "team": "BAL",
    "games_played": 28,
    "hits": 16,
    "average": 178,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Tim Locastro",
    "team": "ARI/NYY",
    "games_played": 64,
    "hits": 25,
    "average": 180,
    "home_runs": 2,
    "rbi": 7
  },
  {
    "name": "Max Schrock",
    "team": "CIN",
    "games_played": 22,
    "hits": 14,
    "average": 311,
    "home_runs": 2,
    "rbi": 7
  },
  {
    "name": "Scott Heineman",
    "team": "CIN",
    "games_played": 19,
    "hits": 3,
    "average": 100,
    "home_runs": 2,
    "rbi": 3
  },
  {
    "name": "Donovan Walton",
    "team": "SEA",
    "games_played": 23,
    "hits": 13,
    "average": 206,
    "home_runs": 2,
    "rbi": 7
  },
  {
    "name": "Luis Rengifo",
    "team": "LAA",
    "games_played": 28,
    "hits": 13,
    "average": 151,
    "home_runs": 2,
    "rbi": 6
  },
  {
    "name": "Kaai Tom",
    "team": "OAK/PIT",
    "games_played": 48,
    "hits": 15,
    "average": 139,
    "home_runs": 2,
    "rbi": 12
  },
  {
    "name": "Andres Gimenez",
    "team": "CLE",
    "games_played": 41,
    "hits": 20,
    "average": 183,
    "home_runs": 2,
    "rbi": 6
  },
  {
    "name": "Sam Haggerty",
    "team": "SEA",
    "games_played": 35,
    "hits": 16,
    "average": 186,
    "home_runs": 2,
    "rbi": 5
  },
  {
    "name": "Taylor Jones",
    "team": "HOU",
    "games_played": 34,
    "hits": 25,
    "average": 250,
    "home_runs": 2,
    "rbi": 16
  },
  {
    "name": "Luis Arraez",
    "team": "MIN",
    "games_played": 88,
    "hits": 98,
    "average": 314,
    "home_runs": 2,
    "rbi": 31
  },
  {
    "name": "Huascar Ynoa",
    "team": "ATL",
    "games_played": 11,
    "hits": 7,
    "average": 333,
    "home_runs": 2,
    "rbi": 6
  },
  {
    "name": "Santiago Espinal",
    "team": "TOR",
    "games_played": 79,
    "hits": 55,
    "average": 297,
    "home_runs": 2,
    "rbi": 15
  },
  {
    "name": "Evan White",
    "team": "SEA",
    "games_played": 30,
    "hits": 14,
    "average": 144,
    "home_runs": 2,
    "rbi": 9
  },
  {
    "name": "Danny Mendick",
    "team": "CHW",
    "games_played": 66,
    "hits": 33,
    "average": 217,
    "home_runs": 2,
    "rbi": 20
  },
  {
    "name": "Tres Barrera",
    "team": "WSH",
    "games_played": 28,
    "hits": 24,
    "average": 279,
    "home_runs": 2,
    "rbi": 10
  },
  {
    "name": "Riley Adams",
    "team": "TOR/WSH",
    "games_played": 26,
    "hits": 14,
    "average": 230,
    "home_runs": 2,
    "rbi": 7
  },
  {
    "name": "Bryan De La Cruz",
    "team": "MIA",
    "games_played": 23,
    "hits": 25,
    "average": 321,
    "home_runs": 2,
    "rbi": 8
  },
  {
    "name": "Ben Rortvedt",
    "team": "MIN",
    "games_played": 30,
    "hits": 9,
    "average": 129,
    "home_runs": 2,
    "rbi": 5
  },
  {
    "name": "Gilberto Celestino",
    "team": "MIN",
    "games_played": 23,
    "hits": 8,
    "average": 136,
    "home_runs": 2,
    "rbi": 3
  },
  {
    "name": "Nick Madrigal",
    "team": "CHW",
    "games_played": 54,
    "hits": 61,
    "average": 305,
    "home_runs": 2,
    "rbi": 21
  },
  {
    "name": "Owen Miller",
    "team": "CLE",
    "games_played": 36,
    "hits": 18,
    "average": 162,
    "home_runs": 2,
    "rbi": 8
  },
  {
    "name": "Nick Maton",
    "team": "PHI",
    "games_played": 49,
    "hits": 30,
    "average": 261,
    "home_runs": 2,
    "rbi": 13
  },
  {
    "name": "Ernie Clement",
    "team": "CLE",
    "games_played": 36,
    "hits": 25,
    "average": 227,
    "home_runs": 2,
    "rbi": 7
  },
  {
    "name": "Jarren Duran",
    "team": "BOS",
    "games_played": 27,
    "hits": 19,
    "average": 221,
    "home_runs": 2,
    "rbi": 8
  },
  {
    "name": "Jon Lester",
    "team": "WSH",
    "games_played": 19,
    "hits": 6,
    "average": 188,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Jay Bruce",
    "team": "NYY",
    "games_played": 10,
    "hits": 4,
    "average": 118,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Alcides Escobar",
    "team": "WSH",
    "games_played": 38,
    "hits": 43,
    "average": 267,
    "home_runs": 1,
    "rbi": 11
  },
  {
    "name": "Andrew Romine",
    "team": "CHC",
    "games_played": 18,
    "hits": 9,
    "average": 200,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Eric Sogard",
    "team": "CHC",
    "games_played": 78,
    "hits": 42,
    "average": 249,
    "home_runs": 1,
    "rbi": 12
  },
  {
    "name": "Steven Souza Jr.",
    "team": "LAD",
    "games_played": 13,
    "hits": 4,
    "average": 160,
    "home_runs": 1,
    "rbi": 2
  },
  {
    "name": "Jordy Mercer",
    "team": "WSH",
    "games_played": 37,
    "hits": 23,
    "average": 267,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Chris Owings",
    "team": "COL",
    "games_played": 21,
    "hits": 14,
    "average": 326,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Mason Williams",
    "team": "NYM",
    "games_played": 17,
    "hits": 7,
    "average": 212,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Tyler Anderson",
    "team": "PIT/SEA",
    "games_played": 17,
    "hits": 4,
    "average": 108,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Harold Castro",
    "team": "DET",
    "games_played": 77,
    "hits": 63,
    "average": 270,
    "home_runs": 1,
    "rbi": 24
  },
  {
    "name": "Deven Marrero",
    "team": "MIA",
    "games_played": 7,
    "hits": 3,
    "average": 333,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Travis Jankowski",
    "team": "PHI",
    "games_played": 57,
    "hits": 27,
    "average": 250,
    "home_runs": 1,
    "rbi": 9
  },
  {
    "name": "Jose Rondon",
    "team": "STL",
    "games_played": 45,
    "hits": 15,
    "average": 254,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Wyatt Mathisen",
    "team": "ARI",
    "games_played": 23,
    "hits": 5,
    "average": 119,
    "home_runs": 1,
    "rbi": 8
  },
  {
    "name": "Anthony Alford",
    "team": "PIT",
    "games_played": 17,
    "hits": 7,
    "average": 163,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Hanser Alberto",
    "team": "KC",
    "games_played": 84,
    "hits": 52,
    "average": 268,
    "home_runs": 1,
    "rbi": 19
  },
  {
    "name": "Austin Nola",
    "team": "SD",
    "games_played": 39,
    "hits": 30,
    "average": 273,
    "home_runs": 1,
    "rbi": 23
  },
  {
    "name": "Kevin Plawecki",
    "team": "BOS",
    "games_played": 48,
    "hits": 35,
    "average": 292,
    "home_runs": 1,
    "rbi": 9
  },
  {
    "name": "Ronald Guzman",
    "team": "TEX",
    "games_played": 7,
    "hits": 1,
    "average": "063",
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Reese McGuire",
    "team": "TOR",
    "games_played": 67,
    "hits": 46,
    "average": 267,
    "home_runs": 1,
    "rbi": 9
  },
  {
    "name": "Franchy Cordero",
    "team": "BOS",
    "games_played": 47,
    "hits": 24,
    "average": 189,
    "home_runs": 1,
    "rbi": 9
  },
  {
    "name": "Robel Garcia",
    "team": "HOU",
    "games_played": 45,
    "hits": 16,
    "average": 151,
    "home_runs": 1,
    "rbi": 8
  },
  {
    "name": "Matt Duffy",
    "team": "CHC",
    "games_played": 65,
    "hits": 45,
    "average": 260,
    "home_runs": 1,
    "rbi": 14
  },
  {
    "name": "Austin Dean",
    "team": "STL",
    "games_played": 22,
    "hits": 7,
    "average": 233,
    "home_runs": 1,
    "rbi": 7
  },
  {
    "name": "Domingo Leyba",
    "team": "ARI/BAL",
    "games_played": 34,
    "hits": 10,
    "average": 115,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Grayson Greiner",
    "team": "DET",
    "games_played": 30,
    "hits": 17,
    "average": 236,
    "home_runs": 1,
    "rbi": 7
  },
  {
    "name": "Cam Gallagher",
    "team": "KC",
    "games_played": 37,
    "hits": 16,
    "average": 186,
    "home_runs": 1,
    "rbi": 2
  },
  {
    "name": "Nick Gordon",
    "team": "MIN",
    "games_played": 44,
    "hits": 29,
    "average": 248,
    "home_runs": 1,
    "rbi": 8
  },
  {
    "name": "Derek Hill",
    "team": "DET",
    "games_played": 31,
    "hits": 23,
    "average": 258,
    "home_runs": 1,
    "rbi": 9
  },
  {
    "name": "Jack Flaherty",
    "team": "STL",
    "games_played": 12,
    "hits": 2,
    "average": 118,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "John Nogowski",
    "team": "STL/PIT",
    "games_played": 52,
    "hits": 30,
    "average": 233,
    "home_runs": 1,
    "rbi": 14
  },
  {
    "name": "German Marquez",
    "team": "COL",
    "games_played": 23,
    "hits": 10,
    "average": 222,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Richie Martin",
    "team": "BAL",
    "games_played": 15,
    "hits": 10,
    "average": 227,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Luis Guillorme",
    "team": "NYM",
    "games_played": 56,
    "hits": 34,
    "average": 293,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Chris Gittens",
    "team": "NYY",
    "games_played": 16,
    "hits": 4,
    "average": 111,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Andrew Velazquez",
    "team": "NYY",
    "games_played": 15,
    "hits": 10,
    "average": 244,
    "home_runs": 1,
    "rbi": 6
  },
  {
    "name": "Chadwick Tromp",
    "team": "SF",
    "games_played": 8,
    "hits": 4,
    "average": 235,
    "home_runs": 1,
    "rbi": 2
  },
  {
    "name": "Yohel Pozo",
    "team": "TEX",
    "games_played": 8,
    "hits": 6,
    "average": 194,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Skye Bolt",
    "team": "SF/OAK",
    "games_played": 25,
    "hits": 5,
    "average": 106,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Daniel Camarena",
    "team": "SD",
    "games_played": 4,
    "hits": 1,
    "average": 500,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Andrew Knizner",
    "team": "STL",
    "games_played": 45,
    "hits": 21,
    "average": 179,
    "home_runs": 1,
    "rbi": 6
  },
  {
    "name": "Michael Hermosillo",
    "team": "CHC",
    "games_played": 6,
    "hits": 2,
    "average": 143,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Nick Senzel",
    "team": "CIN",
    "games_played": 36,
    "hits": 28,
    "average": 252,
    "home_runs": 1,
    "rbi": 8
  },
  {
    "name": "Mickey Moniak",
    "team": "PHI",
    "games_played": 15,
    "hits": 3,
    "average": 103,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Hoy Park",
    "team": "NYY/PIT",
    "games_played": 19,
    "hits": 12,
    "average": 197,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Estevan Florial",
    "team": "NYY",
    "games_played": 9,
    "hits": 6,
    "average": 300,
    "home_runs": 1,
    "rbi": 2
  },
  {
    "name": "Edwin Rios",
    "team": "LAD",
    "games_played": 25,
    "hits": 4,
    "average": "078",
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Kelvin Gutierrez",
    "team": "KC/BAL",
    "games_played": 47,
    "hits": 33,
    "average": 206,
    "home_runs": 1,
    "rbi": 10
  },
  {
    "name": "Patrick Mazeika",
    "team": "NYM",
    "games_played": 23,
    "hits": 10,
    "average": 233,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Nicky Lopez",
    "team": "KC",
    "games_played": 114,
    "hits": 98,
    "average": 281,
    "home_runs": 1,
    "rbi": 32
  },
  {
    "name": "Jonathan Davis",
    "team": "TOR/NYY",
    "games_played": 64,
    "hits": 11,
    "average": 126,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Keibert Ruiz",
    "team": "LAD",
    "games_played": 6,
    "hits": 1,
    "average": 143,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Ryan McKenna",
    "team": "BAL",
    "games_played": 63,
    "hits": 21,
    "average": 208,
    "home_runs": 1,
    "rbi": 6
  },
  {
    "name": "Isaac Paredes",
    "team": "DET",
    "games_played": 14,
    "hits": 10,
    "average": 256,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Austin Allen",
    "team": "OAK",
    "games_played": 2,
    "hits": 1,
    "average": 167,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Jake Burger",
    "team": "CHW",
    "games_played": 15,
    "hits": 10,
    "average": 263,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Cristian Pache",
    "team": "ATL",
    "games_played": 22,
    "hits": 7,
    "average": 111,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Eric Lauer",
    "team": "MIL",
    "games_played": 18,
    "hits": 3,
    "average": 176,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Luke Raley",
    "team": "LAD",
    "games_played": 30,
    "hits": 10,
    "average": 169,
    "home_runs": 1,
    "rbi": 2
  },
  {
    "name": "Travis Blankenhorn",
    "team": "MIN/NYM",
    "games_played": 24,
    "hits": 4,
    "average": 174,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Luke Williams",
    "team": "PHI",
    "games_played": 51,
    "hits": 24,
    "average": 258,
    "home_runs": 1,
    "rbi": 6
  },
  {
    "name": "Emmanuel Rivera",
    "team": "KC",
    "games_played": 19,
    "hits": 18,
    "average": 286,
    "home_runs": 1,
    "rbi": 5
  },
  {
    "name": "Will Craig",
    "team": "PIT",
    "games_played": 18,
    "hits": 13,
    "average": 217,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Alan Trejo",
    "team": "COL",
    "games_played": 28,
    "hits": 10,
    "average": 217,
    "home_runs": 1,
    "rbi": 3
  },
  {
    "name": "Taylor Walls",
    "team": "TB",
    "games_played": 39,
    "hits": 24,
    "average": 212,
    "home_runs": 1,
    "rbi": 13
  },
  {
    "name": "Drew Ellis",
    "team": "ARI",
    "games_played": 20,
    "hits": 7,
    "average": 137,
    "home_runs": 1,
    "rbi": 4
  },
  {
    "name": "Jo Adell",
    "team": "LAA",
    "games_played": 20,
    "hits": 16,
    "average": 213,
    "home_runs": 1,
    "rbi": 16
  },
  {
    "name": "Ryan Weathers",
    "team": "SD",
    "games_played": 23,
    "hits": 4,
    "average": 167,
    "home_runs": 1,
    "rbi": 1
  },
  {
    "name": "Cal Raleigh",
    "team": "SEA",
    "games_played": 27,
    "hits": 15,
    "average": 179,
    "home_runs": 1,
    "rbi": 10
  },
  {
    "name": "Adam Wainwright",
    "team": "STL",
    "games_played": 26,
    "hits": 4,
    "average": "093",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Zack Greinke",
    "team": "HOU",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Scott Kazmir",
    "team": "SF",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jeff Mathis",
    "team": "ATL",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ervin Santana",
    "team": "KC",
    "games_played": 31,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Rich Hill",
    "team": "TB/NYM",
    "games_played": 9,
    "hits": 1,
    "average": "071",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cameron Maybin",
    "team": "NYM",
    "games_played": 9,
    "hits": 1,
    "average": "036",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "J.A. Happ",
    "team": "MIN",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ross Detwiler",
    "team": "MIA",
    "games_played": 43,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Johnny Cueto",
    "team": "SF",
    "games_played": 18,
    "hits": 2,
    "average": "077",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Wade Davis",
    "team": "KC",
    "games_played": 36,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "David Price",
    "team": "LAD",
    "games_played": 30,
    "hits": 4,
    "average": 308,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Clayton Kershaw",
    "team": "LAD",
    "games_played": 17,
    "hits": 7,
    "average": 233,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Carlos Carrasco",
    "team": "NYM",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Max Scherzer",
    "team": "WSH",
    "games_played": 21,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Charlie Morton",
    "team": "ATL",
    "games_played": 24,
    "hits": 5,
    "average": 111,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Tommy Hunter",
    "team": "NYM",
    "games_played": 3,
    "hits": 1,
    "average": 1,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sean Kazmar Jr.",
    "team": "ATL",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jesse Chavez",
    "team": "ATL",
    "games_played": 18,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Wade LeBlanc",
    "team": "BAL/STL",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dexter Fowler",
    "team": "LAA",
    "games_played": 7,
    "hits": 5,
    "average": 250,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Drew Butera",
    "team": "LAA",
    "games_played": 12,
    "hits": 3,
    "average": "094",
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Mark Melancon",
    "team": "SD",
    "games_played": 46,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Austin Romine",
    "team": "CHC",
    "games_played": 12,
    "hits": 4,
    "average": 154,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kenley Jansen",
    "team": "LAD",
    "games_played": 48,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jon Jay",
    "team": "LAA",
    "games_played": 5,
    "hits": 5,
    "average": 357,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Adam Ottavino",
    "team": "BOS",
    "games_played": 54,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Lobaton",
    "team": "CHC",
    "games_played": 6,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Madison Bumgarner",
    "team": "ARI",
    "games_played": 21,
    "hits": 4,
    "average": 125,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Paolo Espino",
    "team": "WSH",
    "games_played": 25,
    "hits": 1,
    "average": "059",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Todd Frazier",
    "team": "PIT",
    "games_played": 13,
    "hits": 3,
    "average": "086",
    "home_runs": 0,
    "rbi": 4
  },
  {
    "name": "Brett Anderson",
    "team": "MIL",
    "games_played": 19,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Trevor Cahill",
    "team": "PIT",
    "games_played": 8,
    "hits": 1,
    "average": 111,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alex Avila",
    "team": "WSH",
    "games_played": 24,
    "hits": 11,
    "average": 167,
    "home_runs": 0,
    "rbi": 6
  },
  {
    "name": "Jake Arrieta",
    "team": "CHC",
    "games_played": 21,
    "hits": 3,
    "average": 130,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jhoulys Chacin",
    "team": "COL",
    "games_played": 29,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jordan Zimmermann",
    "team": "MIL",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Craig Stammen",
    "team": "SD",
    "games_played": 51,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Stephen Strasburg",
    "team": "WSH",
    "games_played": 5,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jonathan Lucroy",
    "team": "WSH/ATL",
    "games_played": 7,
    "hits": 6,
    "average": 316,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Jarrod Dyson",
    "team": "KC",
    "games_played": 75,
    "hits": 26,
    "average": 217,
    "home_runs": 0,
    "rbi": 10
  },
  {
    "name": "Javy Guerra",
    "team": "WSH",
    "games_played": 6,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Chatwood",
    "team": "TOR/SF",
    "games_played": 32,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Robert Stock",
    "team": "CHC/NYM",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Lindblom",
    "team": "MIL",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mike Minor",
    "team": "KC",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Craig Kimbrel",
    "team": "CHC",
    "games_played": 49,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jay Jackson",
    "team": "SF",
    "games_played": 16,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Lance Lynn",
    "team": "CHW",
    "games_played": 23,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Hernan Perez",
    "team": "WSH",
    "games_played": 10,
    "hits": 1,
    "average": "053",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Garrett Richards",
    "team": "BOS",
    "games_played": 2,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Michael Pineda",
    "team": "MIN",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Tomlin",
    "team": "ATL",
    "games_played": 34,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ryan Lavarnway",
    "team": "CLE",
    "games_played": 4,
    "hits": 3,
    "average": 273,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Gibson",
    "team": "TEX",
    "games_played": 6,
    "hits": 2,
    "average": 133,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jordan Lyles",
    "team": "TEX",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brad Hand",
    "team": "WSH",
    "games_played": 51,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Rex Brothers",
    "team": "CHC",
    "games_played": 46,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alex Cobb",
    "team": "LAA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Wade Miley",
    "team": "CIN",
    "games_played": 23,
    "hits": 7,
    "average": 152,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Martin Perez",
    "team": "BOS",
    "games_played": 30,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Matt Moore",
    "team": "PHI",
    "games_played": 17,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Rob Brantly",
    "team": "NYY",
    "games_played": 6,
    "hits": 3,
    "average": 150,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nate Jones",
    "team": "ATL/LAD",
    "games_played": 7,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Eric Campbell",
    "team": "SEA",
    "games_played": 4,
    "hits": 3,
    "average": 273,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nathan Eovaldi",
    "team": "BOS",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mike Freeman",
    "team": "CIN",
    "games_played": 37,
    "hits": 11,
    "average": 186,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Matt Harvey",
    "team": "BAL",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jared Hoying",
    "team": "TOR",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Aaron Sanchez",
    "team": "SF",
    "games_played": 9,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jameson Taillon",
    "team": "NYY",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zack Wheeler",
    "team": "PHI",
    "games_played": 25,
    "hits": 7,
    "average": 137,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Patrick Corbin",
    "team": "WSH",
    "games_played": 21,
    "hits": 3,
    "average": "079",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Carlos Martinez",
    "team": "STL",
    "games_played": 16,
    "hits": 2,
    "average": "083",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Matt Adams",
    "team": "COL",
    "games_played": 22,
    "hits": 6,
    "average": 167,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Tony Watson",
    "team": "LAA",
    "games_played": 9,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mychal Givens",
    "team": "COL",
    "games_played": 42,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Odorizzi",
    "team": "HOU",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Liam Hendriks",
    "team": "CHW",
    "games_played": 54,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dallas Keuchel",
    "team": "CHW",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Drew Smyly",
    "team": "ATL",
    "games_played": 22,
    "hits": 3,
    "average": "083",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mike Foltynewicz",
    "team": "TEX",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Heath Hembree",
    "team": "CIN",
    "games_played": 46,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tony Wolters",
    "team": "CHC",
    "games_played": 14,
    "hits": 3,
    "average": 125,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Taijuan Walker",
    "team": "NYM",
    "games_played": 22,
    "hits": 1,
    "average": "026",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Vince Velasquez",
    "team": "PHI",
    "games_played": 20,
    "hits": 2,
    "average": "091",
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Bryan Mitchell",
    "team": "MIA",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bryan Holaday",
    "team": "ARI",
    "games_played": 10,
    "hits": 6,
    "average": 214,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Joe Kelly",
    "team": "LAD",
    "games_played": 29,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Trevor Bauer",
    "team": "LAD",
    "games_played": 14,
    "hits": 1,
    "average": "033",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Andy Burns",
    "team": "LAD",
    "games_played": 9,
    "hits": 3,
    "average": 273,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Yu Darvish",
    "team": "SD",
    "games_played": 22,
    "hits": 4,
    "average": "098",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Sonny Gray",
    "team": "CIN",
    "games_played": 18,
    "hits": 4,
    "average": 133,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dylan Bundy",
    "team": "LAA",
    "games_played": 3,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Alvarez",
    "team": "SF",
    "games_played": 48,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Miles Mikolas",
    "team": "STL",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Ramirez",
    "team": "SD",
    "games_played": 12,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Matt Barnes",
    "team": "BOS",
    "games_played": 52,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jorge Bonifacio",
    "team": "PHI",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Robbie Ray",
    "team": "TOR",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Diekman",
    "team": "OAK",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Wilfredo Tovar",
    "team": "NYM",
    "games_played": 6,
    "hits": 2,
    "average": 182,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Adrian Sanchez",
    "team": "WSH",
    "games_played": 12,
    "hits": 7,
    "average": 269,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hector Neris",
    "team": "PHI",
    "games_played": 51,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Caleb Thielbar",
    "team": "MIN",
    "games_played": 44,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "R.J. Alaniz",
    "team": "CIN",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Archie Bradley",
    "team": "PHI",
    "games_played": 37,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hyun Jin Ryu",
    "team": "TOR",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hunter Strickland",
    "team": "TB/LAA/MIL",
    "games_played": 43,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kevan Smith",
    "team": "TB/ATL",
    "games_played": 33,
    "hits": 16,
    "average": 168,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Alex Wood",
    "team": "SF",
    "games_played": 20,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Michael Wacha",
    "team": "TB",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hansel Robles",
    "team": "MIN",
    "games_played": 55,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kevin Gausman",
    "team": "SF",
    "games_played": 22,
    "hits": 8,
    "average": 211,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Andrew Heaney",
    "team": "LAA",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Eduardo Rodriguez",
    "team": "BOS",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Joe Ross",
    "team": "WSH",
    "games_played": 21,
    "hits": 8,
    "average": 250,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Max Fried",
    "team": "ATL",
    "games_played": 23,
    "hits": 13,
    "average": 342,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Albert Almora Jr.",
    "team": "NYM",
    "games_played": 39,
    "hits": 6,
    "average": 128,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chase Anderson",
    "team": "PHI",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Lucas Giolito",
    "team": "CHW",
    "games_played": 2,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sean Nolin",
    "team": "WSH",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Taylor Motter",
    "team": "COL",
    "games_played": 10,
    "hits": 2,
    "average": 143,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jimmy Nelson",
    "team": "LAD",
    "games_played": 26,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Hader",
    "team": "MIL",
    "games_played": 47,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Lance McCullers Jr.",
    "team": "HOU",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Roman Quinn",
    "team": "PHI",
    "games_played": 28,
    "hits": 9,
    "average": 173,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Chris Stratton",
    "team": "PIT",
    "games_played": 48,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ross Stripling",
    "team": "TOR",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jacob deGrom",
    "team": "NYM",
    "games_played": 15,
    "hits": 12,
    "average": 364,
    "home_runs": 0,
    "rbi": 6
  },
  {
    "name": "Matt Wisler",
    "team": "SF/TB",
    "games_played": 18,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zach Eflin",
    "team": "PHI",
    "games_played": 17,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Lucas Sims",
    "team": "CIN",
    "games_played": 30,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Berrios",
    "team": "MIN",
    "games_played": 25,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chase De Jong",
    "team": "PIT",
    "games_played": 10,
    "hits": 1,
    "average": "083",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Marcus Stroman",
    "team": "NYM",
    "games_played": 24,
    "hits": 5,
    "average": 122,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Clay Holmes",
    "team": "PIT/NYY",
    "games_played": 42,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Duane Underwood Jr.",
    "team": "PIT",
    "games_played": 37,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "John Andreoli",
    "team": "SD",
    "games_played": 7,
    "hits": 1,
    "average": 167,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Merrill Kelly",
    "team": "ARI",
    "games_played": 24,
    "hits": 3,
    "average": "071",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jake Hager",
    "team": "NYM/ARI",
    "games_played": 14,
    "hits": 3,
    "average": 115,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Ildemaro Vargas",
    "team": "CHC/PIT/ARI",
    "games_played": 25,
    "hits": 7,
    "average": 137,
    "home_runs": 0,
    "rbi": 6
  },
  {
    "name": "Jerad Eickhoff",
    "team": "NYM",
    "games_played": 6,
    "hits": 2,
    "average": 400,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Steven Matz",
    "team": "TOR",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chris Bassitt",
    "team": "OAK",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Marco Gonzales",
    "team": "SEA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Tropeano",
    "team": "SF/NYM",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Hendricks",
    "team": "CHC",
    "games_played": 25,
    "hits": 5,
    "average": 111,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Anthony DeSclafani",
    "team": "SF",
    "games_played": 26,
    "hits": 1,
    "average": "024",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Tyler Glasnow",
    "team": "TB",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Daniel Norris",
    "team": "DET",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jon Gray",
    "team": "COL",
    "games_played": 24,
    "hits": 4,
    "average": 103,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Alex Reyes",
    "team": "STL",
    "games_played": 50,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chance Sisco",
    "team": "BAL/NYM",
    "games_played": 25,
    "hits": 11,
    "average": 159,
    "home_runs": 0,
    "rbi": 4
  },
  {
    "name": "Kohl Stewart",
    "team": "CHC",
    "games_played": 4,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Julio Urias",
    "team": "LAD",
    "games_played": 23,
    "hits": 9,
    "average": 191,
    "home_runs": 0,
    "rbi": 8
  },
  {
    "name": "Devin Williams",
    "team": "MIL",
    "games_played": 50,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sean Manaea",
    "team": "OAK",
    "games_played": 2,
    "hits": 2,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Frankie Montas",
    "team": "OAK",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Michael Lorenzen",
    "team": "CIN",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dustin Garneau",
    "team": "DET",
    "games_played": 4,
    "hits": 3,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Williams",
    "team": "CHW",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luke Maile",
    "team": "MIL",
    "games_played": 8,
    "hits": 4,
    "average": 211,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jefry Rodriguez",
    "team": "WSH",
    "games_played": 14,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ryne Stanek",
    "team": "HOU",
    "games_played": 57,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Trevor Williams",
    "team": "CHC",
    "games_played": 16,
    "hits": 4,
    "average": 211,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kyle Ryan",
    "team": "CHC",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ryne Harper",
    "team": "WSH",
    "games_played": 20,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Scott Schebler",
    "team": "LAA",
    "games_played": 14,
    "hits": 5,
    "average": 147,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dillon Thomas",
    "team": "SEA",
    "games_played": 4,
    "hits": 1,
    "average": 111,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Seth Frankoff",
    "team": "ARI",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Breyvic Valera",
    "team": "TOR",
    "games_played": 19,
    "hits": 9,
    "average": 220,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Chi Chi Gonzalez",
    "team": "COL",
    "games_played": 20,
    "hits": 5,
    "average": 167,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Patrick Kivlehan",
    "team": "SD",
    "games_played": 5,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Emilio Pagan",
    "team": "SD",
    "games_played": 52,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jimmie Sherfy",
    "team": "SF/LAD",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dan Winkler",
    "team": "CHC",
    "games_played": 45,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Richard Bleier",
    "team": "MIA",
    "games_played": 49,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Humberto Arteaga",
    "team": "WSH",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "JT Riddle",
    "team": "MIN",
    "games_played": 4,
    "hits": 2,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kendall Graveman",
    "team": "SEA",
    "games_played": 39,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Amir Garrett",
    "team": "CIN",
    "games_played": 49,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Domingo German",
    "team": "NYY",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Duffey",
    "team": "MIN",
    "games_played": 49,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Adrian Sampson",
    "team": "CHC",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chad Wallach",
    "team": "MIA",
    "games_played": 22,
    "hits": 12,
    "average": 200,
    "home_runs": 0,
    "rbi": 6
  },
  {
    "name": "Carlos Rodon",
    "team": "CHW",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Aaron Nola",
    "team": "PHI",
    "games_played": 24,
    "hits": 6,
    "average": 158,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Steven Okert",
    "team": "MIA",
    "games_played": 18,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mitch Keller",
    "team": "PIT",
    "games_played": 15,
    "hits": 2,
    "average": 111,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ryan Yarbrough",
    "team": "TB",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Johan Camargo",
    "team": "ATL",
    "games_played": 15,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jacob Wilson",
    "team": "OAK/HOU",
    "games_played": 12,
    "hits": 3,
    "average": 150,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Blake Snell",
    "team": "SD",
    "games_played": 21,
    "hits": 4,
    "average": 138,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Antonio Senzatela",
    "team": "COL",
    "games_played": 20,
    "hits": 1,
    "average": "033",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Miguel Diaz",
    "team": "SD",
    "games_played": 23,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sean Reid-Foley",
    "team": "NYM",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Michael Kopech",
    "team": "CHW",
    "games_played": 31,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luke Weaver",
    "team": "ARI",
    "games_played": 8,
    "hits": 2,
    "average": 154,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Tyler Webb",
    "team": "STL",
    "games_played": 21,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cole Tucker",
    "team": "PIT",
    "games_played": 13,
    "hits": 3,
    "average": 143,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Touki Toussaint",
    "team": "ATL",
    "games_played": 6,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Erick Fedde",
    "team": "WSH",
    "games_played": 21,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Derek Fisher",
    "team": "MIL",
    "games_played": 4,
    "hits": 2,
    "average": 250,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kyle McGowin",
    "team": "WSH",
    "games_played": 23,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Magneuris Sierra",
    "team": "MIA",
    "games_played": 98,
    "hits": 44,
    "average": 243,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Justus Sheffield",
    "team": "SEA",
    "games_played": 1,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jakson Reetz",
    "team": "WSH",
    "games_played": 2,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Miguel Castro",
    "team": "NYM",
    "games_played": 53,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zach Davies",
    "team": "CHC",
    "games_played": 26,
    "hits": 5,
    "average": 172,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Jose De Leon",
    "team": "CIN",
    "games_played": 9,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jorge Lopez",
    "team": "BAL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Freeland",
    "team": "COL",
    "games_played": 16,
    "hits": 3,
    "average": 130,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Jeff Hoffman",
    "team": "CIN",
    "games_played": 19,
    "hits": 2,
    "average": 143,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Monte Harrison",
    "team": "MIA",
    "games_played": 9,
    "hits": 2,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alex Blandino",
    "team": "CIN",
    "games_played": 43,
    "hits": 14,
    "average": 200,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Sean Newcomb",
    "team": "ATL",
    "games_played": 23,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Steven Brault",
    "team": "PIT",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Wade",
    "team": "NYY",
    "games_played": 79,
    "hits": 30,
    "average": 278,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Tim Lopes",
    "team": "MIL",
    "games_played": 5,
    "hits": 1,
    "average": 125,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Max Moroff",
    "team": "STL",
    "games_played": 6,
    "hits": 1,
    "average": "063",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Anthony Bemboom",
    "team": "LAA",
    "games_played": 8,
    "hits": 6,
    "average": 222,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Jake Reed",
    "team": "LAD/NYM",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Greg Allen",
    "team": "NYY",
    "games_played": 15,
    "hits": 10,
    "average": 270,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Ivan Castillo",
    "team": "SD",
    "games_played": 3,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "David Hess",
    "team": "MIA",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mark Payton",
    "team": "CIN",
    "games_played": 24,
    "hits": 4,
    "average": 182,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Matthew Boyd",
    "team": "DET",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Anthony Banda",
    "team": "NYM/PIT",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dustin Fowler",
    "team": "PIT",
    "games_played": 18,
    "hits": 7,
    "average": 171,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Zack Godley",
    "team": "MIL",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luis Cessa",
    "team": "NYY/CIN",
    "games_played": 40,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "John Gant",
    "team": "STL",
    "games_played": 22,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Juan Minaya",
    "team": "MIN",
    "games_played": 16,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Joe Musgrove",
    "team": "SD",
    "games_played": 29,
    "hits": 3,
    "average": "075",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Sal Romano",
    "team": "CIN/NYY/MIL",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alec Mills",
    "team": "CHC",
    "games_played": 25,
    "hits": 1,
    "average": "048",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Shawn Morimando",
    "team": "MIA",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Faria",
    "team": "ARI",
    "games_played": 17,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Robert Gsellman",
    "team": "NYM",
    "games_played": 14,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Seth Lugo",
    "team": "NYM",
    "games_played": 28,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kenta Maeda",
    "team": "MIN",
    "games_played": 4,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Austin Gomber",
    "team": "COL",
    "games_played": 21,
    "hits": 3,
    "average": "097",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Daniel Ponce de Leon",
    "team": "STL",
    "games_played": 17,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sam Selman",
    "team": "SF/LAA",
    "games_played": 7,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Carson Fulmer",
    "team": "CIN",
    "games_played": 19,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "James Kaprielian",
    "team": "OAK",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dylan Cease",
    "team": "CHW",
    "games_played": 26,
    "hits": 3,
    "average": 375,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Leody Taveras",
    "team": "TEX",
    "games_played": 16,
    "hits": 4,
    "average": "078",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Triston McKenzie",
    "team": "CLE",
    "games_played": 1,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jaime Barria",
    "team": "LAA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Jewell",
    "team": "CHC",
    "games_played": 9,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jahmai Jones",
    "team": "BAL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jonathan Arauz",
    "team": "BOS",
    "games_played": 16,
    "hits": 6,
    "average": 207,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Alex Young",
    "team": "ARI/CLE",
    "games_played": 29,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Mahle",
    "team": "CIN",
    "games_played": 26,
    "hits": 2,
    "average": "048",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kolby Allard",
    "team": "TEX",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Joseph Odom",
    "team": "TB",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Phil Bickford",
    "team": "MIL/LAD",
    "games_played": 40,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cody Ponce",
    "team": "PIT",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kevin Padlo",
    "team": "TB",
    "games_played": 9,
    "hits": 1,
    "average": "083",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Junior Fernandez",
    "team": "STL",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chad Kuhl",
    "team": "PIT",
    "games_played": 15,
    "hits": 1,
    "average": "048",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Logan Allen",
    "team": "CLE",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Braden Bishop",
    "team": "SEA",
    "games_played": 8,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Neidert",
    "team": "MIA",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Austin Voth",
    "team": "WSH",
    "games_played": 32,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jordan Holloway",
    "team": "MIA",
    "games_played": 12,
    "hits": 1,
    "average": 100,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Stevie Wilkerson",
    "team": "BAL",
    "games_played": 30,
    "hits": 12,
    "average": 167,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Luis Castillo",
    "team": "CIN",
    "games_played": 23,
    "hits": 7,
    "average": 184,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Johneshwy Fargas",
    "team": "NYM/CHC",
    "games_played": 20,
    "hits": 13,
    "average": 277,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Sandy Alcantara",
    "team": "MIA",
    "games_played": 24,
    "hits": 2,
    "average": "047",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kean Wong",
    "team": "LAA",
    "games_played": 19,
    "hits": 7,
    "average": 175,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Ryan McBroom",
    "team": "KC",
    "games_played": 7,
    "hits": 2,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Scott Kingery",
    "team": "PHI",
    "games_played": 15,
    "hits": 1,
    "average": "053",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Taylor Clarke",
    "team": "ARI",
    "games_played": 38,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Woodford",
    "team": "STL",
    "games_played": 18,
    "hits": 1,
    "average": 111,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brad Keller",
    "team": "KC",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Pablo Reyes",
    "team": "MIL",
    "games_played": 38,
    "hits": 12,
    "average": 214,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Luis Marte",
    "team": "MIA",
    "games_played": 4,
    "hits": 1,
    "average": 167,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Urquidy",
    "team": "HOU",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Garrett Stubbs",
    "team": "HOU",
    "games_played": 9,
    "hits": 4,
    "average": 182,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Tim Mayza",
    "team": "TOR",
    "games_played": 47,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Adam Cimber",
    "team": "MIA/TOR",
    "games_played": 55,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Trey Amburgey",
    "team": "NYY",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chris Paddack",
    "team": "SD",
    "games_played": 20,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brent Suter",
    "team": "MIL",
    "games_played": 49,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jake Brentz",
    "team": "KC",
    "games_played": 6,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Taylor Gushue",
    "team": "CHC",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Yefry Ramirez",
    "team": "LAD",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zack Littell",
    "team": "SF",
    "games_played": 42,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Ruiz",
    "team": "CHW",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jakob Junis",
    "team": "KC",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Austin Pruitt",
    "team": "HOU",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Yency Almonte",
    "team": "COL",
    "games_played": 36,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Chris Flexen",
    "team": "SEA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Pivetta",
    "team": "BOS",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dane Dunning",
    "team": "TEX",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Caleb Smith",
    "team": "ARI",
    "games_played": 34,
    "hits": 1,
    "average": "050",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hoby Milner",
    "team": "MIL",
    "games_played": 14,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cionel Perez",
    "team": "CIN",
    "games_played": 21,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Vladimir Gutierrez",
    "team": "CIN",
    "games_played": 15,
    "hits": 3,
    "average": 107,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Ryan Castellani",
    "team": "COL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dinelson Lamet",
    "team": "SD",
    "games_played": 10,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Phil Maton",
    "team": "CLE/HOU",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dillon Peters",
    "team": "PIT",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Taylor",
    "team": "BOS",
    "games_played": 52,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Matt Thaiss",
    "team": "LAA",
    "games_played": 2,
    "hits": 1,
    "average": 167,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Sborz",
    "team": "TEX",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Edgar Santana",
    "team": "ATL",
    "games_played": 33,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Hunter Owen",
    "team": "PIT",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jordan Romano",
    "team": "TOR",
    "games_played": 46,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tommy Nance",
    "team": "CHC",
    "games_played": 19,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Lane Thomas",
    "team": "STL/WSH",
    "games_played": 39,
    "hits": 15,
    "average": 224,
    "home_runs": 0,
    "rbi": 4
  },
  {
    "name": "Garrett Cleavinger",
    "team": "LAD",
    "games_played": 21,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Palacios",
    "team": "TOR",
    "games_played": 11,
    "hits": 7,
    "average": 219,
    "home_runs": 0,
    "rbi": 4
  },
  {
    "name": "Nestor Cortes Jr.",
    "team": "NYY",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Martini",
    "team": "CHC",
    "games_played": 12,
    "hits": 1,
    "average": "083",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kyle Finnegan",
    "team": "WSH",
    "games_played": 53,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Framber Valdez",
    "team": "HOU",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Trent Thornton",
    "team": "TOR",
    "games_played": 34,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brandon Woodruff",
    "team": "MIL",
    "games_played": 23,
    "hits": 3,
    "average": "073",
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Ali Sanchez",
    "team": "STL",
    "games_played": 1,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Yonny Hernandez",
    "team": "TEX",
    "games_played": 15,
    "hits": 13,
    "average": 255,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Anderson Tejeda",
    "team": "TEX",
    "games_played": 5,
    "hits": 1,
    "average": "063",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Evan Phillips",
    "team": "TB/LAD",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "John Curtiss",
    "team": "MIA",
    "games_played": 34,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jordan Montgomery",
    "team": "NYY",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alex De Goti",
    "team": "HOU",
    "games_played": 2,
    "hits": 2,
    "average": 333,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "David Bednar",
    "team": "PIT",
    "games_played": 50,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Corey Ray",
    "team": "MIL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Justin Topa",
    "team": "MIL",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tony Gonsolin",
    "team": "LAD",
    "games_played": 11,
    "hits": 2,
    "average": 167,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ryan Hendrix",
    "team": "CIN",
    "games_played": 33,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "John Brebbia",
    "team": "SF",
    "games_played": 13,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Vimael Machin",
    "team": "OAK",
    "games_played": 13,
    "hits": 3,
    "average": 107,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "P.J. Higgins",
    "team": "CHC",
    "games_played": 9,
    "hits": 1,
    "average": "043",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Walker Buehler",
    "team": "LAD",
    "games_played": 25,
    "hits": 7,
    "average": 123,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Mitch White",
    "team": "LAD",
    "games_played": 16,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Nevin",
    "team": "BAL",
    "games_played": 2,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Mario Feliciano",
    "team": "MIL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Trevor Rogers",
    "team": "MIA",
    "games_played": 20,
    "hits": 2,
    "average": "057",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Wright",
    "team": "ATL",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Paul Campbell",
    "team": "MIA",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jesus Luzardo",
    "team": "OAK/MIA",
    "games_played": 18,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Pablo Lopez",
    "team": "MIA",
    "games_played": 19,
    "hits": 2,
    "average": "061",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Garrett Whitlock",
    "team": "BOS",
    "games_played": 3,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "JD Hammer",
    "team": "PHI",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Drew Smith",
    "team": "NYM",
    "games_played": 28,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Stephen Nogosek",
    "team": "NYM",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Andres Machado",
    "team": "WSH",
    "games_played": 20,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Dennis Santana",
    "team": "LAD/TEX",
    "games_played": 14,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Adbert Alzolay",
    "team": "CHC",
    "games_played": 21,
    "hits": 2,
    "average": "067",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Corey Oswalt",
    "team": "NYM",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ranger Suarez",
    "team": "PHI",
    "games_played": 28,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Freddy Peralta",
    "team": "MIL",
    "games_played": 24,
    "hits": 3,
    "average": "079",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Devers",
    "team": "MIA",
    "games_played": 21,
    "hits": 10,
    "average": 244,
    "home_runs": 0,
    "rbi": 5
  },
  {
    "name": "Elieser Hernandez",
    "team": "MIA",
    "games_played": 4,
    "hits": 1,
    "average": 167,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cole Irvin",
    "team": "OAK",
    "games_played": 2,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Cal Quantrill",
    "team": "CLE",
    "games_played": 3,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Joey Lucchesi",
    "team": "NYM",
    "games_played": 10,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Corbin Burnes",
    "team": "MIL",
    "games_played": 23,
    "hits": 7,
    "average": 156,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Jordan Yamamoto",
    "team": "NYM",
    "games_played": 2,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Taylor Widener",
    "team": "ARI",
    "games_played": 11,
    "hits": 1,
    "average": "067",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zac Gallen",
    "team": "ARI",
    "games_played": 16,
    "hits": 4,
    "average": 167,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Trevor Richards",
    "team": "TB/MIL/TOR",
    "games_played": 15,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "John Means",
    "team": "BAL",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Troy Stokes Jr.",
    "team": "PIT",
    "games_played": 8,
    "hits": 2,
    "average": 111,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Connor Wong",
    "team": "BOS",
    "games_played": 6,
    "hits": 4,
    "average": 308,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jacob Robson",
    "team": "DET",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Seth Elledge",
    "team": "STL",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Stuart Fairchild",
    "team": "ARI",
    "games_played": 10,
    "hits": 1,
    "average": "091",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Riley Smith",
    "team": "ARI",
    "games_played": 24,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jacob Webb",
    "team": "ATL",
    "games_played": 18,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Darren McCaughan",
    "team": "SEA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "J.C. Mejia",
    "team": "CLE",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Greg Deichmann",
    "team": "CHC",
    "games_played": 7,
    "hits": 4,
    "average": 174,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kevin Smith",
    "team": "TOR",
    "games_played": 4,
    "hits": 1,
    "average": 100,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Vidal Brujan",
    "team": "TB",
    "games_played": 10,
    "hits": 2,
    "average": "077",
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Luis Gonzalez",
    "team": "CHW",
    "games_played": 6,
    "hits": 2,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ronnie Dawson",
    "team": "HOU",
    "games_played": 3,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Heath",
    "team": "ARI",
    "games_played": 20,
    "hits": 5,
    "average": 143,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Luis Campusano",
    "team": "SD",
    "games_played": 11,
    "hits": 3,
    "average": "088",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Jared Oliva",
    "team": "PIT",
    "games_played": 20,
    "hits": 7,
    "average": 175,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Tyler Gilbert",
    "team": "ARI",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brian Miller",
    "team": "MIA",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Khalil Lee",
    "team": "NYM",
    "games_played": 11,
    "hits": 1,
    "average": "056",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Zach Thompson",
    "team": "MIA",
    "games_played": 12,
    "hits": 1,
    "average": "077",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brandon Marsh",
    "team": "LAA",
    "games_played": 36,
    "hits": 29,
    "average": 250,
    "home_runs": 0,
    "rbi": 8
  },
  {
    "name": "Rafael Marchan",
    "team": "PHI",
    "games_played": 11,
    "hits": 7,
    "average": 304,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Shane Bieber",
    "team": "CLE",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Ian Anderson",
    "team": "ATL",
    "games_played": 16,
    "hits": 2,
    "average": "077",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Adrian Morejon",
    "team": "SD",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jon Duplantier",
    "team": "ARI",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "David Peterson",
    "team": "NYM",
    "games_played": 14,
    "hits": 1,
    "average": "063",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bryse Wilson",
    "team": "ATL/PIT",
    "games_played": 10,
    "hits": 1,
    "average": "067",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Aaron Civale",
    "team": "CLE",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tucupita Marcano",
    "team": "SD",
    "games_played": 25,
    "hits": 8,
    "average": 182,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Dustin May",
    "team": "LAD",
    "games_played": 3,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tony Santillan",
    "team": "CIN",
    "games_played": 14,
    "hits": 1,
    "average": 143,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Barrero",
    "team": "CIN",
    "games_played": 5,
    "hits": 2,
    "average": 222,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Wil Crowe",
    "team": "PIT",
    "games_played": 19,
    "hits": 1,
    "average": "038",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Brusdar Graterol",
    "team": "LAD",
    "games_played": 19,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Braxton Garrett",
    "team": "MIA",
    "games_played": 8,
    "hits": 2,
    "average": 182,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Thomas Szapucki",
    "team": "NYM",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Patrick Sandoval",
    "team": "LAA",
    "games_played": 2,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Jose Suarez",
    "team": "LAA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Justin Dunn",
    "team": "SEA",
    "games_played": 2,
    "hits": 1,
    "average": 333,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Michael Rucker",
    "team": "CHC",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Justin Steele",
    "team": "CHC",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Corbin Martin",
    "team": "ARI",
    "games_played": 5,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Muller",
    "team": "ATL",
    "games_played": 9,
    "hits": 1,
    "average": "091",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Griffin Canning",
    "team": "LAA",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tucker Davidson",
    "team": "ATL",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Spencer Howard",
    "team": "PHI/TEX",
    "games_played": 10,
    "hits": 2,
    "average": 333,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Adam Haseley",
    "team": "PHI",
    "games_played": 9,
    "hits": 4,
    "average": 190,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Keegan Thompson",
    "team": "CHC",
    "games_played": 26,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Zach Pop",
    "team": "MIA",
    "games_played": 35,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bruce Zimmermann",
    "team": "BAL",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Yennsy Diaz",
    "team": "NYM",
    "games_played": 17,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josiah Gray",
    "team": "LAD/WSH",
    "games_played": 6,
    "hits": 1,
    "average": 111,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Casey Mize",
    "team": "DET",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Joey Bart",
    "team": "SF",
    "games_played": 2,
    "hits": 2,
    "average": 333,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Kris Bubic",
    "team": "KC",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Logan Webb",
    "team": "SF",
    "games_played": 18,
    "hits": 2,
    "average": "071",
    "home_runs": 0,
    "rbi": 4
  },
  {
    "name": "Nico Hoerner",
    "team": "CHC",
    "games_played": 39,
    "hits": 42,
    "average": 313,
    "home_runs": 0,
    "rbi": 14
  },
  {
    "name": "Sam Hentges",
    "team": "CLE",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Carlos Hernandez",
    "team": "KC",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luis Barrera",
    "team": "OAK",
    "games_played": 4,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kyle Isbel",
    "team": "KC",
    "games_played": 12,
    "hits": 9,
    "average": 265,
    "home_runs": 0,
    "rbi": 3
  },
  {
    "name": "Matt Peacock",
    "team": "ARI",
    "games_played": 30,
    "hits": 4,
    "average": 250,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Edwin Uceta",
    "team": "LAD",
    "games_played": 14,
    "hits": 1,
    "average": 200,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Eli Morgan",
    "team": "CLE",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Miguel Yajure",
    "team": "PIT",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Manuel Rodriguez",
    "team": "CHC",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Rony Garcia",
    "team": "DET",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Kwang Hyun Kim",
    "team": "STL",
    "games_played": 18,
    "hits": 3,
    "average": 120,
    "home_runs": 0,
    "rbi": 2
  },
  {
    "name": "Shogo Akiyama",
    "team": "CIN",
    "games_played": 78,
    "hits": 31,
    "average": 204,
    "home_runs": 0,
    "rbi": 12
  },
  {
    "name": "Alek Manoah",
    "team": "TOR",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Drew Rasmussen",
    "team": "MIL/TB",
    "games_played": 18,
    "hits": 1,
    "average": 250,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tyler Zuber",
    "team": "KC",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Charlie Barnes",
    "team": "MIN",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Sam Clay",
    "team": "WSH",
    "games_played": 42,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Griffin Jax",
    "team": "MIN",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Josh Fleming",
    "team": "TB",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Nick Mears",
    "team": "PIT",
    "games_played": 14,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Daniel Castano",
    "team": "MIA",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alex Vesia",
    "team": "LAD",
    "games_played": 27,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Justin Bruihl",
    "team": "LAD",
    "games_played": 7,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Alec Bettinger",
    "team": "MIL",
    "games_played": 4,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bailey Ober",
    "team": "MIN",
    "games_played": 1,
    "hits": 1,
    "average": 500,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Tylor Megill",
    "team": "NYM",
    "games_played": 12,
    "hits": 4,
    "average": 235,
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Caleb Baragar",
    "team": "SF",
    "games_played": 21,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Reiss Knehr",
    "team": "SD",
    "games_played": 8,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cody Wilson",
    "team": "WSH",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Reid Detmers",
    "team": "LAA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Andre Jackson",
    "team": "LAD",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luis Garcia",
    "team": "HOU",
    "games_played": 2,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Max Kranick",
    "team": "PIT",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bailey Falter",
    "team": "PHI",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cody Poteet",
    "team": "MIA",
    "games_played": 7,
    "hits": 1,
    "average": 100,
    "home_runs": 0,
    "rbi": 1
  },
  {
    "name": "Reid Detmers",
    "team": "LAA",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Andre Jackson",
    "team": "LAD",
    "games_played": 1,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Luis Garcia",
    "team": "HOU",
    "games_played": 24,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Max Kranick",
    "team": "PIT",
    "games_played": 5,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Bailey Falter",
    "team": "PHI",
    "games_played": 11,
    "hits": 0,
    "average": "000",
    "home_runs": 0,
    "rbi": 0
  },
  {
    "name": "Cody Poteet",
    "team": "MIA",
    "games_played": 7,
    "hits": 1,
    "average": 100,
    "home_runs": 0,
    "rbi": 1
  }
]

const batter = () => Batters.bulkCreate(batterSeed);

module.exports = batter;