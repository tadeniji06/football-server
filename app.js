require("dotenv").config();
const express = require("express");
const cron = require("node-cron");
const syncMatches = require("./utils/syncMatches");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Middleware
const corsOptions = {
	origin: ["http://localhost:3000", "https://big-chidd.vercel.app"],
	credentials: true,
};

// Run every 6 hours
cron.schedule("0 */6 * * *", () => {
	syncMatches();
});
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", routes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
