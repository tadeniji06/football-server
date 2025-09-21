const axios = require("axios");

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

const apiClient = axios.create({
	baseURL: API_URL,
	headers: { "X-Auth-Token": API_TOKEN },
});

// AREAS
exports.getAreas = async (req, res) => {
	try {
		const { data } = await apiClient.get("/areas");
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getAreaById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/areas/${id}`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// COMPETITIONS
exports.getCompetitions = async (req, res) => {
	try {
		const { data } = await apiClient.get("/competitions");
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getCompetitionById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/competitions/${id}`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getCompetitionStandings = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(
			`/competitions/${id}/standings`
		);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getCompetitionMatches = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(
			`/competitions/${id}/matches`
		);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getCompetitionTeams = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/competitions/${id}/teams`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getCompetitionScorers = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(
			`/competitions/${id}/scorers`
		);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// TEAMS
exports.getTeamById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/teams/${id}`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getTeamMatches = async (req, res) => {
	try {
		const { id } = req.params;
		const { status, season } = req.query;
		const { data } = await apiClient.get(`/teams/${id}/matches`, {
			params: { status, season },
		});
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// MATCHES
exports.getMatches = async (req, res) => {
	try {
		const { dateFrom, dateTo, competitions, status } = req.query;
		const { data } = await apiClient.get("/matches", {
			params: { dateFrom, dateTo, competitions, status },
		});
		res.json(data);
	} catch (err) {
		if (err.response) {
			console.error(
				"Football API Error:",
				err.response.status,
				err.response.data
			);
			res.status(err.response.status).json(err.response.data);
		} else {
			console.error("Server Error:", err.message);
			res.status(500).json({ error: err.message });
		}
	}
};

exports.getMatchById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/matches/${id}`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getHead2Head = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/matches/${id}/head2head`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// PERSONS
exports.getPersonById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await apiClient.get(`/persons/${id}`);
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
exports.getPersonMatches = async (req, res) => {
	try {
		const { id } = req.params;
		const { status, competitions } = req.query;
		const { data } = await apiClient.get(`/persons/${id}/matches`, {
			params: { status, competitions },
		});
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
