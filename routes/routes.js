const express = require("express");
const {
  getAreas,
  getAreaById,
  getCompetitions,
  getCompetitionById,
  getCompetitionStandings,
  getCompetitionMatches,
  getCompetitionTeams,
  getCompetitionScorers,
  getTeamById,
  getTeamMatches,
  getMatchById,
  getMatches,
  getHead2Head,
  getPersonById,
  getPersonMatches,
} = require('../controllers/footballControllers');

const router = express.Router();

// AREAS
router.get("/areas", getAreas);
router.get("/areas/:id", getAreaById);

// COMPETITIONS
router.get("/competitions", getCompetitions);
router.get("/competitions/:id", getCompetitionById);
router.get("/competitions/:id/standings", getCompetitionStandings);
router.get("/competitions/:id/matches", getCompetitionMatches);
router.get("/competitions/:id/teams", getCompetitionTeams);
router.get("/competitions/:id/scorers", getCompetitionScorers);

// TEAMS
router.get("/teams/:id", getTeamById);
router.get("/teams/:id/matches", getTeamMatches);

// MATCHES
router.get("/matches", getMatches);
router.get("/matches/:id", getMatchById);
router.get("/matches/:id/head2head", getHead2Head);

// PERSONS
router.get("/persons/:id", getPersonById);
router.get("/persons/:id/matches", getPersonMatches);

module.exports = router;
