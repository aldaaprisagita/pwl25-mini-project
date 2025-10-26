const db = require("../config/db");

const Movie = {
  getAll: (callback) => {
    db.query("SELECT * FROM movies", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM movies WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO movies SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE movies SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM movies WHERE id = ?", [id], callback);
  },
};

module.exports = Movie;
