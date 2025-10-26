const Movie = require("../models/movieModel");

exports.getAllMovies = (req, res, next) => {
  Movie.getAll((err, result) => {
    if (err) return next(err);
    res.json(result);
  });
};

exports.getMovieById = (req, res, next) => {
  Movie.getById(req.params.id, (err, result) => {
    if (err) return next(err);
    if (result.length === 0) return res.status(404).json({ message: "Movie not found" });
    res.json(result[0]);
  });
};

exports.createMovie = (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    director: req.body.director,
    release_year: req.body.release_year,
    rating: req.body.rating,
    created_at: new Date(),
  };
  Movie.create(newMovie, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ message: "Movie added successfully", id: result.insertId });
  });
};

exports.updateMovie = (req, res, next) => {
  Movie.update(req.params.id, req.body, (err, result) => {
    if (err) return next(err);
    res.json({ message: "Movie updated successfully" });
  });
};

exports.deleteMovie = (req, res, next) => {
  Movie.delete(req.params.id, (err, result) => {
    if (err) return next(err);
    res.json({ message: "Movie deleted successfully" });
  });
};
