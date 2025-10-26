require("dotenv").config();
const express = require("express");
const log = require("./middleware/log");
const errorHandler = require("./middleware/errorHandler");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
app.use(express.json());
app.use(log);

app.get("/", (req, res) => {
  res.send("Welcome to Movies API");
});

app.use("/movies", movieRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
