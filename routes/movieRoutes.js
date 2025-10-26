const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const validateMovie = require("../middleware/validateMovie");

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", validateMovie, movieController.createMovie);
router.put("/:id", validateMovie, movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
