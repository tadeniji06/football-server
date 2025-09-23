const client = require("./sanityClient");
const axios = require("axios");

async function syncMatches() {
  try {
    const { data } = await axios.get("http://localhost:5000/api/matches");

    const matches = data.matches || data; 

    for (const match of matches) {
      await client.createOrReplace({
        _id: `match-${match.id}`, 
        _type: "match",
        matchId: match.id.toString(),
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        utcDate: match.utcDate,
        status: match.status || "SCHEDULED",
      });
    }

    console.log("Matches synced to Sanity");
  } catch (err) {
    console.error("Error syncing matches:", err.message);
  }
}

module.exports = syncMatches;
