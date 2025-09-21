require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Middleware
const corsOptions = {
	origin: ["http://localhost:3000", "https://big-chidd.vercel.app"],
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", routes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
