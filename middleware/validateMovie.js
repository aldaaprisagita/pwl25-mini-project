const validateMovie = (req, res, next) => {
  const { title, genre, director, release_year, rating } = req.body;
  if (!title || !genre || !director || !release_year || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
module.exports = validateMovie;
